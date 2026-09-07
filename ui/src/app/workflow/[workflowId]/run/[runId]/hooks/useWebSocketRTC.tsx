import { useCallback, useEffect, useRef, useState } from "react";

import { client } from "@/client/client.gen";
import { getTurnCredentialsApiV1TurnCredentialsGet, validateUserConfigurationsApiV1UserConfigurationsUserValidateGet, validateWorkflowApiV1WorkflowWorkflowIdValidatePost } from "@/client/sdk.gen";
import { TurnCredentialsResponse } from "@/client/types.gen";
import { WorkflowValidationError } from "@/components/flow/types";
import type { ConversationNodeTransitionItem, RealtimeFeedbackMessage as FeedbackMessage } from "@/components/workflow/conversation";
import { useAppConfig } from "@/context/AppConfigContext";
import { resolveBrowserBackendUrl } from '@/lib/apiClient';
import { detailFromError } from '@/lib/apiError';
import logger from '@/lib/logger';

import { sdpFilterCodec } from "../utils";
import { useDeviceInputs } from "./useDeviceInputs";

interface UseWebSocketRTCProps {
    workflowId: number;
    workflowRunId: number;
    accessToken: string | null;
    initialContextVariables?: Record<string, string> | null;
    onNodeTransition?: (transition: ConversationNodeTransitionItem) => void;
}

type ConnectionStatus = 'idle' | 'connecting' | 'connected' | 'failed';

interface CleanupConnectionOptions {
    graceful?: boolean;
    status?: ConnectionStatus;
}

const HANDLED_SERVICE_ERROR_TYPES = new Set([
    'quota_exceeded',
    'insufficient_credits',
    'invalid_service_key',
    'service_key_org_mismatch',
    'quota_check_failed',
]);

// Errors meaning this run can never be called again. Retrying reaches the same
// refusal, so the session is closed out as completed and the caller is left to
// start a fresh run rather than being offered a retry that cannot succeed.
const SPENT_RUN_ERROR_TYPES = new Set(['workflow_run_already_completed']);

export const useWebSocketRTC = ({ workflowId, workflowRunId, accessToken, initialContextVariables, onNodeTransition }: UseWebSocketRTCProps) => {
    const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>('idle');
    const [connectionActive, setConnectionActive] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [apiKeyModalOpen, setApiKeyModalOpen] = useState(false);
    const [apiKeyError, setApiKeyError] = useState<string | null>(null);
    const [apiKeyErrorCode, setApiKeyErrorCode] = useState<string | null>(null);
    const [workflowConfigModalOpen, setWorkflowConfigModalOpen] = useState(false);
    const [workflowConfigError, setWorkflowConfigError] = useState<string | null>(null);
    const [isStarting, setIsStarting] = useState(false);
    const [feedbackMessages, setFeedbackMessages] = useState<FeedbackMessage[]>([]);
    const initialContext = initialContextVariables || {};
    const { config: appConfig, loading: appConfigLoading, refresh: refreshAppConfig } = useAppConfig();

    const {
        audioInputs,
        selectedAudioInput,
        setSelectedAudioInput,
        permissionError,
        setPermissionError,
        getAudioInputDevices
    } = useDeviceInputs();

    const useStun = true;
    const useAudio = true;
    const audioCodec = 'default';

    // TURN server credentials fetched at runtime from backend API
    // Uses time-limited credentials (TURN REST API) for security
    const turnCredentialsRef = useRef<TurnCredentialsResponse | null>(null);

    const audioRef = useRef<HTMLAudioElement>(null);
    const pcRef = useRef<RTCPeerConnection | null>(null);
    const wsRef = useRef<WebSocket | null>(null);
    const localStreamRef = useRef<MediaStream | null>(null);
    const timeStartRef = useRef<number | null>(null);
    const onNodeTransitionRef = useRef(onNodeTransition);
    // Each cleanup invalidates pending async work, including an unresolved mic prompt.
    const attemptRef = useRef(0);
    const startingRef = useRef(false);
    const cancelSocketConnectRef = useRef<(() => void) | null>(null);

    useEffect(() => {
        onNodeTransitionRef.current = onNodeTransition;
    }, [onNodeTransition]);

    // Generate a cryptographically secure unique ID
    const generateSecureId = () => {
        // Use Web Crypto API to generate random bytes
        const array = new Uint8Array(16);
        crypto.getRandomValues(array);
        // Convert to hex string
        return 'PC-' + Array.from(array)
            .map(b => b.toString(16).padStart(2, '0'))
            .join('');
    };

    const pc_id = useRef(generateSecureId());

    // Mute/speaking state tracking refs (ephemeral signals, not rendered directly)
    const userMutedRef = useRef(false);
    const firstBotSpeechCompletedRef = useRef(false);
    const currentAllowInterruptRef = useRef<boolean | undefined>(undefined);
    const interruptWarningShownRef = useRef(false);

    const getWebSocketUrl = useCallback(() => {
        // Single source of truth for the browser→API base URL: the centrally
        // resolved API client config (NEXT_PUBLIC_BACKEND_URL → the backend
        // endpoint reported by /health → window.location.origin), seeded by
        // createClientConfig and upgraded by AppConfigProvider. The backend now
        // reports the endpoint it runs on, so the old localhost autodetect that
        // forced :8000 (back when an unset endpoint fell through to the UI origin)
        // is no longer needed.
        const baseUrl = client.getConfig().baseUrl || resolveBrowserBackendUrl();
        const wsUrl = baseUrl.replace(/^http/, 'ws');
        return `${wsUrl}/api/v1/ws/signaling/${workflowId}/${workflowRunId}?token=${accessToken}`;
    }, [workflowId, workflowRunId, accessToken]);

    const closePeerConnection = useCallback((pc: RTCPeerConnection | null) => {
        if (!pc) return;

        if (pc.getTransceivers) {
            pc.getTransceivers().forEach((transceiver) => {
                if (transceiver.stop) {
                    try {
                        transceiver.stop();
                    } catch (e) {
                        logger.debug('Failed to stop transceiver during cleanup:', e);
                    }
                }
            });
        }

        pc.getSenders().forEach((sender) => {
            if (sender.track) {
                sender.track.stop();
            }
        });

        if (pc.signalingState !== 'closed') {
            pc.close();
        }
    }, []);

    const stopLocalStream = useCallback(() => {
        // Release the microphone so the device is freed for a subsequent call.
        // Stopping the sender tracks via pc.getSenders() alone can leave the
        // browser holding the mic, blocking the next getUserMedia().
        if (localStreamRef.current) {
            localStreamRef.current.getTracks().forEach((track) => track.stop());
            localStreamRef.current = null;
        }
    }, []);

    const cleanupConnection = useCallback((options: CleanupConnectionOptions = {}) => {
        const graceful = options.graceful ?? true;
        const status = options.status ?? (graceful ? 'idle' : 'failed');

        attemptRef.current += 1;
        startingRef.current = false;
        setIsStarting(false);
        setConnectionActive(false);
        setIsCompleted(graceful);
        setConnectionStatus(status);

        // Clear ownership before closing; close events must not affect a later call.
        const ws = wsRef.current;
        const pc = pcRef.current;
        wsRef.current = null;
        pcRef.current = null;
        cancelSocketConnectRef.current?.();
        cancelSocketConnectRef.current = null;
        if (ws) {
            ws.onopen = null;
            ws.onerror = null;
            ws.onclose = null;
            ws.onmessage = null;
            if (ws.readyState !== WebSocket.CLOSED && ws.readyState !== WebSocket.CLOSING) {
                ws.close();
            }
        }
        stopLocalStream();
        closePeerConnection(pc);
        if (audioRef.current) audioRef.current.srcObject = null;
        turnCredentialsRef.current = null;
    }, [closePeerConnection, stopLocalStream]);

    const createPeerConnection = () => {
        // Build ICE servers list
        const iceServers: RTCIceServer[] = [];

        // A `stun:` entry can only yield srflx, never relay — and srflx has been
        // seen leaking through iceTransportPolicy: 'relay', so skip it entirely.
        if (useStun && !appConfig?.forceTurnRelay) {
            iceServers.push({ urls: ['stun:stun.l.google.com:19302'] });
        }

        // Add TURN server if credentials are available (time-limited credentials from backend)
        const turnCredentials = turnCredentialsRef.current;
        if (turnCredentials?.uris && turnCredentials.uris.length > 0) {
            iceServers.push({
                urls: turnCredentials.uris,
                username: turnCredentials.username,
                credential: turnCredentials.password
            });

            logger.info(`TURN server configured with ${turnCredentials.uris.length} URIs, TTL: ${turnCredentials.ttl}s`);
        }

        const config: RTCConfiguration = {
            iceServers
        };

        // Diagnostic: when the backend is started with FORCE_TURN_RELAY=true,
        // restrict the browser to relay-only candidates so media must traverse
        // TURN. Lets you verify TURN connectivity end-to-end — a TURN
        // misconfiguration surfaces as an ICE failure instead of silently
        // falling back to host/srflx.
        if (appConfig?.forceTurnRelay) {
            config.iceTransportPolicy = 'relay';
            logger.info('FORCE_TURN_RELAY is on — restricting browser ICE to relay candidates only');
        }

        const pc = new RTCPeerConnection(config);

        // Set up ICE candidate trickling
        pc.addEventListener('icecandidate', (event) => {
            if (pcRef.current !== pc) return;
            if (wsRef.current?.readyState === WebSocket.OPEN) {
                const message = {
                    type: 'ice-candidate',
                    payload: {
                        candidate: event.candidate ? {
                            candidate: event.candidate.candidate,
                            sdpMid: event.candidate.sdpMid,
                            sdpMLineIndex: event.candidate.sdpMLineIndex
                        } : null,
                        pc_id: pc_id.current
                    }
                };
                wsRef.current.send(JSON.stringify(message));

                if (event.candidate) {
                    logger.debug(`Sending ICE candidate: ${event.candidate.candidate}`);
                } else {
                    logger.debug('Sending end-of-candidates signal');
                }
            }
        });

        const handlePeerStateChange = () => {
            if (pcRef.current !== pc) return;
            logger.info(`Peer connection state changed: ${pc.connectionState}; ICE: ${pc.iceConnectionState}`);

            if (
                ['failed', 'closed', 'disconnected'].includes(pc.connectionState) ||
                ['failed', 'closed', 'disconnected'].includes(pc.iceConnectionState)
            ) {
                setPermissionError('The audio connection was lost. Please retry the call.');
                cleanupConnection({ graceful: false, status: 'failed' });
                return;
            }

            if (
                pc.connectionState === 'connected' ||
                pc.iceConnectionState === 'connected' ||
                pc.iceConnectionState === 'completed'
            ) {
                setConnectionStatus('connected');
            }
        };

        pc.addEventListener('iceconnectionstatechange', handlePeerStateChange);
        pc.addEventListener('connectionstatechange', handlePeerStateChange);

        pc.addEventListener('track', (evt) => {
            if (pcRef.current !== pc) return;
            if (evt.track.kind === 'audio' && audioRef.current) {
                audioRef.current.srcObject = evt.streams[0];
            }
        });

        pcRef.current = pc;
        return pc;
    };

    const connectWebSocket = useCallback(async () => {
        const wsUrl = getWebSocketUrl();

        return new Promise<void>((resolve, reject) => {
            logger.info('Connecting to signaling WebSocket');

            const ws = new WebSocket(wsUrl);
            wsRef.current = ws;
            cancelSocketConnectRef.current = () => reject(new Error('Call startup cancelled'));

            ws.onopen = () => {
                if (wsRef.current !== ws) return;
                cancelSocketConnectRef.current = null;
                logger.info('WebSocket connected');
                wsRef.current = ws;
                resolve();
            };

            ws.onerror = (error) => {
                if (wsRef.current !== ws) return;
                logger.error('WebSocket error:', error);
                setPermissionError('Could not connect to the call. Please retry.');
                cleanupConnection({ graceful: false, status: 'failed' });
            };

            ws.onclose = (event) => {
                if (wsRef.current !== ws) return;
                logger.info('WebSocket closed');
                if (event.reason === 'call ended') {
                    cleanupConnection({ graceful: true, status: 'idle' });
                } else {
                    setPermissionError('The call connection closed unexpectedly. Please retry.');
                    cleanupConnection({ graceful: false, status: 'failed' });
                }
            };

            ws.onmessage = async (event) => {
                if (wsRef.current !== ws) return;
                try {
                    const message = JSON.parse(event.data);

                    switch (message.type) {
                        case 'answer':
                            // Set remote description immediately (may have no candidates)
                            const answer = message.payload;
                            logger.debug('Received answer from server');

                            const pc = pcRef.current;
                            if (pc) {
                                try {
                                    await pc.setRemoteDescription({
                                        type: 'answer',
                                        sdp: answer.sdp
                                    });
                                } catch (error) {
                                    if (pcRef.current !== pc || wsRef.current !== ws) return;
                                    logger.error('Failed to apply the call answer:', error);
                                    setPermissionError('Could not establish the call. Please retry.');
                                    cleanupConnection({ graceful: false, status: 'failed' });
                                    return;
                                }
                                if (pcRef.current !== pc || wsRef.current !== ws) return;
                                setConnectionActive(true);
                                logger.info('Remote description set');
                            }
                            break;

                        case 'ice-candidate':
                            // Add ICE candidate from server
                            const candidate = message.payload.candidate;

                            if (candidate && pcRef.current) {
                                try {
                                    await pcRef.current.addIceCandidate({
                                        candidate: candidate.candidate,
                                        sdpMid: candidate.sdpMid,
                                        sdpMLineIndex: candidate.sdpMLineIndex
                                    });
                                    logger.debug(`Added remote ICE candidate: ${candidate.candidate}`);
                                } catch (e) {
                                    logger.error('Failed to add ICE candidate:', e);
                                }
                            } else if (!candidate) {
                                logger.debug('Received end-of-candidates signal from server');
                            }
                            break;

                        case 'error':
                            // Check if this is a quota/service key error
                            if (HANDLED_SERVICE_ERROR_TYPES.has(message.payload?.error_type)) {
                                // Log as info since it's a handled business logic case
                                logger.info('Quota/service key error, showing user dialog:', message.payload.message);

                                // Set error state for display
                                setApiKeyErrorCode(message.payload.error_type);
                                setApiKeyError(message.payload.message || 'Service quota exceeded');
                                setApiKeyModalOpen(true);

                                // Stop the connection and surface the handled service error.
                                cleanupConnection({ graceful: false, status: 'failed' });
                            } else if (SPENT_RUN_ERROR_TYPES.has(message.payload?.error_type)) {
                                logger.info('Run is no longer callable:', message.payload.message);
                                setPermissionError(
                                    message.payload?.message || 'This test run has already finished.'
                                );
                                // Completed rather than failed: the run did its
                                // work, so the footer offers a new test instead
                                // of a retry that would be refused again.
                                cleanupConnection({ graceful: true, status: 'idle' });
                            } else {
                                const serverErrorMessage = message.payload?.message || 'Server error';
                                logger.error('Server error:', message.payload);
                                setPermissionError(serverErrorMessage);
                                cleanupConnection({ graceful: false, status: 'failed' });
                            }
                            break;

                        case 'call-ended':
                            logger.info('Call ended by server:', message.payload);
                            cleanupConnection({ graceful: true, status: 'idle' });
                            break;

                        case 'rtf-user-transcription': {
                            const transcription = message.payload;

                            // Show one-time warning if user speaks while muted on a no-interrupt node
                            // Skip during initial bot greeting (muted by MuteUntilFirstBotComplete strategy)
                            if (
                                !interruptWarningShownRef.current &&
                                firstBotSpeechCompletedRef.current &&
                                userMutedRef.current &&
                                currentAllowInterruptRef.current === false
                            ) {
                                interruptWarningShownRef.current = true;
                                setFeedbackMessages(prev => [...prev, {
                                    id: `interrupt-warning-${Date.now()}`,
                                    type: 'interrupt-warning',
                                    text: 'Interruption is disabled for this step. The bot will finish speaking before processing your input. You can enable interruption in the workflow editor.',
                                    timestamp: new Date().toISOString(),
                                }]);
                            }

                            setFeedbackMessages(prev => {
                                // Step 1: Finalize the last bot message (user started speaking)
                                const messagesWithBotFinalized = prev.map((msg, idx) => {
                                    const isLastMessage = idx === prev.length - 1;
                                    const isUnfinalizedBotMessage = msg.type === 'bot-text' && !msg.final;
                                    return isLastMessage && isUnfinalizedBotMessage
                                        ? { ...msg, final: true }
                                        : msg;
                                });

                                // Step 2: Remove any previous interim transcription
                                const messagesWithoutInterim = messagesWithBotFinalized.filter(
                                    msg => !(msg.type === 'user-transcription' && !msg.final)
                                );

                                // Step 3: Add new transcription (interim or final)
                                return [...messagesWithoutInterim, {
                                    id: `user-${Date.now()}`,
                                    type: 'user-transcription',
                                    text: transcription.text,
                                    final: transcription.final,
                                    timestamp: new Date().toISOString(),
                                }];
                            });
                            break;
                        }

                        case 'rtf-bot-text': {
                            // TTS text comes as sentences/phrases, concatenate with space
                            setFeedbackMessages(prev => {
                                const last = prev[prev.length - 1];
                                if (last && last.type === 'bot-text' && !last.final) {
                                    // Append to existing bot message
                                    return [
                                        ...prev.slice(0, -1),
                                        { ...last, text: last.text + ' ' + message.payload.text }
                                    ];
                                }
                                // Start new bot message
                                return [...prev, {
                                    id: `bot-${Date.now()}`,
                                    type: 'bot-text',
                                    text: message.payload.text,
                                    final: false,
                                    timestamp: new Date().toISOString(),
                                }];
                            });
                            break;
                        }

                        case 'rtf-function-call-start': {
                            const { function_name, tool_call_id, arguments: toolArguments } = message.payload;
                            setFeedbackMessages(prev => {
                                // Check if we already have this function call
                                const existingId = tool_call_id
                                    ? `func-${tool_call_id}`
                                    : `func-${Date.now()}`;
                                if (prev.some(msg => msg.id === existingId)) {
                                    return prev;
                                }
                                return [...prev, {
                                    id: existingId,
                                    type: 'function-call',
                                    text: function_name ?? 'tool',
                                    functionName: function_name ?? 'tool',
                                    toolCallId: tool_call_id,
                                    arguments: toolArguments,
                                    status: 'running',
                                    timestamp: new Date().toISOString(),
                                }];
                            });
                            break;
                        }

                        case 'rtf-function-call-end': {
                            const { tool_call_id, result } = message.payload;
                            setFeedbackMessages(prev => prev.map(msg =>
                                msg.id === `func-${tool_call_id}`
                                    ? { ...msg, status: 'completed' as const, text: result || msg.text, result }
                                    : msg
                            ));
                            break;
                        }

                        case 'rtf-node-transition': {
                            const {
                                node_id,
                                node_name,
                                previous_node_id,
                                previous_node_name,
                                allow_interrupt,
                            } = message.payload;
                            currentAllowInterruptRef.current = allow_interrupt;
                            const transitionTimestamp = new Date().toISOString();
                            const transition: ConversationNodeTransitionItem = {
                                kind: 'node-transition',
                                id: `node-${Date.now()}`,
                                timestamp: transitionTimestamp,
                                nodeId: node_id,
                                nodeName: node_name ?? 'Node',
                                previousNodeId: previous_node_id,
                                previousNodeName: previous_node_name,
                                allowInterrupt: allow_interrupt,
                            };
                            setFeedbackMessages(prev => [...prev, {
                                id: transition.id,
                                type: 'node-transition',
                                text: transition.nodeName,
                                nodeId: transition.nodeId,
                                nodeName: transition.nodeName,
                                previousNodeId: transition.previousNodeId,
                                previousNode: previous_node_name,
                                allowInterrupt: allow_interrupt,
                                timestamp: transitionTimestamp,
                            }]);
                            onNodeTransitionRef.current?.(transition);
                            break;
                        }

                        case 'rtf-ttfb-metric': {
                            const { ttfb_seconds, processor, model } = message.payload;
                            setFeedbackMessages(prev => [...prev, {
                                id: `ttfb-${Date.now()}`,
                                type: 'ttfb-metric',
                                text: `${(ttfb_seconds * 1000).toFixed(0)}ms`,
                                ttfbSeconds: ttfb_seconds,
                                processor,
                                model,
                                timestamp: new Date().toISOString(),
                            }]);
                            break;
                        }

                        case 'rtf-pipeline-error': {
                            const { error, fatal, processor: errorProcessor } = message.payload;
                            setFeedbackMessages(prev => [...prev, {
                                id: `error-${Date.now()}`,
                                type: 'pipeline-error',
                                text: error,
                                fatal,
                                processor: errorProcessor,
                                timestamp: new Date().toISOString(),
                            }]);
                            break;
                        }

                        // Ephemeral state signals — update refs only, no UI messages
                        case 'rtf-bot-started-speaking':
                            break;

                        case 'rtf-bot-stopped-speaking':
                            if (!firstBotSpeechCompletedRef.current) {
                                firstBotSpeechCompletedRef.current = true;
                            }
                            // Finalize the last bot message so "speaking..." indicator is removed
                            setFeedbackMessages(prev => {
                                const lastIdx = prev.length - 1;
                                const last = prev[lastIdx];
                                if (last && last.type === 'bot-text' && !last.final) {
                                    const updated = [...prev];
                                    updated[lastIdx] = { ...last, final: true };
                                    return updated;
                                }
                                return prev;
                            });
                            break;

                        case 'rtf-user-mute-started':
                            userMutedRef.current = true;
                            break;

                        case 'rtf-user-mute-stopped':
                            userMutedRef.current = false;
                            break;

                        default:
                            logger.warn('Unknown message type:', message.type);
                    }
                } catch (e) {
                    if (wsRef.current !== ws) return;
                    logger.error('Failed to handle WebSocket message:', e);
                }
            };
        });
    }, [getWebSocketUrl, cleanupConnection, setPermissionError]);

    const negotiate = async () => {
        const pc = pcRef.current;
        const ws = wsRef.current;

        if (!pc || !ws || ws.readyState !== WebSocket.OPEN) {
            throw new Error('The audio connection is not ready. Please retry.');
        }

        // Create offer
        const offer = await pc.createOffer();
        if (pcRef.current !== pc || wsRef.current !== ws) return;
        await pc.setLocalDescription(offer);
        if (pcRef.current !== pc || wsRef.current !== ws) return;

        const localDescription = pc.localDescription;
        if (!localDescription) throw new Error('Could not prepare the audio connection. Please retry.');

        let sdp = localDescription.sdp;

        if (audioCodec !== 'default') {
            sdp = sdpFilterCodec('audio', audioCodec, sdp);
        }

        // Send offer immediately via WebSocket (without waiting for ICE gathering)
        const message = {
            type: 'offer',
            payload: {
                sdp: sdp,
                type: 'offer',
                pc_id: pc_id.current,
                workflow_id: workflowId,
                workflow_run_id: workflowRunId,
                call_context_vars: initialContext
            }
        };

        ws.send(JSON.stringify(message));
        logger.info('Sent offer via WebSocket (ICE trickling enabled)');
    };

    const start = async () => {
        if (startingRef.current || pcRef.current || wsRef.current) return;
        cleanupConnection({ graceful: false, status: 'connecting' });
        if (!accessToken) {
            setPermissionError('Your session is unavailable. Sign in again to test the call.');
            cleanupConnection({ graceful: false, status: 'failed' });
            return;
        }
        const attempt = attemptRef.current;
        const isCurrentAttempt = () => attemptRef.current === attempt;
        startingRef.current = true;
        setApiKeyModalOpen(false);
        setApiKeyError(null);
        setApiKeyErrorCode(null);
        setWorkflowConfigModalOpen(false);
        setWorkflowConfigError(null);
        userMutedRef.current = false;
        firstBotSpeechCompletedRef.current = false;
        currentAllowInterruptRef.current = undefined;
        interruptWarningShownRef.current = false;
        pc_id.current = generateSecureId();
        setIsStarting(true);
        setConnectionActive(false);
        setIsCompleted(false);
        setPermissionError(null);
        setConnectionStatus('connecting');

        try {
            // Fetch time-limited TURN credentials from backend API only if the
            // server reports a TURN server is configured. Skipping the request
            // avoids a 503 on OSS local deployments that don't run coturn.
            if (appConfig?.turnEnabled === false) {
                logger.info('TURN server disabled in app config, using STUN only');
            } else {
                try {
                    const turnResponse = await getTurnCredentialsApiV1TurnCredentialsGet({
                        headers: {
                            'Authorization': `Bearer ${accessToken}`,
                        },
                    });
                    if (!isCurrentAttempt()) return;
                    if (!turnResponse.error && turnResponse.data) {
                        turnCredentialsRef.current = turnResponse.data;
                        logger.info(`TURN credentials obtained, TTL: ${turnResponse.data.ttl}s`);
                    } else if (turnResponse.response?.status === 503) {
                        // TURN not configured on server - this is OK, we'll use STUN only
                        logger.info('TURN server not configured, using STUN only');
                    } else {
                        logger.warn(`Failed to fetch TURN credentials: ${turnResponse.response?.status}`);
                    }
                } catch (e) {
                    logger.warn('Failed to fetch TURN credentials, continuing without TURN:', e);
                }
            }

            if (!isCurrentAttempt()) return;
            if (appConfig?.forceTurnRelay && !turnCredentialsRef.current?.uris?.length) {
                throw new Error('The required TURN relay is unavailable. Please retry or check the TURN configuration.');
            }

            // Validate API keys
            const response = await validateUserConfigurationsApiV1UserConfigurationsUserValidateGet({
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
                query: {
                    validity_ttl_seconds: 86400
                },
            });

            if (!isCurrentAttempt()) return;
            if (response.error) {
                const isServiceUnavailable = response.response?.status === 503;
                const message = detailFromError(
                    response.error,
                    isServiceUnavailable
                        ? 'Menace Voice is temporarily unavailable. Please try again later.'
                        : 'API Key Error',
                );

                if (isServiceUnavailable) {
                    // MPS is a Menace Voice-owned dependency. Do not tell the
                    // customer to change credentials when it could not validate them.
                    setApiKeyModalOpen(false);
                    setApiKeyError(null);
                    setApiKeyErrorCode(null);
                    setPermissionError(message);
                    cleanupConnection({ graceful: false, status: 'failed' });
                    return;
                }

                setApiKeyModalOpen(true);
                setApiKeyErrorCode('invalid_api_key');
                setApiKeyError(message);
                cleanupConnection({ graceful: false, status: 'failed' });
                return;
            }

            // Validate workflow
            const workflowResponse = await validateWorkflowApiV1WorkflowWorkflowIdValidatePost({
                path: {
                    workflow_id: workflowId,
                },
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (!isCurrentAttempt()) return;
            if (workflowResponse.error) {
                setWorkflowConfigModalOpen(true);
                let msg = 'Workflow validation failed';
                const errorDetail = workflowResponse.error as { detail?: { errors: WorkflowValidationError[] } };
                if (errorDetail?.detail?.errors) {
                    msg = errorDetail.detail.errors
                        .map(err => `${err.kind}: ${err.message}`)
                        .join('\n');
                }
                setWorkflowConfigError(msg);
                cleanupConnection({ graceful: false, status: 'failed' });
                return;
            }

            // Connect WebSocket first
            await connectWebSocket();
            if (!isCurrentAttempt()) return;

            // Create peer connection
            timeStartRef.current = null;
            const pc = createPeerConnection();

            // Set up media constraints
            const constraints: MediaStreamConstraints = {
                audio: false,
            };

            if (useAudio) {
                const audioConstraints: MediaTrackConstraints = {};
                if (selectedAudioInput) {
                    audioConstraints.deviceId = { exact: selectedAudioInput };
                }
                constraints.audio = Object.keys(audioConstraints).length ? audioConstraints : true;
            }

            // A microphone prompt can resolve after stop/unmount or a new attempt.
            // Such a stream never becomes owned by this hook and must be stopped here.
            if (constraints.audio) {
                let stream: MediaStream;
                try {
                    stream = await navigator.mediaDevices.getUserMedia(constraints);
                } catch {
                    throw new Error('Could not access your microphone. Allow microphone access and retry the call.');
                }
                if (!isCurrentAttempt()) {
                    stream.getTracks().forEach((track) => track.stop());
                    return;
                }
                localStreamRef.current = stream;
                stream.getTracks().forEach((track) => pc.addTrack(track, stream));
            }
            await negotiate();
        } catch (error) {
            if (!isCurrentAttempt()) return;
            logger.error('Failed to start connection:', error);
            setPermissionError(error instanceof Error ? error.message : 'Could not start the call. Please retry.');
            cleanupConnection({ graceful: false, status: 'failed' });
        } finally {
            if (isCurrentAttempt()) {
                startingRef.current = false;
                setIsStarting(false);
            }
        }
    };

    const stop = () => {
        cleanupConnection({ graceful: true, status: 'idle' });
    };

    // Also release the old call if this hook is reused for a different run/session.
    useEffect(() => {
        return () => cleanupConnection({ graceful: true, status: 'idle' });
    }, [cleanupConnection, workflowId, workflowRunId, accessToken]);

    return {
        audioRef,
        audioInputs,
        selectedAudioInput,
        setSelectedAudioInput,
        // Auto-starting callers must wait on both: /api/config/version resolves
        // 200 even when its backend healthcheck failed, defaulting forceTurnRelay
        // to false, so only a 'reachable' backendStatus confirms the real value.
        appConfig,
        appConfigLoading,
        refreshAppConfig,
        connectionActive,
        permissionError,
        isCompleted,
        apiKeyModalOpen,
        setApiKeyModalOpen,
        apiKeyError,
        apiKeyErrorCode,
        workflowConfigError,
        workflowConfigModalOpen,
        setWorkflowConfigModalOpen,
        connectionStatus,
        start,
        stop,
        isStarting,
        initialContext,
        getAudioInputDevices,
        feedbackMessages,
    };
};

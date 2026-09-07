import { act, renderHook, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { useWebSocketRTC } from './useWebSocketRTC';

const mocks = vi.hoisted(() => ({
    validateKeys: vi.fn(),
    validateWorkflow: vi.fn(),
    turn: vi.fn(),
    config: { turnEnabled: false, forceTurnRelay: false, backendStatus: 'reachable' },
}));
vi.mock('@/client/sdk.gen', () => ({
    validateUserConfigurationsApiV1UserConfigurationsUserValidateGet: mocks.validateKeys,
    validateWorkflowApiV1WorkflowWorkflowIdValidatePost: mocks.validateWorkflow,
    getTurnCredentialsApiV1TurnCredentialsGet: mocks.turn,
}));
vi.mock('@/client/client.gen', () => ({ client: { getConfig: () => ({ baseUrl: 'https://api.test' }) } }));
vi.mock('@/lib/apiClient', () => ({ resolveBrowserBackendUrl: () => 'https://api.test' }));
vi.mock('@/context/AppConfigContext', () => ({ useAppConfig: () => ({ config: mocks.config, loading: false }) }));
vi.mock('@/lib/logger', () => ({ default: { info: vi.fn(), debug: vi.fn(), warn: vi.fn(), error: vi.fn() } }));

class Socket {
    static CONNECTING = 0;
    static OPEN = 1;
    static CLOSING = 2;
    static CLOSED = 3;
    static instances: Socket[] = [];
    readyState = Socket.CONNECTING;
    onopen: (() => void) | null = null;
    onerror: ((event: Event) => void) | null = null;
    onclose: ((event: { reason: string }) => void) | null = null;
    onmessage: ((event: { data: string }) => Promise<void>) | null = null;
    send = vi.fn();
    close = vi.fn(() => { this.readyState = Socket.CLOSED; this.onclose?.({ reason: '' }); });
    constructor() { Socket.instances.push(this); }
    open() { this.readyState = Socket.OPEN; this.onopen?.(); }
    message(type: string, payload: object = {}) { return this.onmessage?.({ data: JSON.stringify({ type, payload }) }); }
}

class Peer extends EventTarget {
    static instances: Peer[] = [];
    static rejectOffer = false;
    connectionState = 'new';
    iceConnectionState = 'new';
    signalingState = 'stable';
    localDescription: RTCSessionDescriptionInit | null = null;
    tracks: MediaStreamTrack[] = [];
    close = vi.fn(() => { this.signalingState = 'closed'; this.connectionState = 'closed'; this.dispatchEvent(new Event('connectionstatechange')); });
    getSenders = () => this.tracks.map(track => ({ track }));
    getTransceivers = () => [];
    addTrack = vi.fn((track: MediaStreamTrack) => this.tracks.push(track));
    createOffer = vi.fn(async () => {
        if (Peer.rejectOffer) throw new Error('Negotiation failed');
        return { type: 'offer' as const, sdp: 'test-sdp' };
    });
    setLocalDescription = vi.fn(async (offer: RTCSessionDescriptionInit) => { this.localDescription = offer; });
    setRemoteDescription = vi.fn(async () => {});
    addIceCandidate = vi.fn(async () => {});
    constructor(public config: RTCConfiguration) { super(); Peer.instances.push(this); }
}

function media() {
    const track = { stop: vi.fn(), kind: 'audio' };
    const stream = { getTracks: () => [track] } as unknown as MediaStream;
    return { track, stream };
}
function deferred<T>() {
    let resolve!: (value: T) => void;
    const promise = new Promise<T>(done => { resolve = done; });
    return { promise, resolve };
}
const getUserMedia = vi.fn();
const props = { workflowId: 1, workflowRunId: 2, accessToken: 'token' };
type HookResult = ReturnType<typeof renderHook<ReturnType<typeof useWebSocketRTC>, typeof props>>;
async function begin(hook: HookResult) {
    const count = Socket.instances.length;
    let pending!: Promise<void>;
    act(() => { pending = hook.result.current.start(); });
    await waitFor(() => expect(Socket.instances).toHaveLength(count + 1));
    await act(async () => { Socket.instances[count].open(); });
    return { pending, socket: Socket.instances[count], peer: Peer.instances.at(-1)! };
}
async function connect(hook: HookResult) {
    const call = await begin(hook);
    await act(async () => { await call.pending; await call.socket.message('answer', { sdp: 'answer' }); });
    return call;
}
function expectReleased(call: { socket: Socket; peer: Peer }, track?: ReturnType<typeof media>['track']) {
    expect(call.socket.readyState).toBe(Socket.CLOSED);
    expect(call.peer.close).toHaveBeenCalledOnce();
    if (track) expect(track.stop).toHaveBeenCalled();
}

beforeEach(() => {
    Socket.instances = [];
    Peer.instances = [];
    Peer.rejectOffer = false;
    mocks.config.turnEnabled = false;
    mocks.config.forceTurnRelay = false;
    mocks.validateKeys.mockReset().mockResolvedValue({ data: {} });
    mocks.validateWorkflow.mockReset().mockResolvedValue({ data: {} });
    mocks.turn.mockReset().mockResolvedValue({ error: { detail: 'Unavailable' }, response: { status: 503 } });
    getUserMedia.mockReset().mockResolvedValue(media().stream);
    vi.stubGlobal('WebSocket', Socket);
    vi.stubGlobal('RTCPeerConnection', Peer);
    Object.defineProperty(navigator, 'mediaDevices', { configurable: true, value: { getUserMedia, enumerateDevices: vi.fn().mockResolvedValue([]) } });
});

describe('browser call resource lifecycle', () => {
    it('closes socket and peer when microphone access is denied', async () => {
        getUserMedia.mockRejectedValue(new DOMException('Denied', 'NotAllowedError'));
        const hook = renderHook(() => useWebSocketRTC(props));
        const call = await begin(hook);
        await act(async () => { await call.pending; });
        expectReleased(call);
        expect(hook.result.current.permissionError).toMatch(/microphone.*retry/i);
        expect(hook.result.current.connectionStatus).toBe('failed');
        expect(hook.result.current.isStarting).toBe(false);
    });

    it('stops tracks and closes both transports after negotiation fails', async () => {
        const { stream, track } = media();
        getUserMedia.mockResolvedValue(stream);
        Peer.rejectOffer = true;
        const hook = renderHook(() => useWebSocketRTC(props));
        const call = await begin(hook);
        await act(async () => { await call.pending; });
        expectReleased(call, track);
        expect(hook.result.current.connectionStatus).toBe('failed');
        expect(hook.result.current.connectionActive).toBe(false);
    });

    it.each(['failed', 'disconnected'])('cleans up a peer entering %s without reporting successful completion', async state => {
        const { stream, track } = media();
        getUserMedia.mockResolvedValue(stream);
        const hook = renderHook(() => useWebSocketRTC(props));
        const call = await connect(hook);
        act(() => { call.peer.connectionState = state; call.peer.dispatchEvent(new Event('connectionstatechange')); });
        expectReleased(call, track);
        expect(hook.result.current.connectionStatus).toBe('failed');
        expect(hook.result.current.connectionActive).toBe(false);
        expect(hook.result.current.isCompleted).toBe(false);
    });

    it.each(['close', 'error'])('releases microphone and peer after unexpected socket %s', async event => {
        const { stream, track } = media();
        getUserMedia.mockResolvedValue(stream);
        const hook = renderHook(() => useWebSocketRTC(props));
        const call = await connect(hook);
        act(() => {
            if (event === 'close') { call.socket.readyState = Socket.CLOSED; call.socket.onclose?.({ reason: '' }); }
            else call.socket.onerror?.(new Event('error'));
        });
        expectReleased(call, track);
        expect(hook.result.current.connectionStatus).toBe('failed');
        expect(hook.result.current.connectionActive).toBe(false);
    });

    it.each(['stop', 'unmount', 'call-ended', 'spent-run', 'close-ended'])('releases every resource on %s', async action => {
        const { stream, track } = media();
        getUserMedia.mockResolvedValue(stream);
        const hook = renderHook(() => useWebSocketRTC(props));
        const call = await connect(hook);
        await act(async () => {
            if (action === 'stop') hook.result.current.stop();
            else if (action === 'unmount') hook.unmount();
            else if (action === 'spent-run') await call.socket.message('error', { error_type: 'workflow_run_already_completed' });
            else if (action === 'close-ended') { call.socket.readyState = Socket.CLOSED; call.socket.onclose?.({ reason: 'call ended' }); }
            else await call.socket.message('call-ended');
        });
        expectReleased(call, track);
        if (action !== 'unmount') {
            expect(hook.result.current.isCompleted).toBe(true);
            expect(hook.result.current.connectionStatus).toBe('idle');
            expect(hook.result.current.connectionActive).toBe(false);
        }
    });

    it('retries with fresh resources and ignores events from the failed call', async () => {
        const first = media();
        const second = media();
        getUserMedia.mockResolvedValueOnce(first.stream).mockResolvedValueOnce(second.stream);
        const hook = renderHook(() => useWebSocketRTC(props));
        const old = await connect(hook);
        const staleClose = old.socket.onclose;
        act(() => old.socket.onerror?.(new Event('error')));
        const current = await connect(hook);
        act(() => { staleClose?.({ reason: '' }); old.peer.dispatchEvent(new Event('connectionstatechange')); });
        expectReleased(old, first.track);
        expect(current.peer).not.toBe(old.peer);
        expect(current.socket).not.toBe(old.socket);
        expect(current.peer.close).not.toHaveBeenCalled();
        expect(second.track.stop).not.toHaveBeenCalled();
        expect(hook.result.current.connectionActive).toBe(true);
        expect(hook.result.current.permissionError).toBeNull();
    });

    it.each(['stop', 'unmount'])('stops a late microphone stream resolving after %s', async action => {
        const pendingMedia = deferred<MediaStream>();
        const { stream, track } = media();
        getUserMedia.mockReturnValue(pendingMedia.promise);
        const hook = renderHook(() => useWebSocketRTC(props));
        const call = await begin(hook);
        act(() => { if (action === 'stop') hook.result.current.stop(); else hook.unmount(); });
        await act(async () => { pendingMedia.resolve(stream); await call.pending; });
        expectReleased(call, track);
        expect(call.peer.addTrack).not.toHaveBeenCalled();
        expect(call.socket.send).not.toHaveBeenCalled();
    });

    it('closes a connecting socket on stop and settles the pending start', async () => {
        const hook = renderHook(() => useWebSocketRTC(props));
        let pending!: Promise<void>;
        act(() => { pending = hook.result.current.start(); });
        await waitFor(() => expect(Socket.instances).toHaveLength(1));
        await act(async () => { hook.result.current.stop(); await pending; });
        expect(Socket.instances[0].close).toHaveBeenCalledOnce();
        expect(Peer.instances).toHaveLength(0);
        expect(hook.result.current.isStarting).toBe(false);
    });

    it('cancels startup before resources are acquired when validation resolves after stop', async () => {
        const validation = deferred<{ data: object }>();
        mocks.validateKeys.mockReturnValue(validation.promise);
        const hook = renderHook(() => useWebSocketRTC(props));
        let pending!: Promise<void>;
        act(() => { pending = hook.result.current.start(); hook.result.current.stop(); });
        await act(async () => { validation.resolve({ data: {} }); await pending; });
        expect(Socket.instances).toHaveLength(0);
        expect(getUserMedia).not.toHaveBeenCalled();
    });

    it('guards repeated starts synchronously', async () => {
        const hook = renderHook(() => useWebSocketRTC(props));
        let first!: Promise<void>;
        act(() => { first = hook.result.current.start(); void hook.result.current.start(); });
        await waitFor(() => expect(Socket.instances).toHaveLength(1));
        await act(async () => { Socket.instances[0].open(); await first; });
        expect(mocks.validateKeys).toHaveBeenCalledOnce();
        expect(getUserMedia).toHaveBeenCalledOnce();
    });

    it('preserves relay enforcement and fails before media when required TURN is unavailable', async () => {
        mocks.config.turnEnabled = true;
        mocks.config.forceTurnRelay = true;
        const hook = renderHook(() => useWebSocketRTC(props));
        await act(async () => { await hook.result.current.start(); });
        expect(hook.result.current.connectionStatus).toBe('failed');
        expect(hook.result.current.permissionError).toMatch(/TURN/);
        expect(Socket.instances).toHaveLength(0);
        expect(getUserMedia).not.toHaveBeenCalled();
    });

    it('uses STUN fallback when TURN is optional and unavailable', async () => {
        mocks.config.turnEnabled = true;
        const hook = renderHook(() => useWebSocketRTC(props));
        const call = await connect(hook);
        expect(call.peer.config.iceServers).toEqual([{ urls: ['stun:stun.l.google.com:19302'] }]);
        expect(hook.result.current.connectionActive).toBe(true);
    });

    it.each(['error', 'close'])('settles a startup socket %s before open without acquiring media', async event => {
        const hook = renderHook(() => useWebSocketRTC(props));
        let pending!: Promise<void>;
        act(() => { pending = hook.result.current.start(); });
        await waitFor(() => expect(Socket.instances).toHaveLength(1));
        await act(async () => {
            const socket = Socket.instances[0];
            if (event === 'close') { socket.readyState = Socket.CLOSED; socket.onclose?.({ reason: '' }); }
            else socket.onerror?.(new Event('error'));
            await pending;
        });
        expect(Socket.instances[0].readyState).toBe(Socket.CLOSED);
        expect(getUserMedia).not.toHaveBeenCalled();
        expect(hook.result.current.isStarting).toBe(false);
        expect(hook.result.current.connectionStatus).toBe('failed');
    });

    it('releases resources when applying the server answer fails', async () => {
        const { stream, track } = media();
        getUserMedia.mockResolvedValue(stream);
        const hook = renderHook(() => useWebSocketRTC(props));
        const call = await begin(hook);
        await act(async () => { await call.pending; });
        call.peer.setRemoteDescription.mockRejectedValueOnce(new Error('Bad SDP'));
        await act(async () => { await call.socket.message('answer', { sdp: 'invalid' }); });
        expectReleased(call, track);
        expect(hook.result.current.connectionActive).toBe(false);
        expect(hook.result.current.connectionStatus).toBe('failed');
    });

    it('does not reactivate the call when a server answer finishes applying after stop', async () => {
        const hook = renderHook(() => useWebSocketRTC(props));
        const call = await begin(hook);
        await act(async () => { await call.pending; });
        const answer = deferred<void>();
        call.peer.setRemoteDescription.mockReturnValueOnce(answer.promise);
        let handling: Promise<void> | undefined;
        act(() => { handling = call.socket.message('answer', { sdp: 'answer' }); hook.result.current.stop(); });
        await act(async () => { answer.resolve(); await handling; });
        expectReleased(call);
        expect(hook.result.current.connectionActive).toBe(false);
        expect(hook.result.current.isCompleted).toBe(true);
    });

    it('stops an old pending microphone stream without affecting a successful retry', async () => {
        const lateMedia = deferred<MediaStream>();
        const oldMedia = media();
        const newMedia = media();
        getUserMedia.mockReturnValueOnce(lateMedia.promise).mockResolvedValueOnce(newMedia.stream);
        const hook = renderHook(() => useWebSocketRTC(props));
        const old = await begin(hook);
        act(() => old.socket.onerror?.(new Event('error')));
        const current = await connect(hook);
        await act(async () => { lateMedia.resolve(oldMedia.stream); await old.pending; });
        expectReleased(old, oldMedia.track);
        expect(current.peer.close).not.toHaveBeenCalled();
        expect(newMedia.track.stop).not.toHaveBeenCalled();
        expect(hook.result.current.connectionActive).toBe(true);
    });

    it('releases resources when the hook switches to another workflow run', async () => {
        const { stream, track } = media();
        getUserMedia.mockResolvedValue(stream);
        const hook = renderHook(currentProps => useWebSocketRTC(currentProps), { initialProps: props });
        const call = await connect(hook);
        hook.rerender({ ...props, workflowRunId: 3 });
        expectReleased(call, track);
        expect(hook.result.current.connectionActive).toBe(false);
    });

    it.each(['keys', 'workflow'])('surfaces resolved %s validation errors and permits a fresh retry', async kind => {
        if (kind === 'keys') mocks.validateKeys.mockResolvedValueOnce({ error: { detail: 'Invalid key' } });
        else mocks.validateWorkflow.mockResolvedValueOnce({ error: { detail: { errors: [{ kind: 'node', message: 'Missing start' }] } } });
        const hook = renderHook(() => useWebSocketRTC(props));
        await act(async () => { await hook.result.current.start(); });
        expect(hook.result.current.connectionStatus).toBe('failed');
        expect(hook.result.current.isStarting).toBe(false);
        expect(Socket.instances).toHaveLength(0);
        if (kind === 'keys') expect(hook.result.current.apiKeyError).toBe('Invalid key');
        else expect(hook.result.current.workflowConfigError).toBe('node: Missing start');
        await connect(hook);
        expect(hook.result.current.apiKeyModalOpen).toBe(false);
        expect(hook.result.current.workflowConfigModalOpen).toBe(false);
        expect(hook.result.current.connectionActive).toBe(true);
    });

    it('uses relay-only candidates when TURN is enforced and credentials are available', async () => {
        mocks.config.turnEnabled = true;
        mocks.config.forceTurnRelay = true;
        mocks.turn.mockResolvedValue({ data: { uris: ['turn:relay.test'], username: 'user', password: 'password', ttl: 600 } });
        const hook = renderHook(() => useWebSocketRTC(props));
        const call = await connect(hook);
        expect(call.peer.config).toEqual({
            iceTransportPolicy: 'relay',
            iceServers: [{ urls: ['turn:relay.test'], username: 'user', credential: 'password' }],
        });
    });

});

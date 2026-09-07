'use client';

import { Bot, ChevronDown, LayoutTemplate, PlusIcon, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { toast } from 'sonner';

import { createWorkflowApiV1WorkflowCreateDefinitionPost, listNodeTypesApiV1NodeTypesGet } from '@/client/sdk.gen';
import { buildNewNode } from '@/components/flow/renderer/buildNewNode';
import { NodeType } from '@/components/flow/types';
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { detailFromError } from '@/lib/apiError';
import { useAuth } from '@/lib/auth';
import logger from '@/lib/logger';
import { getRandomId } from '@/lib/utils';

export function CreateWorkflowButton() {
    const router = useRouter();
    const { user, loading: authLoading, getAccessToken } = useAuth();
    const creatingRef = useRef(false);
    const [isCreating, setIsCreating] = useState(false);

    const handleAgentBuilder = () => {
        router.push('/agent-onboarding');
    };

    const handleBlankCanvas = async () => {
        if (creatingRef.current) return;
        if (authLoading || !user) {
            toast.error('Please sign in before creating an agent.');
            return;
        }
        creatingRef.current = true;
        setIsCreating(true);

        try {
            const accessToken = await getAccessToken();
            if (!accessToken) {
                throw new Error('Your session has expired. Please sign in and try again.');
            }
            const headers = { Authorization: `Bearer ${accessToken}` };
            const catalog = await listNodeTypesApiV1NodeTypesGet({ headers });
            if (catalog.error) {
                throw new Error(detailFromError(catalog.error, 'Unable to load agent defaults. Please try again.'));
            }
            const startSpec = catalog.data?.node_types.find((spec) => spec.name === NodeType.START_CALL);
            if (!startSpec) {
                throw new Error('Agent defaults are unavailable. Please try again.');
            }
            const name = `Workflow-${getRandomId()}`;
            const response = await createWorkflowApiV1WorkflowCreateDefinitionPost({
                body: {
                    name,
                    workflow_definition: {
                        nodes: [buildNewNode(NodeType.START_CALL, { x: 175, y: 60 }, [], startSpec)],
                        edges: [],
                        viewport: { x: 0, y: 0, zoom: 1 },
                    },
                },
                headers,
            });

            if (response.error) {
                throw new Error(detailFromError(response.error, 'Failed to create agent. Please try again.'));
            }
            const workflowId = response.data?.id;
            if (typeof workflowId !== 'number' || !Number.isSafeInteger(workflowId) || workflowId <= 0) {
                throw new Error('The server did not return a valid agent ID. Please refresh your agents before trying again.');
            }
            router.push(`/workflow/${workflowId}`);
        } catch (err) {
            logger.error(`Error creating blank workflow: ${err}`);
            toast.error(err instanceof Error ? err.message : 'Failed to create agent. Please try again.');
        } finally {
            creatingRef.current = false;
            setIsCreating(false);
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button disabled={isCreating || authLoading}>
                    <PlusIcon className="w-4 h-4" />
                    {isCreating ? 'Creating...' : 'Create Agent'}
                    <ChevronDown className="w-4 h-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => router.push('/agent-onboarding/quick')} className="cursor-pointer">
                    <Sparkles className="w-4 h-4 mr-2" />
                    <div>
                        <div className="font-medium">Quick setup</div>
                        <div className="text-xs text-muted-foreground">Describe your agent. AI builds it.</div>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleAgentBuilder} className="cursor-pointer">
                    <Bot className="w-4 h-4 mr-2" />
                    <div>
                        <div className="font-medium">Guided setup</div>
                        <div className="text-xs text-muted-foreground">Choose your voice, knowledge, and tools step by step</div>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleBlankCanvas} disabled={isCreating} className="cursor-pointer">
                    <LayoutTemplate className="w-4 h-4 mr-2" />
                    <div>
                        <div className="font-medium">Blank Canvas</div>
                        <div className="text-xs text-muted-foreground">Start from scratch with an empty workflow</div>
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

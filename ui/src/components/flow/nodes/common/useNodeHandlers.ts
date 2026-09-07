import { useCallback, useRef, useState } from "react";

import { useWorkflowOptional } from "@/app/workflow/[workflowId]/contexts/WorkflowContext";
import { useWorkflowStore } from "@/app/workflow/[workflowId]/stores/workflowStore";
import { FlowNodeData } from "@/components/flow/types";

interface UseNodeHandlersProps {
    id: string;
    additionalData?: Record<string, string | boolean>;
}

export const useNodeHandlers = ({ id, additionalData = {} }: UseNodeHandlersProps) => {
    const [open, setOpen] = useState(false);
    const updateNode = useWorkflowStore((state) => state.updateNode);
    const deleteNode = useWorkflowStore((state) => state.deleteNode);
    const workflow = useWorkflowOptional();
    const readOnlyRef = useRef(workflow?.readOnly ?? false);
    readOnlyRef.current = workflow?.readOnly ?? false;

    const handleSaveNodeData = useCallback(
        (updatedData: FlowNodeData) => {
            if (readOnlyRef.current) return;
            const currentNode = useWorkflowStore.getState().nodes.find(node => node.id === id);
            if (currentNode) {
                updateNode(id, {
                    data: { ...currentNode.data, ...updatedData, ...additionalData }
                });
            }
        },
        [id, updateNode, additionalData]
    );

    const handleDeleteNode = useCallback(() => {
        if (readOnlyRef.current) return;
        if (!useWorkflowStore.getState().nodes.some(node => node.id === id)) return;
        deleteNode(id);
    }, [id, deleteNode]);

    return {
        open,
        setOpen,
        handleSaveNodeData,
        handleDeleteNode,
    };
};

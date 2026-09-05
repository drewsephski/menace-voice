import { useNodesInitialized, useReactFlow } from '@xyflow/react';
import { useEffect, useRef, useState } from 'react';

import { FlowEdge, FlowNode } from '@/components/flow/types';

import { hasNodeOverlaps, layoutNodes } from '../utils/layoutNodes';

interface Props {
    nodes: FlowNode[];
    edges: FlowEdge[];
    layoutRequest: number;
    onLayout: (nodes: FlowNode[]) => void;
}

/** Run inside ReactFlow so layout waits for its ResizeObserver measurements. */
export function WorkflowLayoutController({ nodes, edges, layoutRequest, onLayout }: Props) {
    const initialized = useNodesInitialized();
    const { fitView } = useReactFlow<FlowNode, FlowEdge>();
    const lastRequest = useRef(layoutRequest);
    const [needsFit, setNeedsFit] = useState(true);

    useEffect(() => {
        if (!initialized || nodes.some(node => node.dragging)) return;
        const requested = lastRequest.current !== layoutRequest;
        lastRequest.current = layoutRequest;
        if (requested || hasNodeOverlaps(nodes)) {
            onLayout(layoutNodes(nodes, edges));
            setNeedsFit(true);
        }
    }, [initialized, nodes, edges, layoutRequest, onLayout]);

    useEffect(() => {
        if (!initialized || !needsFit) return;
        // Wait for the controlled node positions to commit before fitting bounds.
        const frame = requestAnimationFrame(() => {
            void fitView({ padding: 0.2, duration: 200, maxZoom: 0.75 });
            setNeedsFit(false);
        });
        return () => cancelAnimationFrame(frame);
    }, [initialized, needsFit, nodes, fitView]);

    return null;
}

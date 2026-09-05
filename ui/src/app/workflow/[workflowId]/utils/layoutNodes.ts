import dagre from '@dagrejs/dagre';

import { FlowEdge, FlowNode, NodeType } from '@/components/flow/types';

// Includes room for the badge above the card, handles, and selection halo.
export const NODE_CLEARANCE = 48;
const RANK_GAP = 160;
const RAIL_GAP = 160;

export function getNodeSize(node: FlowNode) {
    return {
        width: node.measured?.width || 400,
        height: node.measured?.height || 320,
    };
}

function nodesIntersect(a: FlowNode, b: FlowNode): boolean {
    const aSize = getNodeSize(a);
    const bSize = getNodeSize(b);
    return a.position.x < b.position.x + bSize.width + NODE_CLEARANCE
        && a.position.x + aSize.width + NODE_CLEARANCE > b.position.x
        && a.position.y < b.position.y + bSize.height + NODE_CLEARANCE
        && a.position.y + aSize.height + NODE_CLEARANCE > b.position.y;
}

export function hasNodeOverlaps(nodes: FlowNode[]): boolean {
    return nodes.some((node, index) =>
        nodes.slice(index + 1).some(other => nodesIntersect(node, other)),
    );
}

// Keep stationary cards in place; move an inserted/dragged card to the closest
// free boundary along either axis. The outermost boundary is always available.
export function placeNodeWithoutOverlap(node: FlowNode, obstacles: FlowNode[]): FlowNode {
    if (!obstacles.some(other => nodesIntersect(node, other))) return node;
    const { width, height } = getNodeSize(node);
    const candidates = obstacles.flatMap(other => {
        const size = getNodeSize(other);
        return [
            { x: other.position.x - width - NODE_CLEARANCE, y: node.position.y },
            { x: other.position.x + size.width + NODE_CLEARANCE, y: node.position.y },
            { x: node.position.x, y: other.position.y - height - NODE_CLEARANCE },
            { x: node.position.x, y: other.position.y + size.height + NODE_CLEARANCE },
        ];
    });
    const distance = (position: FlowNode['position']) =>
        Math.hypot(position.x - node.position.x, position.y - node.position.y);
    candidates.sort((a, b) => distance(a) - distance(b));
    const position = candidates.find(candidate =>
        !obstacles.some(other => nodesIntersect({ ...node, position: candidate }, other)),
    )!;
    return { ...node, position };
}

const WORKFLOW_NODE_TYPES = new Set<string>([
    NodeType.START_CALL,
    NodeType.AGENT_NODE,
    NodeType.END_CALL,
]);

export function layoutNodes(nodes: FlowNode[], edges: FlowEdge[], rankdir: 'TB' | 'LR' = 'TB'): FlowNode[] {
    if (nodes.length === 0) return nodes;
    const workflowNodes = nodes.filter(node => WORKFLOW_NODE_TYPES.has(node.type));
    const workflowIds = new Set(workflowNodes.map(node => node.id));
    const graph = new dagre.graphlib.Graph();
    graph.setGraph({ rankdir, nodesep: 100, ranksep: RANK_GAP, marginx: 0, marginy: 0 });
    graph.setDefaultEdgeLabel(() => ({}));
    workflowNodes.forEach(node => graph.setNode(node.id, getNodeSize(node)));
    edges.forEach(edge => {
        if (workflowIds.has(edge.source) && workflowIds.has(edge.target)) {
            graph.setEdge(edge.source, edge.target);
        }
    });
    dagre.layout(graph);

    const positions = new Map<string, FlowNode['position']>();
    workflowNodes.forEach(node => {
        const { x, y } = graph.node(node.id);
        const { width, height } = getNodeSize(node);
        // Dagre returns center coordinates; React Flow uses the top-left corner.
        positions.set(node.id, { x: x - width / 2, y: y - height / 2 });
    });
    const minX = Math.min(0, ...Array.from(positions.values(), position => position.x));
    const maxX = Math.max(0, ...workflowNodes.map(node => positions.get(node.id)!.x + getNodeSize(node).width));
    const topY = Math.min(0, ...Array.from(positions.values(), position => position.y));

    function placeRail(rail: FlowNode[], x: number) {
        let y = topY;
        rail.forEach(node => {
            positions.set(node.id, { x, y });
            y += getNodeSize(node).height + 80;
        });
    }
    const globals = nodes.filter(node => node.type === NodeType.GLOBAL_NODE);
    const triggers = nodes.filter(node => node.type === NodeType.TRIGGER);
    const integrations = nodes.filter(node => !workflowIds.has(node.id)
        && node.type !== NodeType.GLOBAL_NODE && node.type !== NodeType.TRIGGER);
    let leftX = minX;
    [globals, triggers].forEach(rail => {
        if (rail.length === 0) return;
        leftX -= RAIL_GAP + Math.max(...rail.map(node => getNodeSize(node).width));
        placeRail(rail, leftX);
    });
    placeRail(integrations, maxX + RAIL_GAP);
    return nodes.map(node => ({ ...node, position: positions.get(node.id)! }));
}

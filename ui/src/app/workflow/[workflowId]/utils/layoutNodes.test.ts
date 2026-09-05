import { describe, expect, it } from 'vitest';

import { FlowEdge, FlowNode, NodeType } from '@/components/flow/types';

import { hasNodeOverlaps, layoutNodes, NODE_CLEARANCE, placeNodeWithoutOverlap } from './layoutNodes';

const node = (id: string, type: string = NodeType.AGENT_NODE, width = 400, height = 300): FlowNode => ({
    id, type, position: { x: 0, y: 0 }, measured: { width, height }, data: { name: id },
});
const edge = (source: string, target: string): FlowEdge => ({
    id: `${source}-${target}`, source, target, data: { label: 'transition', condition: '' },
});

function expectSeparated(nodes: FlowNode[]) {
    for (const [i, a] of nodes.entries()) {
        for (const b of nodes.slice(i + 1)) {
            expect(
                a.position.x + (a.measured?.width ?? 400) + NODE_CLEARANCE <= b.position.x
                || b.position.x + (b.measured?.width ?? 400) + NODE_CLEARANCE <= a.position.x
                || a.position.y + (a.measured?.height ?? 320) + NODE_CLEARANCE <= b.position.y
                || b.position.y + (b.measured?.height ?? 320) + NODE_CLEARANCE <= a.position.y,
            ).toBe(true);
        }
    }
}

describe('workflow layout', () => {
    it.each(['TB', 'LR'] as const)('separates variable-sized branches and merges (%s)', direction => {
        const nodes = [node('start', NodeType.START_CALL), node('a', undefined, 520, 750), node('b', undefined, 320, 120), node('end', NodeType.END_CALL)];
        const edges = [edge('start', 'a'), edge('start', 'b'), edge('a', 'end'), edge('b', 'end')];
        const original = structuredClone(nodes);
        const result = layoutNodes(nodes, edges, direction);
        expectSeparated(result);
        const axis = direction === 'TB' ? 'y' : 'x';
        expect(result[0].position[axis]).toBeLessThan(result[1].position[axis]);
        expect(result[1].position[axis]).toBeLessThan(result[3].position[axis]);
        expect(nodes).toEqual(original);
        expect(result.map(n => n.id)).toEqual(nodes.map(n => n.id));
        expect(layoutNodes(result, edges, direction)).toEqual(result);
    });

    it('aligns a linear conversation without a zigzag', () => {
        const result = layoutNodes([node('start', NodeType.START_CALL), node('stage'), node('end', NodeType.END_CALL)], [edge('start', 'stage'), edge('stage', 'end')]);
        expectSeparated(result);
        expect(new Set(result.map(n => n.position.x)).size).toBe(1);
    });

    it('separates tall side rails, disconnected nodes, cycles and self-loops', () => {
        const nodes = [node('start', NodeType.START_CALL), node('a'), node('b'), node('orphan'), node('global', NodeType.GLOBAL_NODE, 700, 900), node('global2', NodeType.GLOBAL_NODE), node('trigger', NodeType.TRIGGER, 800, 500), node('webhook', NodeType.WEBHOOK, 800, 800), node('qa', NodeType.QA), node('plugin', 'tuner')];
        const result = layoutNodes(nodes, [edge('start', 'a'), edge('a', 'b'), edge('b', 'a'), edge('a', 'a'), edge('missing', 'a')]);
        expectSeparated(result);
        expect(result[6].position.x).toBeLessThan(result[4].position.x);
        expect(result[4].position.x + 700).toBeLessThan(result[0].position.x);
    });

    it('arranges settings-only workflows and missing measurements', () => {
        const nodes = [node('global', NodeType.GLOBAL_NODE), node('global2', NodeType.GLOBAL_NODE), node('qa', NodeType.QA), node('plugin', 'tuner')].map(n => ({ ...n, measured: undefined }));
        expectSeparated(layoutNodes(nodes, []));
        expect(layoutNodes([], [])).toEqual([]);
    });
});

describe('collision prevention', () => {
    it('preserves valid custom positions', () => {
        const a = node('a');
        const b = { ...node('b'), position: { x: 800, y: 900 } };
        expect(hasNodeOverlaps([a, b])).toBe(false);
        expect(placeNodeWithoutOverlap(b, [a])).toBe(b);
    });

    it('moves only the dragged card to a nearby free position', () => {
        const obstacle = node('obstacle');
        const dragged = { ...node('dragged'), position: { x: 390, y: 0 } };
        const result = placeNodeWithoutOverlap(dragged, [obstacle]);
        expect(result.position).toEqual({ x: 448, y: 0 });
        expectSeparated([obstacle, result]);
        expect(obstacle.position).toEqual({ x: 0, y: 0 });
    });

    it('finds free space in a crowded canvas and accounts for badges', () => {
        const placed: FlowNode[] = [];
        for (let i = 0; i < 40; i++) {
            placed.push(placeNodeWithoutOverlap(node(String(i), undefined, 320 + i * 3, 150 + i * 7), placed));
        }
        expectSeparated(placed);
        expect(hasNodeOverlaps([node('a'), { ...node('b'), position: { x: 420, y: 0 } }])).toBe(true);
    });
});

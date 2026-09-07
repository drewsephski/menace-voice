import { describe, expect, it } from 'vitest';

import type { NodeSpec } from '@/client/types.gen';

import { buildNewNode } from './buildNewNode';

const spec: NodeSpec = {
    name: 'startCall', display_name: 'Start Call', description: '', category: 'call_node', icon: 'Play',
    properties: [
        { name: 'name', type: 'string', display_name: '', description: '', default: 'Start Call' },
        { name: 'allow_interrupt', type: 'boolean', display_name: '', description: '', default: false },
        { name: 'prompt', type: 'mention_textarea', display_name: '', description: '', default: null },
        { name: 'tool_uuids', type: 'tool_refs', display_name: '', description: '', default: [] },
    ],
};

describe('buildNewNode', () => {
    it('preserves backend defaults, graph markers, position, and unique IDs', () => {
        const start = buildNewNode('startCall', { x: 10, y: 20 }, [], spec);
        const end = buildNewNode('endCall', { x: 30, y: 40 }, [start], { ...spec, name: 'endCall' });
        expect(start.data).toEqual({ name: 'Start Call', allow_interrupt: false, tool_uuids: [], is_start: true });
        expect(start.position).toEqual({ x: 10, y: 20 });
        expect(end.data.is_end).toBe(true);
        expect(end.id).not.toBe(start.id);
    });

    it('does not share mutable defaults between the catalog and created nodes', () => {
        const first = buildNewNode('startCall', { x: 0, y: 0 }, [], spec);
        const second = buildNewNode('startCall', { x: 0, y: 0 }, [first], spec);
        first.data.tool_uuids?.push('tool-1');
        expect(second.data.tool_uuids).toEqual([]);
        expect(spec.properties.find((property) => property.name === 'tool_uuids')?.default).toEqual([]);
    });
});

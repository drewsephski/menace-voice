import type { NodeSpec } from "@/client/types.gen";
import { FlowNode, NodeType } from "@/components/flow/types";
import { getNextNodeId } from "@/lib/utils";

export function buildNewNode(
    type: string,
    position: { x: number; y: number },
    existingNodes: FlowNode[],
    spec: NodeSpec,
): FlowNode {
    const data: Record<string, unknown> = {};
    for (const prop of spec.properties) {
        if (prop.default !== undefined && prop.default !== null) {
            data[prop.name] = structuredClone(prop.default);
        }
    }
    if (type === NodeType.START_CALL) data.is_start = true;
    if (type === NodeType.END_CALL) data.is_end = true;
    return {
        id: getNextNodeId(existingNodes),
        type,
        position,
        data: data as FlowNode["data"],
    };
}

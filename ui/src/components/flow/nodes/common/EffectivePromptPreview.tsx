import { useNodes } from "@xyflow/react";

interface EffectivePromptPreviewProps {
    values: Record<string, unknown>;
}

/** Uses current form values so unsaved prompt and inheritance edits are visible. */
export function EffectivePromptPreview({ values }: EffectivePromptPreviewProps) {
    const nodes = useNodes();
    const globalNode = nodes.find((node) => node.type === "globalNode");
    const inheritsGlobal = values.add_global_prompt !== false;
    const globalPrompt = inheritsGlobal && typeof globalNode?.data.prompt === "string"
        ? globalNode.data.prompt
        : "";
    const localPrompt = typeof values.prompt === "string" ? values.prompt : "";
    const variables = [...new Set(
        [...`${globalPrompt}\n${localPrompt}`.matchAll(/\{\{\s*([^{}]+?)\s*\}\}/g)]
            .map((match) => match[1]),
    )];
    const toolCount = Array.isArray(values.tool_uuids) ? values.tool_uuids.length : 0;
    const documentCount = Array.isArray(values.document_uuids) ? values.document_uuids.length : 0;

    return (
        <details className="rounded-lg border bg-muted/20 p-4">
            <summary className="cursor-pointer text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Effective prompt preview
            </summary>
            <div className="mt-4 space-y-4 text-sm">
                <p className="text-muted-foreground">
                    Instructions are combined in this order. This preview includes your unsaved
                    edits to this node and the current Global node on the canvas.
                </p>
                <section aria-label="Inherited global instructions">
                    <h4 className="mb-2 font-medium">1. Shared Global instructions</h4>
                    {!inheritsGlobal ? (
                        <p className="text-muted-foreground">Global inheritance is off for this node.</p>
                    ) : !globalNode ? (
                        <p className="text-amber-700 dark:text-amber-400" role="status">
                            Global inheritance is on, but this workflow has no Global node.
                        </p>
                    ) : (
                        <pre className="max-h-64 overflow-y-auto whitespace-pre-wrap break-words rounded-md bg-muted p-3 font-sans text-sm">
                            {globalPrompt || "The Global node has no instructions."}
                        </pre>
                    )}
                </section>
                <section aria-label="Local node instructions">
                    <h4 className="mb-2 font-medium">2. This node&apos;s instructions</h4>
                    <pre className="max-h-64 overflow-y-auto whitespace-pre-wrap break-words rounded-md bg-muted p-3 font-sans text-sm">
                        {localPrompt || "This node has no instructions."}
                    </pre>
                </section>
                {variables.length > 0 && (
                    <section aria-label="Unresolved template variables">
                        <h4 className="mb-1 font-medium">Template variables</h4>
                        <p className="text-muted-foreground">
                            These placeholders are left unresolved here. Their values or configured
                            fallbacks depend on the call: {variables.map((variable) => `{{ ${variable} }}`).join(", ")}.
                        </p>
                    </section>
                )}
                <section aria-label="Runtime additions">
                    <h4 className="mb-1 font-medium">3. Added during a call</h4>
                    <p className="text-muted-foreground">
                        This node has {toolCount} selected tool {toolCount === 1 ? "connection" : "connections"} and {documentCount} attached {documentCount === 1 ? "document" : "documents"}.
                        {" "}Available tool definitions, transition conditions, and tool-use guidance
                        are resolved during the call, including any MCP function selections.
                        Recording instructions may also be added. They are not included above.
                    </p>
                    <p className="mt-2 text-muted-foreground">
                        Conversation history, collected answers, and tool results provide additional
                        call context. This is a preview of configured instructions, not an exact
                        live call prompt.
                    </p>
                </section>
            </div>
        </details>
    );
}

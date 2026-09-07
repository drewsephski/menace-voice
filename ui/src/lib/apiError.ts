/**
 * Extract a human-readable message from a backend error response.
 *
 * The generated API client returns `{ error }` on failure (it does not throw),
 * and FastAPI shapes that error as `{ detail: string }`, `{ detail:
 * [{ msg, loc, ... }] }`, or backend validation arrays like `{ detail:
 * [{ model, message }] }` or `{ detail: { errors: [{ message }] } }`.
 * This normalizes those to a single string so it can
 * be rendered or thrown directly.
 */
export function detailFromError(err: unknown, fallback = "Request failed"): string {
    if (typeof err === "string") return err;
    const e = err as { detail?: unknown };
    if (typeof e?.detail === "string") return e.detail;
    const detail = e?.detail;
    const errors = Array.isArray(detail)
        ? detail
        : detail && typeof detail === "object" && "errors" in detail
            ? detail.errors
            : undefined;
    if (Array.isArray(errors) && errors.length > 0) {
        const messages = errors
            .map((item) => {
                if (typeof item === "string") return item;
                if (!item || typeof item !== "object") return null;
                const detail = item as { message?: unknown; msg?: unknown; model?: unknown };
                const message = typeof detail.message === "string"
                    ? detail.message
                    : typeof detail.msg === "string"
                        ? detail.msg
                        : null;
                if (!message) return null;
                return typeof detail.model === "string" && detail.model
                    ? `${detail.model}: ${message}`
                    : message;
            })
            .filter((message): message is string => Boolean(message));
        if (messages.length > 0) return messages.join("\n");
    }
    return fallback;
}

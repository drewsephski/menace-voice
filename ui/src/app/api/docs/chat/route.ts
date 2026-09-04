import { getServerBackendUrl } from "@/lib/apiClient";
import { getServerAccessToken } from "@/lib/auth/server";

export const runtime = "nodejs";
export const maxDuration = 50;

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  let sameOrigin = false;
  try {
    sameOrigin = !!origin && new URL(origin).host === (request.headers.get("host") || new URL(request.url).host);
  } catch { /* Invalid origins are rejected below. */ }
  if (!sameOrigin) {
    return Response.json({ detail: "Request origin is not allowed." }, { status: 403 });
  }
  const reader = request.body?.getReader();
  if (!reader) return Response.json({ detail: "A question is required." }, { status: 400 });
  const chunks: Uint8Array[] = [];
  let length = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    length += value.byteLength;
    if (length > 24000) {
      await reader.cancel();
      return Response.json({ detail: "Conversation is too long. Start a new chat." }, { status: 413 });
    }
    chunks.push(value);
  }
  try {
    const token = await getServerAccessToken();
    const response = await fetch(`${getServerBackendUrl()}/api/v1/docs/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
      body: Buffer.concat(chunks),
      signal: AbortSignal.any([request.signal, AbortSignal.timeout(45000)]),
      cache: "no-store",
    });
    return new Response(response.body, {
      status: response.status,
      headers: { "Content-Type": response.headers.get("content-type") || "application/json", "Cache-Control": "no-store", "X-Accel-Buffering": "no", ...(response.headers.has("retry-after") ? { "Retry-After": response.headers.get("retry-after")! } : {}) },
    });
  } catch {
    return Response.json({ detail: "The agent couldn't answer right now. Please try again." }, { status: 503 });
  }
}

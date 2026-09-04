import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const destination = new URL("/overview", request.url);

  // Keep the redirect origin-relative. In the standalone Docker server,
  // request.url can use the HOSTNAME bind address (0.0.0.0:3010) even when
  // nginx received the request on the public domain.
  return new NextResponse(null, {
    headers: {
      Location: `${destination.pathname}${destination.search}${destination.hash}`,
    },
    status: 307,
  });
}

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/search") {
    const from = request.nextUrl.searchParams.get("from")
    const to = request.nextUrl.searchParams.get("to")
    const date = request.nextUrl.searchParams.get("date")
    const seats = request.nextUrl.searchParams.get("seats")
    if (!from || !to || !date || !seats) {
      return NextResponse.redirect(new URL("/", request.url))
    }
  }
  return NextResponse.next()
}

// Enable middleware for /search route only
export const config = {
  matcher: ["/search"],
}
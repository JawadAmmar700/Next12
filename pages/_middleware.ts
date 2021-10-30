import type { NextFetchEvent, NextRequest } from "next/server"
import { NextResponse } from "next/server"

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const id = true
  if (id) {
    return NextResponse.next()
  } else {
    return new Response("not authorized")
  }
}

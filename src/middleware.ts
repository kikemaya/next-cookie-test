import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/set-cookie") {
    const response = NextResponse.redirect(new URL("/", request.url));
    
    response.headers.set(
      "Set-Cookie",
      "__session=hey it's working; Path=/; Secure; HttpOnly; SameSite=lax; public; max-age=300; s-maxage=600"
    );
    
    return response;
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/set-cookie"],
};

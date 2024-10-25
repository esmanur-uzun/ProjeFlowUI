import { NextRequest, NextResponse } from "next/server";

export function middleware(request:NextRequest){
    const { pathname } = request.nextUrl;
    const isAuthPage = pathname === "/login";
    const accessToken = request.cookies.get("accessToken")?.value;
    const isAuthenticated = Boolean(accessToken);

    if (!isAuthenticated && !isAuthPage) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
    
      if (isAuthenticated && isAuthPage) {
        console.log("Redirecting to /");
        return NextResponse.redirect(new URL("/", request.url));
      }

      return NextResponse.next();

}

export const config = {
    matcher: ["/((?!_next/static|favicon.ico).*)"],
};
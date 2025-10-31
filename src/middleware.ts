import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSessionAction } from "./app/actions/auth.actions";

const protectedRoutes = ["/dashboard", "/notes", "/profile", "/settings"];
const guestOnlyRoutes = ["/login", "/signup"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = await getSessionAction();
  const isAuthenticated = !!session;

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );
  const isGuestOnlyRoute = guestOnlyRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (isProtectedRoute && !isAuthenticated && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isGuestOnlyRoute && isAuthenticated && pathname !== "/") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|login|signup).*)"],
};

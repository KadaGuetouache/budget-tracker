/**
 * this middle don't work properly so I pass it
 */

// Ref: https://next-auth.js.org/configuration/nextjs#advanced-usage
import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
export default async function middleware(req: NextRequestWithAuth, event: any) {
  const token = req.nextauth?.token;
  const isAuthenticated = !!token;

  // if the user is already authenticated and tries to access one of the auth pages
  // redirect to the home page
  if (
    (req.nextUrl.pathname.startsWith("/login") ||
      req.nextUrl.pathname.startsWith("/") ||
      req.nextUrl.pathname.startsWith("/register") ||
      req.nextUrl.pathname.startsWith("/forgot-password")) &&
    isAuthenticated
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // if the user is not authenticated, allow them to visit the auth pages
  if (
    req.nextUrl.pathname.startsWith("/login") ||
    req.nextUrl.pathname.startsWith("/register") ||
    req.nextUrl.pathname.startsWith("/forgot-password")
  ) {
    return fetch(req);
  }

  // if the user is not authenticated and tries to access any other page
  // redirect to the login page
  const authMiddleware = withAuth({
    pages: {
      signIn: `/login`
    }
  });

  return authMiddleware(req, event);
}

// config to match all pages
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"]
};

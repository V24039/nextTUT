// Middleware is used intercept and control flow of the request and responses throughput the application
// Middleware lets us to specify paths where it should be active

import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // using matcher condition
  // return NextResponse.redirect(new URL("/", request.url))

  // using conditional approach
  // if (request.nextUrl.pathname === "/profile") {
  //rewrite:- redirect to the page but does not change the url
  //redirect:- changes the url to the redirected url
  //   return NextResponse.rewrite(new URL("/", request.url));
  // }

  const response = NextResponse.next();
  const theme = request.cookies.get("theme");

  if (!theme) {
    response.cookies.set("theme", "dark");
  }

  return response
}

export const config = {
  matcher: "/profile",
};

import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
    const url = req.nextUrl.pathname;

    // Await the auth() call to get the userId
    const { userId } = await auth();

    // Protect /dashboard and sub-routes
    if (!userId && url.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    if (!userId && url.startsWith("/courses")) {
        return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    // Redirect authenticated users away from auth routes
    if (userId && (url.startsWith("/sign-in") || url.startsWith("/sign-up"))) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }
});

export const config = {
    matcher: [
        "/((?!.*\\..*|_next).*)",
        "/(api|trpc)(.*)",
        "/dashboard(.*)",
        "/",
        "/auth/sign-in",
        "/auth/sign-up",
    ],
};

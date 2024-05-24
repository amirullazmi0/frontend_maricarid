'use server'
import { NextResponse, NextRequest } from "next/server";
import Cookies from 'js-cookie'

export function middleware(request: NextRequest) {
    let cookie = request.cookies.get('access_token')

    if (!cookie) {
        return NextResponse.redirect(new URL("/login", request.url))
    }
}

export const config = {
    matcher: "/admin",
}
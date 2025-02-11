import { NextRequest, NextResponse } from "next/server";
import { GetJWTForRef, GetRefFromJWT } from "./app/api";


export async function middleware(request: NextRequest) {
    const res = NextResponse.next()
    const slug = request.nextUrl.pathname.split('/').at(-1)
    const cookie = request.cookies.get("authorization")

    let ref = null
    if (cookie) ref = await GetRefFromJWT(cookie.value)

    if ((ref && ref == slug) || (!slug && ref)) {
        return res
    }
    else if (slug) {
        const newJWT = await GetJWTForRef(slug)

        if (newJWT) res.cookies.set("authorization", newJWT)
    }
    else {
        const newJWT = await GetJWTForRef("NOREF")

        if (newJWT) res.cookies.set("authorization", newJWT)
    }

    return res
}

export const config = {
    matcher: ["/:slug", '/']
}
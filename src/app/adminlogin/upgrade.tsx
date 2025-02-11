'use server'

import { cookies } from "next/headers"
import { Upgrade } from "../api"

export async function UpgradeCookie(password: string) {
    'use server'

    const auth = (await cookies()).get("authorization")?.value

    if (!auth) return false
    
    const res = await Upgrade(password, auth)

    if (res) (await cookies()).set('authorization', res)

    return true
}
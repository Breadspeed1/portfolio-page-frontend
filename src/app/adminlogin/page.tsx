'use server'

import { Card, Flex } from "@radix-ui/themes"
import { Upgrade } from "../api"
import { cookies } from "next/headers"
import Login from "./login"

export async function UpgradeCookie(password: string) {
    'use server'

    const auth = (await cookies()).get("authorization")?.value

    if (!auth) return false
    
    const res = await Upgrade(password, auth)

    if (res) (await cookies()).set('authorization', res)

    return true
}

export default async function LoginPage() {
    return (
        <Flex width='100vw' height='100vh' align='center' justify='center'>
            <Card>
                <Login />
            </Card>
        </Flex>
    )
}
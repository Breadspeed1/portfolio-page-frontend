'use server'

import { Card, Flex } from "@radix-ui/themes"
import Login from "./login"

export default async function LoginPage() {
    return (
        <Flex width='100vw' height='100vh' align='center' justify='center'>
            <Card>
                <Login />
            </Card>
        </Flex>
    )
}
'use client'

import { TextField } from "@radix-ui/themes"
import Form from "next/form"
import { redirect } from "next/navigation"
import { UpgradeCookie } from "./upgrade"


function handleEnter(data: FormData) {
    const pw = data.get('pw')

    if (pw) {
        UpgradeCookie(pw.toString()).then((res) => {
            if (res) {
                redirect('/admindash')
            }
            else {
                redirect('/adminlogin')
            }
        })
    }
}

export default function Login() {
    return (
        <Form action={handleEnter}>
            <TextField.Root size='3' name='pw' placeholder="Enter Password" />
        </Form>
    )
}
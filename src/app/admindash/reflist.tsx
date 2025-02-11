'use client'

import { AddRef, DeleteRef, GetAuthCookie } from "../api"
import Form from 'next/form'
import { redirect } from "next/navigation"
import { Button, Card, Flex, ScrollArea, Text, TextField } from "@radix-ui/themes"
import { useEffect, useState } from "react"

function openRef(ref: string) {
    redirect("/admindash?ref=" + ref)
}

export default function Reflist({ refs }: {
    refs: {
        refstr: string,
        name: string
    }[]
}) {
    const [auth, setAuth] = useState('')
        
    useEffect(() => {
        GetAuthCookie().then((res) => {
            if (res) setAuth(res.value)
            else redirect('/')
        })
    })

    const deleteItem = (refstr: string) => {
        DeleteRef(refstr, auth).then(() => {
            redirect('/admindash')
        })
    }
    
    return (
        <ScrollArea type="always" scrollbars="vertical">
            <Card mr="5" ml="5" mt="5">
                <Flex direction="column" gapY="2" >
                    <Form className="" action={(formData) => {
                        const name = formData.get("name")

                        if (name?.toString()) {
                            AddRef(name?.toString(), auth).then((res) => {
                                if (res) {
                                    //router.refresh()
                                    window.location.reload()
                                }
                            })
                        }
                    }}>
                        <TextField.Root placeholder="Create" data-lpignore="true" autoComplete="off" name="name" />
                    </Form>

                    {refs.toSorted((a, b) => { return a.name.localeCompare(b.name) }).map(({
                        refstr,
                        name
                    } : {
                        refstr: string,
                        name: string
                    }) => {
                        return (
                            <Card key={refstr} style={{ cursor: "pointer" }} onClick={() => openRef(refstr)}>
                                <Flex direction="column">
                                    <Text weight="bold">{name}</Text>
                                    <Text>{refstr}</Text>
                                    <Button style={{ cursor: "pointer" }} onClick={() => deleteItem(refstr)}>Delete</Button>
                                </Flex>
                            </Card>
                        )
                    })}
                </Flex>
            </Card>
        </ScrollArea>
    )
}
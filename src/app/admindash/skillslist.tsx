'use client'

import Fuse from "fuse.js"
import Form from "next/form"
import { ChangeEvent, useEffect, useState } from "react"
import { AddSkillToRef, CreateSkill, DeleteSkill, GetAuthCookie, RemoveSkillFromRef } from "../api"
import { Button, Card, Flex, ScrollArea, Strong, Text, TextField } from "@radix-ui/themes"
import { redirect } from "next/navigation"

export default function SkillsList({
    added_skills,
    all_skills,
    refstr
}: {
    added_skills: string[],
    all_skills: string[],
    refstr: string | null
}) {
    const [skills, setSkills] = useState(all_skills)
    const fuse = new Fuse(all_skills)
    const [auth, setAuth] = useState('')
    
    useEffect(() => {
        GetAuthCookie().then((res) => {
            if (res) setAuth(res.value)
            else redirect('/')
        })
    })

    const updateSearchResults = (event: ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value

        if (text.length == 0) {
            setSkills(all_skills)
        }
        else {
            setSkills(fuse.search(text).map((res) => res.item))
        }
    }

    const boldIfFound = (skill: string) => {
        const found = added_skills.find((r) => {return r == skill})
        return found ? <Strong>{skill}</Strong> : skill
    }

    const addSkillToRef = (skill: string) => {
        if (!refstr) return

        AddSkillToRef(refstr, skill, auth).then((res) => {
            if (res) window.location.reload()
        })
    }

    const removeSkillFromRef = (skill: string) => {
        if (!refstr) return

        RemoveSkillFromRef(refstr, skill, auth).then((res) => {
            if (res) window.location.reload()
        })
    }

    const deleteSkill = (skill: string) => {
        DeleteSkill(skill, auth).then((res) => {
            if (res) window.location.reload()
        })
    }

    return (
        <ScrollArea type="always" scrollbars="vertical" mr="4">
            <Card mr="5" ml="5" mt="5">
                <Flex direction="column" gapY="2" >
                    <Form action={(formData) => {
                        const name = formData.get("name")
                    
                        if (name?.toString()) {
                            CreateSkill(name.toString(), auth).then((res) => {
                                if (res) window.location.reload()
                            })
                        }
                    }}>
                        <TextField.Root placeholder="Search or Create" onChange={updateSearchResults} data-lpignore="true" autoComplete="off" name="name" />
                    </Form>

                    {skills.map((skill) => {
                        return (
                            <Card style={{ cursor: "pointer" }} key={skill}>
                                <Flex direction="row" px="4" justify="between" align="center">
                                    <Text onClick={() => added_skills.includes(skill) ? removeSkillFromRef(skill) : addSkillToRef(skill)}>
                                        {boldIfFound(skill)}
                                    </Text>
                                    <Button style={{ cursor: "pointer" }} onClick={() => deleteSkill(skill)}>Delete</Button>
                                </Flex>
                            </Card>
                        )
                    })}
                </Flex>
            </Card>
        </ScrollArea>
    )
}
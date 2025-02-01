'use client'

import Fuse from "fuse.js"
import Form from "next/form"
import { ChangeEvent, useState } from "react"

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

    const updateSearchResults = (event: ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value

        if (text.length == 0) {
            setSkills(all_skills)
        }
        else {
            setSkills(fuse.search(text).map((res) => res.item))
        }
    }

    return (
        <div className="bg-[--color-4] h-full">
            <ul className="flex-col justify-normal items-center h-full overflow-y-auto">
                <Form className="flex justify-evenly items-center flex-1 text-center font-sans text-[--color-2] pt-5 pb-5 mb-10 hover:bg-slate-400 hover:cursor-pointer select-none" action={(formData) => {
                    const name = formData.get("name")
                    
                    if (name?.toString()) {
                        //create skill
                        window.location.reload()
                    }
                }}>
                    <input data-lpignore="true" autoComplete="off" className="flex-1 ml-5 text-black" name="name" onChange={updateSearchResults} />
                    <button className="flex-1" type="submit">Create</button>
                </Form>

                {skills.map((skill) => {
                    return (
                        <div className="flex" key={skill}>
                            <li className="flex-1 overflow-x-auto border-b-2 text-center font-sans text-[--color-2] pt-5 pb-5 hover:bg-slate-400 active:bg-slate-700 hover:cursor-pointer select-none">
                                {skill}
                            </li>
                            <button className="pr-6 border-b-2 border-l-2 pl-6 font-sans text-[--color-2] active:bg-slate-700 hover:bg-slate-400">Delete</button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
'use client'

import { useState } from "react"
import { AddRef } from "./api"
import Form from 'next/form'
import { redirect } from "next/navigation"

function openRef(ref: string) {
    redirect("/admindash?ref=" + ref)
}

function GetCreateItem({
        isCreating, 
        setIsCreating
    }: {
        isCreating: boolean, 
        setIsCreating: (b: boolean) => void
    }) {

    if (isCreating) {
        return <Form className="flex justify-evenly items-center flex-1 text-center font-sans text-[--color-2] pt-5 pb-5 mb-10 hover:bg-slate-400 hover:cursor-pointer select-none" action={(formData) => {
            const name = formData.get("name")
            

            if (name?.toString()) {
                AddRef(name?.toString()).then((res) => {
                    if (res) {
                        //router.refresh()
                        window.location.reload()
                    }
                })
            }

            setIsCreating(false)
        }}>
            <input className="flex-1 ml-5 text-black" name="name" />
            <button className="flex-1" type="submit">Create</button>
        </Form>
    }
    else {
        return <ul onClick={() => setIsCreating(true)} className="flex-1 text-center font-sans text-[--color-2] pt-5 pb-5 mb-10 hover:bg-slate-400 hover:cursor-pointer select-none">CREATE</ul>
    }
}

export default function Reflist({ refs }: {
    refs: {
        refstr: string,
        name: string
    }[]
}) {
    const [isCreating, setIsCreating] = useState(false);

    return (
        <div className="bg-[--color-4] h-full">
            <ul className="flex-col justify-normal items-center h-full">
                
                <GetCreateItem isCreating={isCreating} setIsCreating={setIsCreating} />

                {refs.map(({
                    refstr,
                    name
                } : {
                    refstr: string,
                    name: string
                }) => {
                    return (
                        <li onClick={() => openRef(refstr)} className="flex-1 text-center font-sans text-[--color-2] pt-5 pb-5 hover:bg-slate-400 hover:cursor-pointer select-none" key={refstr}>
                            {name} {"=>"} {refstr}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
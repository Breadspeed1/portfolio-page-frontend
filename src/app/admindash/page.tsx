'use client'

import { redirect } from "next/navigation"
import { GetRefList } from "./api"
import { useState } from "react"

function openRef(ref: string) {
    redirect("/admindash?ref=" + ref)
}

function Reflist() {
    const [refs, setRefs] = useState([])
    
    // GetRefList().then((res) => {
    //     setRefs(res)
    // })

    return (
        <div className="bg-[--color-4] h-full">
            <ul className="flex-col justify-normal items-center h-full">
                <ul className="flex-1 text-center font-sans text-[--color-2] pt-5 pb-5 mb-10 hover:bg-slate-400 hover:cursor-pointer select-none">CREATE</ul>


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

export default function Admin({
    searchParams
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    return (
        <div className="flex justify-stretch items-center h-screen w-full">
            <div className="flex-none w-80 h-screen"><Reflist /></div>
        </div>
    )
}
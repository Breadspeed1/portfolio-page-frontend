'use client'

import { TabNav } from "@radix-ui/themes"
import { useState } from "react"

const SECTIONS = [
    ["#about-me", "About Me"],
    ["#socials", "Socials"], 
    ["#projects", "Projects"]
]

function getClosestSection() {
    let closest = null
    let closestVal = -1

    for (const section in SECTIONS) {
        const elem = document.getElementById(section[0])
        const rect = elem?.getBoundingClientRect()

        if (!rect?.top || rect?.top < 0) continue
        
        if (closestVal == -1 || rect?.top < closestVal) {
            closestVal = rect?.top
            closest = elem?.id
        }
    }

    return closest
}

export default function Nav() {
    const [closest, setClosest] = useState(getClosestSection())
    addEventListener("scroll", () => setClosest(getClosestSection()))

    return (
        <TabNav.Root size="2">
            {SECTIONS.map(([id, name]) => {
                return <TabNav.Link key={id} active={closest == id} href={id}>
                    {name}
                </TabNav.Link>
            })}
        </TabNav.Root>
    )
}
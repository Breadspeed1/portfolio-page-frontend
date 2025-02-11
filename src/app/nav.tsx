'use client'

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { TabNav } from "@radix-ui/themes"
import { useTheme } from "next-themes"
import ScrollInto from "react-scroll-into-view"

const SECTIONS = [
    ["about-me", "About Me"],
    ["socials", "Socials"], 
    ["projects", "Projects"]
]

export default function Nav() {
    const {theme, setTheme} = useTheme()

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <TabNav.Root justify="center" size="2">
            {SECTIONS.map(([id, name]) => {
                return <ScrollInto key={id} selector={"#" + id} smooth={true}>
                    <TabNav.Link>
                        {name}
                    </TabNav.Link>
                </ScrollInto>
            })}
            <TabNav.Link>
                {theme === "dark" ? <SunIcon onClick={toggleTheme}/> : <MoonIcon onClick={toggleTheme}/> }
            </TabNav.Link>
        </TabNav.Root>
    )
}
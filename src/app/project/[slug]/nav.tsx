'use client'

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { TabNav } from "@radix-ui/themes"
import { useTheme } from "next-themes"

export default function Nav() {
    const {theme, setTheme} = useTheme()

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <TabNav.Root justify="center" size="2">
            <TabNav.Link href="/">
                Home
            </TabNav.Link>
            <TabNav.Link>
                {theme === "dark" ? <SunIcon onClick={toggleTheme}/> : <MoonIcon onClick={toggleTheme}/> }
            </TabNav.Link>
        </TabNav.Root>
    )
}
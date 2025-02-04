import { Text } from "@radix-ui/themes"
import { ReactElement } from "react"


export type ProjectSection =  {
    title: string,
    html: ReactElement
}

export type ProjectData = {
    title: string,
    subtitle: string
    sections: ProjectSection[]
}

export const PROJECTS: ProjectData[] = [
    {
        title: "Test Project",
        subtitle: "This is a test project :)",
        sections: [
            {
                title: "intro",
                html: (
                    <Text>
                        Hey guys, what&apos;s up??? this is a project!
                    </Text>
                )
            },
            {
                title: "section 2",
                html: (
                    <Text>
                        This is section two!
                    </Text>
                )
            }
        ]
    }
]
import { Text } from "@radix-ui/themes"
import { ReactElement } from "react"


export type ProjectSection =  {
    title: string,
    html: ReactElement
}

export type ProjectData = {
    title: string,
    thumbnailPath: string,
    id: number,
    subtitle: string
    sections: ProjectSection[]
}

export const PROJECTS: ProjectData[] = [
    {
        title: "Test Project 1",
        subtitle: "This is a test project :)",
        thumbnailPath: "/portfolio.png",
        id: 0,
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
    },
    {
        title: "Test Project 2",
        subtitle: "This is a test project :)",
        thumbnailPath: "/portfolio.png",
        id: 1,
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
    },
    {
        title: "Test Project 3",
        subtitle: "This is a test project :)",
        thumbnailPath: "/portfolio.png",
        id: 2,
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
    },
    {
        title: "Test Project 4",
        subtitle: "This is a test project :)",
        thumbnailPath: "/portfolio.png",
        id: 3,
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
    },
]
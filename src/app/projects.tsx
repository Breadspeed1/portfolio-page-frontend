import { Blockquote, Code, Em, Quote, Strong, Text } from "@radix-ui/themes"
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
        title: "Portfolio Website",
        subtitle: "The website you're looking at right now!",
        thumbnailPath: "/portfolio.png",
        id: 0,
        sections: [
            {
                title: "Why did I spend so much time on this?",
                html: (
                    <Blockquote style={{ textIndent: "2em" }}>
                        I began this project in January of 2025, and my initial goal was to have a portfolio
                        page that stood out amongst an ocean of (almost) identical portfolio pages.
                        I decided that in order to do that I would have to include some sort of customization
                        within the website that caught the eye of whoever was looking at it.
                        I figured that maybe having the biggest block of text at the start of the page say something
                        specific to the viewer might encourage them to keep reading. Maybe after that including some information
                        about what skills the viewer is looking for as well as everything they want right on the
                        landing page. Because I feel that having a ton of text listing all my skills and the names of anyone who could possibly
                        be viewing this page, which I hope is a long list, but realistically is probably just a few select people might be overwhelming.
                    </Blockquote>
                )
            },
            {
                title: "The Stack!",
                html: (
                    <Blockquote>
                        <Text style={{ textIndent: "2em" }} as="p">
                            As you can probably tell by now, my favorite language is <Strong>Rust</Strong>;
                            while I could go on for pages about why that is, I&apos;ll spare you the details and just
                            let that statement stand on its own. Inversely, you could infer that with <Strong>Rust </Strong>
                            being my favorite language, I might not be the biggest fan of loosely
                            typed languages such as  <Strong>Javascript</Strong>. And while that may be true, the
                            state of <Strong>Rust</Strong> GUI libraries/frameworks is not exactly mature, so I had to go against
                            my nature and use a <Strong>Javascript</Strong> based framework.
                        </Text>
                        <br/>
                        Ok, now on to the actual stack:
                        <br/>
                        <br/>
                        <Strong>The Backend!</Strong>
                        <ul style={{ textIndent: "0px", marginTop: "0px" }}>
                            <li>Rust (of course)</li>
                            <li>Tokio Stack (with axum HTTP server)</li>
                            <li>SQLite (via sqlx)</li>
                        </ul>
                        <Text style={{ textIndent: "2em" }} as="p">
                            So, why did I choose these?
                            Well, I have used axum before and I am a huge fan of the tower service
                            architecture that it is built on which made it a no-brainer.
                            As for SQLite, I have noticed that in the past I trended towards overplanning
                            for small projects and falling in to the all to familiar trap of <Strong>premature optimization</Strong>;
                            so instead of going with some sharded, clustered, contanerized, [insert more industry buzzwords] postgres
                            setup, I decided to keep it simple. I landed on sqlx as the driver because I tend to avoid ORMs in Rust
                            and sqlx provides nice <Code>query!()</Code> and <Code>query_as!()</Code> macros
                            which do compile-time checks on your queries based on an environmental database connection.
                            Sqlx is also database agnostic, so if I ever did decide that this website needs more concurrent users
                            than the population of the planet I could switch to the aforementioned postgres setup.
                        </Text>
                        <br/>
                        <Strong>The Frontend!</Strong>
                        <ul style={{ textIndent: "0px", marginTop: "0px" }}>
                            <li>NextJS</li>
                            <li>React</li>
                            <li><del>TailwindCSS</del> Radix</li>
                        </ul>
                        <Text style={{ textIndent: "2em" }} as="p">
                            ...I know I said I didn&apos;t like Javascript, but here we are. At the very least
                            I used Typescript, which while it doesn&apos;t actually <Em>enforce</Em> types it does
                            make my IDE flash scary colors at me. Anyways, I ended up with NextJS because I heard that
                            it could do &#10024;Server Side Rendering&#10024; which sounded fun to me.
                            As for the styling spot which TailwindCSS was perhaps unfairly robbed of, we have
                            Radix. I started this project with Tailwind, and coming from almost purely backend development
                            I was not a huge fan of the whole 80 character classname for every div thing so I looked for other options.
                            Radix Themes stood out because everything looked pretty and all their examples were super simple.
                            In hindsight, I think I just need to practice CSS in general, and I would probably switch back to Tailwind if
                            I had to change frontend libraries again.
                        </Text>
                    </Blockquote>
                )
            },
            {
                title: "Infrastructure",
                html: <Blockquote>
                    <Text style={{ textIndent: "2em" }} as="p">
                        For all of my previous projects, my deployment plan has been <Quote>Yeah, I&apos;ll just clone the repo on whatever machine needs this.</Quote>{" "}
                        Which, for a while, I have acknowledged was not a good strategy, but for this project I figured
                        I should actually try my hand at the famed <Strong>CI/CD</Strong> pipeline. I began with just trying to get github actions
                        to run some unit tests and calling it a day, but I quickly fell down the rabit hole of <Strong>Docker</Strong> and all the wonders
                        of <Strong>Containerization</Strong>.
                    </Text>
                </Blockquote>
            }
        ]
    },
]
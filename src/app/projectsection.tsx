import { Blockquote, Flex, Heading, Section, Separator, Strong, Text } from "@radix-ui/themes"
import { PROJECTS } from "./projects"
import ProjectCard from "./project-card"


export default function ProjectSection({
    skills
}: {
    skills: string[]
}) {
    return (
        <Section id='projects' mx="6" flexShrink="1" maxWidth={{ sm: "80vw", lg: "50vw", md: "60vw", xl: "40vw" }}>
            <Heading size="9">Projects</Heading>
            <Separator my="2" size="4"/>
            <Blockquote size="4">
                I love to work on personal projects; they are my main way of expirementing
                with new tools and technologies that look interesting or seem applicable to me!
                In the future, I would like to work with technologies like  
                <Strong> HTMX, AlpineJS, Rust GUI (Leptos, Iced, etc.), and functional languages like Haskell or OCaml. </Strong>
                {
                    skills.length > 0 ? 
                    <>
                        But for now, I&apos;ve heard that you are looking for some skills like:
                        <Strong><ul style={{marginBottom: "-40px"}}> {skills.map((s) => {
                            return <li key={s}>{s}</li>
                        })} </ul></Strong>
                    </> : <></>
                }
                <br/>
                <br/>
                <Text weight="light" color="red">
                    Hint: You can click on them to read more! (please do, I spent time writing about them for yall to read)
                </Text>
            </Blockquote>
            <Flex direction="row" justify="center" wrap="wrap" mt="5" gap="5">
                {PROJECTS.map((project) => {
                    return <ProjectCard key={project.title} projectData={project}/>
                })}
            </Flex>
        </Section>
    )
}

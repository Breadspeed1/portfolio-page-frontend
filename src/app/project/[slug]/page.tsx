import Nav from "@/app/project/[slug]/nav"
import { Card, Flex, Heading, Separator } from "@radix-ui/themes"
import { PROJECTS } from '../../[slug]/projects';
import { redirect } from "next/navigation";


export default async function ProjectPage({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug

    const proj = PROJECTS.find((p) => p.id.toString() === slug)

    if (!proj) redirect("/")
        
    return <>
        <Flex position="sticky" top="4" justify="center" align="center">
            <Card variant="surface" size="1">
            <Nav />
            </Card>
        </Flex>
        <Flex width="100vw" justify="center">
            <Flex mx="6" flexShrink="1" width={{ sm: "80vw", lg: "50vw", md: "60vw", xl: "40vw" }} align="center" justify="center" direction="column">
                <Heading size="9" mt="9">{proj.title}</Heading>
                <Heading weight="medium" size="6" mt="4">{proj.subtitle}</Heading>

                <Separator size="4" my="5"/>

                {proj.sections.map((sec) => {
                    return <Flex my="5" key={sec.title} align="center" direction="column">
                        <Heading size="8">{sec.title}</Heading>
                        <Separator my="2" size="3" />
                        {sec.html}
                    </Flex>
                })}
            </Flex>
        </Flex>
    </>
  }
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
        <Flex width="100%" direction="column" align="center">
            <Heading wrap="wrap" size="9" mt="9">{proj.title}</Heading>
            <Heading wrap="wrap" weight="medium" size="6" mt="4">{proj.subtitle}</Heading>
            <Separator size="4" my="5"/>
            <Flex mx="6" flexShrink="1" width={{ sm: "80vw", lg: "50vw", md: "60vw", xl: "40vw" }} justify="center" direction="column">
                {proj.sections.map((sec) => {
                    return <Flex my="5" key={sec.title} direction="column">
                        <Heading size="8">{sec.title}</Heading>
                        <Separator my="2" size="3" />
                        {sec.html}
                    </Flex>
                })}
            </Flex>
        </Flex>
    </>
  }
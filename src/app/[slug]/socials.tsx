'use client'

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Section, Heading, Separator, Flex, IconButton } from "@radix-ui/themes";

const GITHUB_LINK = "https://github.com/Breadspeed1";
const LINKDEDIN_LINK = "https://linkedin.com/in/aiden-voth-a0972b334";

export default function Socials() {
    const open = (link: string) => window.open(link, '_blank')?.focus()
    
    return <>
        <Section id="socials" mx="6" flexShrink="1" width={{ sm: "80vw", lg: "50vw", md: "60vw", xl: "40vw" }}>
            <Heading size="9">Socials</Heading>
            <Separator my="2" size="4"/>
            <Flex justify="center" gapX="9" align="center" my="4">
                <IconButton onClick={() => open(LINKDEDIN_LINK)} variant="ghost" >
                    <LinkedInLogoIcon cursor="pointer" width="48" height="48"/>
                </IconButton>
                <IconButton onClick={() => open(GITHUB_LINK)} variant="ghost" radius="full">
                    <GitHubLogoIcon width="48" cursor="pointer" height="48"/>
                </IconButton>
            </Flex>
        </Section>
    </>
}
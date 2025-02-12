'use client'

import { EnvelopeClosedIcon, FileTextIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Section, Heading, Separator, Flex, IconButton, Tooltip } from "@radix-ui/themes";

const GITHUB_LINK = "https://github.com/Breadspeed1";
const LINKDEDIN_LINK = "https://linkedin.com/in/aiden-voth-a0972b334";
const RESUME_LINK = "https://docs.google.com/document/d/1Res_po3ysesxdx-b7ChpiR7nbEQbNKYid7oQTe9Wr-c/edit?usp=sharing";
const EMAIL = "mailto:aiden@voth.name?subject=You%20Got%20The%20Job!"

export default function Socials() {
    const open = (link: string) => window.open(link, '_blank')?.focus()
    
    return <>
        <Section id="socials" mx="6" flexShrink="1" width={{ sm: "80vw", lg: "50vw", md: "60vw", xl: "40vw" }}>
            <Heading size="9">Socials</Heading>
            <Separator my="2" size="4"/>
            <Flex justify="center" gapX={{ initial: "6", md: "8" }} align="center" my="4">
                <Tooltip content="View My Linkedin!">
                    <IconButton onClick={() => open(LINKDEDIN_LINK)} variant="ghost" >
                        <LinkedInLogoIcon cursor="pointer" width="48" height="48"/>
                    </IconButton>
                </Tooltip>
                <Tooltip content="View My Github!">
                    <IconButton onClick={() => open(GITHUB_LINK)} variant="ghost" radius="full">
                        <GitHubLogoIcon width="48" cursor="pointer" height="48"/>
                    </IconButton>
                </Tooltip>
                <Tooltip content="View My Resume!">
                    <IconButton onClick={() => open(RESUME_LINK)} variant="ghost" radius="medium">
                        <FileTextIcon width="48" cursor="pointer" height="48"/>
                    </IconButton>
                </Tooltip>
                <Tooltip content="Email Me!">
                    <IconButton onClick={() => open(EMAIL)} variant="ghost" radius="medium">
                        <EnvelopeClosedIcon width="48" cursor="pointer" height="48"/>
                    </IconButton>
                </Tooltip>
            </Flex>
        </Section>
    </>
}
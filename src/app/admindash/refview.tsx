'use client'

import { Flex, Heading, Text } from "@radix-ui/themes";

export default function RefView(props: {
    name: string,
    refstr: string,
    skills: string[]
}) {
    const refUrl = window.location.host + "/" + props.refstr;

    const copyRef = () => {
        
        navigator.clipboard.writeText(refUrl);
    }

    return (
        <Flex gapY="5" direction="column" align="center">
            <Heading size="9" mt="9">{props.name}</Heading>
            <Text size="5" style={{ cursor: "pointer" }} onClick={copyRef} >{refUrl}</Text>
            <Text size="5">Skills:</Text>
            <Flex mt="-4" direction="column" align="start">
                {props.skills.map((skill) => {
                    return (
                        <Text size="4" key={skill}>
                            {skill}
                        </Text>
                    )
                })}
            </Flex>
        </Flex>
    )
}
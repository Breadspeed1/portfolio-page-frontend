'use client'

import { Blockquote, Heading, Section, Separator, Strong, Text } from '@radix-ui/themes';
import { useState, useEffect } from 'react';

const TYPE_SPEED = 200;
const CARAT = '_';

export default function Description(props: { name: string }) {
    const [slug, setSlug] = useState(CARAT);
  
    useEffect(() => {
        if (slug.length <= 1) {
            for (let i = 0; i < props.name.length + 1; i++) {
                let toSet = props.name.substring(0, i);

                if (i < props.name.length) {
                    toSet += CARAT;
                }

                setTimeout(() => setSlug(toSet), i * TYPE_SPEED)
            }
        }
    })
  
    const intro = (
      <Heading size="9">Hey <Strong>{slug}</Strong>,<br/> I&apos;m Aiden.</Heading>
    );
  
    const desc = (
      <Blockquote size="4">
        I am curently a student of <Strong>Software Engineering</Strong> at Rochester Institute of Technology (<Strong>RIT</Strong>).
        I am a <Strong>full-stack</Strong> engineer, and I especially enjoy <Strong>back-end</Strong>.
        My favorite language to work in is <Strong>Rust</Strong>.
      </Blockquote>
    )
  
    return (
      <Section mx="6" flexShrink="1" maxWidth={{ sm: "80vw", lg: "50vw", md: "60vw", xl: "40vw" }}>
        {intro}
        <Separator my="2" size="4"/>
        {desc}
      </Section>
    )
  }
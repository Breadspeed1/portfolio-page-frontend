'use client'

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
      <div className="font-sans text-8xl text-left ml-5">Hey <b className="break-all">{slug}</b>,<br/> I&apos;m <b>Aiden</b>.</div>
    );
  
    const desc = (
      <div className="font-sans text-3xl text-left ml-8 pt-8 flex">
        <div className="w-2 flex-none bg-[--color-4] mr-4">
          
        </div>
        <div className="flex-1">
          I am curently a student of <b>Software Engineering</b> at Rochester Institute of Technology (<b>RIT</b>).
          I am a <b>full-stack</b> engineer, and I especially enjoy <b>back-end</b>.
          My favorite language to work in is <b>Rust</b>.
          This is a test to see if the ci/cd is working part 2
        </div>
      </div>
    )
  
    return (
      <div>
        {intro}
        {desc}
      </div>
    )
  }
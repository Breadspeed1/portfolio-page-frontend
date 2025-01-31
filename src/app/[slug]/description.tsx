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
      <div className="font-sans text-4xl md:text-7xl text-left">Hey <b className="break-all">{slug}</b>,<br/> I&apos;m <b>Aiden</b>.</div>
    );
  
    const desc = (
      <div className="font-sans text-lg md:text-3xl text-left pt-8 flex">
        <div className="w-2 flex-none bg-[--color-4] mr-4">
          
        </div>
        <div className="flex-1">
          I am curently a student of <b>Software Engineering</b> at Rochester Institute of Technology (<b>RIT</b>).
          I am a <b>full-stack</b> engineer, and I especially enjoy <b>back-end</b>.
          My favorite language to work in is <b>Rust</b>.
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
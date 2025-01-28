'use client'

import Sidebar from "./sidebar";
import { useEffect, useRef, useState } from 'react';

const TYPE_SPEED = 200;

function Description(props: { name: string }) {
  const intro = (
    <div className="font-sans text-8xl text-left ml-5">Hey <b className="break-all">{props.name}</b>, I&apos;m <b>Aiden</b>.</div>
  );

  const desc = (
    <div className="font-sans text-3xl text-left ml-5 pt-8">
      I am curently a student of <b>Software Engineering</b> at Rochester Institute of Technology (<b>RIT</b>).
      I am a <b>full-stack</b> engineer, and I especially enjoy <b>back-end</b>.
      My favorite language to work in is <b>Rust</b>.
    </div>
  )

  return (
    <div>
      {intro}
      {desc}
    </div>
  )
}

export default function Home({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const aboutMeRef = useRef(null);
  const [slug, setSlug] = useState("");

  useEffect(() => {
    params.then(res => {
      if (slug.length == 0) {
        for (let i = 0; i < res.slug.length + 1; i++) {
          let toSet = res.slug.substring(0, i);
  
          if (i < res.slug.length) {
            toSet += '_';
          }
  
          setTimeout(() => setSlug(toSet), i * TYPE_SPEED)
        }
      }
    })
  })

  
  

  //TODO: Integrate with api
  return (
    <div className="flex overflow-hidden">
      <div className="fixed flex-none h-screen">
        <Sidebar aboutMeRef={aboutMeRef}/>
      </div>
      <div className="flex-1 bg-[--color-2] p-10 ml-20">
        <div ref={aboutMeRef}></div>
        <Description name={slug} />
      </div>
    </div>
  );
}

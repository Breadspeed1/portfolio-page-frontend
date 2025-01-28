'use client'

import Sidebar from "./sidebar";
import { useRef } from 'react';

function Description(props: { name: string }) {
  const intro = (
    <div className="font-sans text-8xl text-left ml-5">Hey <b>{props.name}</b>, I&apos;m <b>Aiden</b>.</div>
  );

  const desc = (
    <div className="font-sans text-3xl text-left ml-5 pt-8">
      I am curently a student of <b>Software Engineering</b> at Rochester Institute of Technology (<b>RIT</b>).
      I am a <b>full-stack</b> engineer, and I especially enjoy <b>back-end</b>.

    </div>
  )

  return (
    <div>
      {intro}
      {desc}
    </div>
  )
}

export default function Home() {
  const aboutMeRef = useRef(null);

  //TODO: Integrate with api
  return (
    <div className="flex overflow-hidden">
      <div className="fixed flex-none h-screen">
        <Sidebar aboutMeRef={aboutMeRef}/>
      </div>
      <div className="flex-1 bg-[--color-2] p-10 ml-20">
        <div ref={aboutMeRef}></div>
        <Description name="Person" />
      </div>
    </div>
  );
}

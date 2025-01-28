'use client'

import Image from "next/image";
import Sidebar from "./sidebar";
import { useEffect, useRef, useState } from 'react';

const TYPE_SPEED = 200;
const CARAT = '_';

const GITHUB_LINK = "https://github.com/Breadspeed1";
const LINKDEDIN_LINK = "www.linkedin.com/in/aiden-voth-a0972b334";

function Description(props: { name: string }) {
  const intro = (
    <div className="font-sans text-8xl text-left ml-5">Hey <b className="break-all">{props.name}</b>,<br/> I&apos;m <b>Aiden</b>.</div>
  );

  const desc = (
    <div className="font-sans text-3xl text-left ml-8 pt-8 flex">
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

function SocialLink(props: {
  src: string,
  alt: string,
  link: string,
  w: number,
  h: number
}) {
  return (
    <a href={props.link}>
      <Image className="h-20 w-auto" src={props.src} alt={props.alt} width={props.w} height={props.h}/>
    </a>
  )
}

export default function Home({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const aboutMeRef = useRef(null);
  const socialsRef = useRef(null);
  const projectsRef = useRef(null);

  const [slug, setSlug] = useState("");

  useEffect(() => {
    params.then(res => {
      if (slug.length == 0) {
        for (let i = 0; i < res.slug.length + 1; i++) {
          let toSet = res.slug.substring(0, i);
  
          if (i < res.slug.length) {
            toSet += CARAT;
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
        <Sidebar aboutMeRef={aboutMeRef} socialsRef={socialsRef} projectsRef={projectsRef}/>
      </div>
      <div className="flex-1 bg-[--color-2] p-10 ml-20">
        <div ref={aboutMeRef}></div>
        <Description name={slug} />
        <div className="flex justify-evenly items-center ml-24 mr-24 mt-24" ref={socialsRef}>
          <SocialLink w={64} h={64} src={"/github-mark-white.png"} alt="github cat" link={GITHUB_LINK} />
          <SocialLink w={256} h={256} src={"/LI-Logo.png"} alt="linkedin logo" link={LINKDEDIN_LINK} />
        </div>
        <div className="font-sans text-8xl ml-5 mt-24" ref={projectsRef}><b>Projects</b></div>
      </div>
    </div>
  );
}

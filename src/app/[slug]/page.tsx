import Image from "next/image";
import Sidebar from "./sidebar";
import Description from "./description";

const GITHUB_LINK = "https://github.com/Breadspeed1";
const LINKDEDIN_LINK = "www.linkedin.com/in/aiden-voth-a0972b334";

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

export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  //TODO: Integrate with api
  return (
    <div className="flex overflow-hidden">
      <div className="fixed flex-none h-screen">
        <Sidebar items={[
          { id: "about-me", title: "About Me" },
          { id: "socials", title: "Socials" },
          { id: "projects", title: "Projects" }
        ]}/>
      </div>
      <div className="flex-1 bg-[--color-2] p-10 ml-20">
        <div id="about-me"></div>
        <Description name={(await params).slug} />
        <div id="socials" className="flex justify-evenly items-center ml-24 mr-24 mt-24">
          <SocialLink w={64} h={64} src={"/github-mark-white.png"} alt="github cat" link={GITHUB_LINK} />
          <SocialLink w={256} h={256} src={"/LI-Logo.png"} alt="linkedin logo" link={LINKDEDIN_LINK} />
        </div>
        <div id="projects" className="font-sans text-8xl ml-5 mt-24"><b>Projects</b></div>
      </div>
    </div>
  );
}

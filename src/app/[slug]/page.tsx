import Image from "next/image";
import Sidebar from "./sidebar";
import Description from "./description";
import { redirect } from "next/navigation";

const GITHUB_LINK = "https://github.com/Breadspeed1";
const LINKDEDIN_LINK = "https://linkedin.com/in/aiden-voth-a0972b334";
const BACKEND_ADDRESS = process.env.BACKEND_ADDRESS;

function SocialLink(props: {
  src: string,
  alt: string,
  link: string,
  w: number,
  h: number
}) {
  return (
    <a href={props.link}>
      <Image className="h-10 md:h-20 w-auto" src={props.src} alt={props.alt} width={props.w} height={props.h}/>
    </a>
  )
}

export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const uri = BACKEND_ADDRESS + "/ref/" + (await params).slug + "/name";
  const res = await fetch(uri);

  if (!res.ok) {
    redirect("/NOREF");
  }

  const name = await res.text();

  //TODO: Integrate with api
  return (
    <div className="flex overflow-wrap text-wrap break-words">
      <div className="fixed flex-none h-screen">
        <Sidebar items={[
          { id: "about-me", title: "About Me" },
          { id: "socials", title: "Socials" },
          { id: "projects", title: "Projects" }
        ]}/>
      </div>
      <div className="flex flex-1 flex-col justify-center items-center bg-[--color-2] p-10 h-auto">
        <div id="about-me" className="flex-1 lg:w-[50vw] h-auto  w-full">
          <Description name={name} />
        </div>
        <div id="socials" className="flex justify-evenly items-center mt-24 w-full">
          <SocialLink w={64} h={64} src={"/github-mark-white.png"} alt="github cat" link={GITHUB_LINK} />
          <SocialLink w={256} h={256} src={"/LI-Logo.png"} alt="linkedin logo" link={LINKDEDIN_LINK} />
        </div>
        <div id="projects flex-none" className="font-sans text-4xl md:text-7xl ml-5 mt-24 flex-1 lg:w-[50vw] w-full"><b>Projects</b></div>
      </div>
    </div>
  );
}

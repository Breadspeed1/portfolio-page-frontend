import Description from "./description";
import { redirect } from "next/navigation";
import { GetRefName as GetRefName } from "../admindash/api";
import { Card, Flex } from "@radix-ui/themes";
import Nav from "./nav";
import Socials from "./socials";

export const FAILURE_REDIRECT = "/NOREF";


export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const name = await GetRefName((await params).slug)

  if (!name) {
    redirect(FAILURE_REDIRECT)
  }

  //TODO: Integrate with api
  return (
    <>
      <Flex position="sticky" top="4" justify="center" align="center">
        <Card variant="surface" size="1">
          <Nav/>
        </Card>
      </Flex>
      <Flex align="center" justify="center" direction="column">
          <Description name={name}/>
          <Socials />
        </Flex>
    </>

    // <div className="flex overflow-wrap text-wrap break-words">
    //   <div className="fixed flex-none h-screen">
    //     <Sidebar items={[
    //       { id: "about-me", title: "About Me" },
    //       { id: "socials", title: "Socials" },
    //       { id: "projects", title: "Projects" }
    //     ]}/>
    //   </div>
    //   <div className="flex flex-1 flex-col justify-center items-center bg-[--color-2]q h-auto m-5 md:ml-0 md:mr-0">
    //     <div id="about-me" className="flex-1 lg:w-[50vw] md:w-[75vw] h-auto  w-full">
    //       <Description name={name} />
    //     </div>
    //     <div id="socials" className="flex justify-evenly items-center mt-24 w-full">
    //       <SocialLink w={64} h={64} src={"/github-mark-white.png"} alt="github cat" link={GITHUB_LINK} />
    //       <SocialLink w={256} h={256} src={"/LI-Logo.png"} alt="linkedin logo" link={LINKDEDIN_LINK} />
    //     </div>
    //     <div id="projects flex-none" className="font-sans text-4xl md:text-7x mt-24 flex-1 md:w-[75vw] lg:w-[50vw] w-full"><b>Projects</b></div>
    //   </div>
    // </div>
  );
}

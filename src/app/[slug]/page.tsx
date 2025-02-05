import Description from "./description";
import { redirect } from "next/navigation";
import { GetRef } from "../admindash/api";
import { Card, Flex } from "@radix-ui/themes";
import Nav from "./nav";
import Socials from "./socials";
import ProjectSection from "./projectsection";

export const FAILURE_REDIRECT = "/NOREF";


export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const reference = await GetRef((await params).slug)

  if (!reference) redirect(FAILURE_REDIRECT)

  return (
    <>
      <Flex position="sticky" top="4" justify="center" align="center">
        <Card variant="surface" size="1">
          <Nav/>
        </Card>
      </Flex>
      <Flex align="center" justify="center" direction="column">
        <Description name={reference.name}/>
        <Socials />
        <ProjectSection skills={reference.skills}/>
      </Flex>
    </>
  );
}

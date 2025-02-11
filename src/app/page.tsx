'use server'

import Description from "./description";
import { Card, Flex } from "@radix-ui/themes";
import Nav from "./nav";
import Socials from "./socials";
import ProjectSection from "./projectsection";
import { GetRef, GetRefFromJWT } from "./api";
import { cookies } from "next/headers";

export default async function Home() {
  let auth = (await cookies()).get('authorization')?.value
  auth = auth ? auth : ''
  let refstr = await GetRefFromJWT(auth)
  refstr = refstr ? refstr : ''
  let reference = await GetRef(refstr, auth)

  //if (!reference) redirect(FAILURE_REDIRECT)

  reference = reference ? reference : { name: '', skills: [] }

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

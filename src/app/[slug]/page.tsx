'use server'

import Description from "./description";
import { redirect } from "next/navigation";
import { GetJWTForRef, GetRef, GetRefFromJWT } from "../admindash/api";
import { Card, Flex } from "@radix-ui/themes";
import Nav from "./nav";
import Socials from "./socials";
import ProjectSection from "./projectsection";
import { cookies } from "next/headers";

const FAILURE_REDIRECT = "/NOREF";

async function handleJWT(replacement: string | null) {
  const cookie_store = await cookies()
  const jwt = cookie_store.get("jwt");

  if (jwt) {
    const ref = await GetRefFromJWT(jwt.value)

    if (ref && !replacement) {
      redirect("/" + ref)
    }
    else if (replacement == ref) {
      return
    }
    else if (replacement) {
      await setNewJWT(replacement)
      redirect("/" + replacement)
    }
  }

  await setNewJWT("NOREF")
  redirect(FAILURE_REDIRECT)
}

async function setNewJWT(ref: string) {
  'use server'
  const cookie_store = await cookies()
  const new_jwt = await GetJWTForRef(ref)

  if (new_jwt) {
    cookie_store.set("jwt", new_jwt)
  }
}

export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const reference = await GetRef(slug)
  
  handleJWT(reference ? slug : null)

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

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
  );
}

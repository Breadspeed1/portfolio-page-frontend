import { Box, Flex } from "@radix-ui/themes";
import { CheckAdmin, GetRef, GetRefList, GetSkillsList } from "../api"
import Reflist from "./reflist"
import RefView from "./refview";
import SkillsList from "./skillslist";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Admin({
    searchParams
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const auth = (await cookies()).get('authorization')?.value

    if (!auth || !(await CheckAdmin(auth))) redirect('/adminlogin')

    const refstr = (await searchParams)["ref"];
    let ref = null

    if (refstr) {
        ref = await GetRef(refstr as string, auth);
    }

    const skills = await GetSkillsList(auth);

    return (
        <Flex justify="center" align="center" gapX="3">
            <Box height="100vh" flexGrow="0" flexShrink="0" width="25rem">
                <Reflist refs={await GetRefList(auth)} />
            </Box>
            <Box height="100vh" flexGrow="1" flexShrink="1" minWidth="0">
                {ref ? <RefView refstr={refstr as string} name={ref.name} skills={ref.skills}/> : <></>}
            </Box>
            <Box height="100vh" flexGrow="0" flexShrink="0" width="25rem">
                {skills ? <SkillsList all_skills={skills} added_skills={ref ? ref.skills : []} refstr={refstr as string} /> : <></>}
            </Box>
        </Flex>
    )
}
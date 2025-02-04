import { Box, Flex } from "@radix-ui/themes";
import { GetRef, GetRefList, GetSkillsList } from "./api"
import Reflist from "./reflist"
import RefView from "./refview";
import SkillsList from "./skillslist";

export default async function Admin({
    searchParams
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const refstr = (await searchParams)["ref"];
    let ref = null

    if (refstr) {
        ref = await GetRef(refstr as string);
    }

    const skills = await GetSkillsList();

    return (
        <Flex justify="center" align="center" gapX="3">
            <Box height="100vh" flexGrow="0" flexShrink="0" width="25rem">
                <Reflist refs={await GetRefList()} />
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
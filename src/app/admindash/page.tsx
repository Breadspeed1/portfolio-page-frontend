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
        <div className="flex justify-stretch items-center h-screen w-full break-words">
            <div className="flex-none w-80 h-screen"><Reflist refs={await GetRefList()} /></div>
            <div className="flex-1 h-screen">{ref ? <RefView refstr={refstr as string} name={ref.name} skills={ref.skills}/> : <></>}</div>
            <div className="flex-none w-80 h-screen">{skills ? <SkillsList all_skills={skills} added_skills={ref ? ref.skills : []} refstr={refstr as string} /> : <></>}</div>
        </div>
    )
}
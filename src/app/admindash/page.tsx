import { GetRefList } from "./api"
import Reflist from "./reflist"

export default async function Admin({
    searchParams
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const params = await searchParams;

    return (
        <div className="flex justify-stretch items-center h-screen w-full">
            <div className="flex-none w-80 h-screen"><Reflist refs={await GetRefList()} /></div>
        </div>
    )
}
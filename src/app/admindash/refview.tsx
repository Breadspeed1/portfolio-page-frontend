'use client'

export default function RefView(props: {
    name: string,
    refstr: string,
    skills: string[]
}) {
    const refUrl = window.location.host + "/" + props.refstr;

    const copyRef = () => {
        
        navigator.clipboard.writeText(refUrl);
    }

    return (
        <div className="text-4xl text-center">
            <div className="mt-5">{props.name}</div>
            <div onClick={copyRef} className="border-4 border-white ml-5 mr-5 pt-5 pb-5 mt-10 text-[--color-4] hover:text-slate-500 hover:cursor-pointer">{refUrl}</div>
            <div className="mt-10">Skills:</div>
            <div className="text-2xl">{props.skills}</div>
        </div>
    )
}
import { RefObject } from "react";

function MenuItem({ text, scrollRef }: { text: string, scrollRef: RefObject<HTMLElement | null> }) {
    const scrollTo = () => {
        if (scrollRef && scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }
    
    return (
        <div onClick={scrollTo} className={"overflow-hidden group-hover:opacity-100 opacity-0 ease-in-out duration-300"}>
            <div className="font-sans text-2xl text-[--background] bg-transparent hover:bg-[--color-4] duration-200 ease-in-out h-20 flex justify-center items-center">{text}</div>
        </div>
    )
}

export default function Sidebar(props: {
    aboutMeRef: RefObject<HTMLElement | null>
}) {
    return (
        <div className="group font-sans w-24 h-screen m-0 bg-[--foreground] hover:w-64 opacity-15 hover:opacity-100 duration-300 ease-in-out">
            <MenuItem text="About Me" scrollRef={props.aboutMeRef}/>
        </div>
    );
};
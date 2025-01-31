'use client'

function MenuItem({ id, title }: { id: string, title: string }) {
    const scrollTo = () => {
        const e = document.getElementById(id);

        e?.scrollIntoView({
            block: "center",
            behavior: "smooth"
        });
    }
    
    return (
        <div onClick={scrollTo} className={"cursor-pointer select-none overflow-hidden group-hover:opacity-100 opacity-0 ease-in-out duration-300"}>
            <div className="font-sans text-2xl text-[--background] bg-transparent hover:bg-[--color-4] duration-200 ease-in-out h-20 flex justify-center items-center">{title}</div>
        </div>
    )
}

export default function Sidebar(props: {
    items: { id: string, title: string }[]
}) {
    return (
        <div className="group sm:visible invisible font-sans w-24 h-screen m-0 bg-[--foreground] hover:w-64 opacity-15 hover:opacity-100 duration-300 ease-in-out">
            <ul>
                {props.items.map((item) => {
                    return <li key={item.id}><MenuItem id={item.id} title={item.title}/></li>
                })}
            </ul>
        </div>
    );
};
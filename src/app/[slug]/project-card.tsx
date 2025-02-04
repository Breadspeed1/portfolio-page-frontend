import { Card } from "@radix-ui/themes";
import { ProjectData } from "./projects";

export default function ProjectCard(props: {
    projectData: ProjectData
}) {


    return (
        <Card>
            {props.projectData.title}
        </Card>
    )
}
'use client'

import { Box, Card, Grid, Inset, Separator, Strong, Text } from "@radix-ui/themes";
import { ProjectData } from './projects';
import Image from "next/image";
import { redirect } from "next/navigation";

export default function ProjectCard({
    projectData
}: {
    projectData: ProjectData
}) {
    const openProject = () => {
        redirect("/project/" + projectData.id)
    }

    return (
        <Box maxHeight="150px" onClick={openProject} style={{ cursor: "pointer" }}>
            <Card>
                <Grid columns="2" mb="-2">
                    <Inset clip="padding-box" side="left" pr="current">
                        <Image src={projectData.thumbnailPath} alt="Project Thumbnail" height={150} width={150} />
                    </Inset>
                    <Box ml="1" maxWidth="175px" height="auto">
                        <Text wrap="wrap" size={{initial: "2", sm: "3"}}><Strong>{projectData.title}</Strong></Text>
                        <Separator my="3" size="4" />
                        <Text wrap="wrap" size={{initial: "1", sm: "3"}}>{projectData.subtitle}</Text>
                    </Box>
                </Grid>
            </Card>
        </Box>
    )
}
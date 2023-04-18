import { Box, Container } from "@chakra-ui/react";
import { app as AddProjectPage } from "@/components/AddProjects/App";

export default function addProject() {
    return (
        <Box pt={35}>
            <AddProjectPage></AddProjectPage>
        </Box>
    )
}
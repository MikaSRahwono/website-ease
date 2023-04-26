import { Box, Container } from "@chakra-ui/react";
import { App as AddProjectPage } from "@/components/AddProjects/App";

export default function addProject() {
    return (
        <Box pt={35}>
            <AddProjectPage></AddProjectPage>
        </Box>
    )
}
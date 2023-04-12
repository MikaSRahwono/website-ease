import { Box, Container } from "@chakra-ui/react";
import DetailPage from "@/components/ProjectList/detailpage";

export default function Dashboard() {
    return (
        <Box pt={35}>
            <DetailPage></DetailPage>
        </Box>
    )
}
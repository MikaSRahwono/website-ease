import { Box, Container } from "@chakra-ui/react";
import DetailPage from "@/components/ProjectList/detailpage";
import { useDB } from "@/lib/databaseContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Detail() {
    const router = useRouter()

    return (
        <Box pt={35} style={{ backgroundColor:'#fff'}} color='black'>
            <DetailPage id={router.query.id}></DetailPage>
        </Box>
    )
}
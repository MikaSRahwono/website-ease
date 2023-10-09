import { Box, Container } from "@chakra-ui/react";
import { App as AddProjectPage } from "@/components/AddProjects/app";
import { useAuth } from "@/lib/authUserContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AddProject() {
    const { authUser, loading } = useAuth();
    const router = useRouter();

    console.log(authUser)
    console.log(loading)
  
    useEffect(() => {
      if (!loading && !authUser) {
        router.push('/admin')
      }
    }, [authUser, loading, router])

    
    return (
        <Box pt={35}>
            <AddProjectPage></AddProjectPage>
        </Box>
    )
}
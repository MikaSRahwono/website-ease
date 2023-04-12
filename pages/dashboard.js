import { Box, Container } from "@chakra-ui/react";
import { App as ProjectList } from "@/components/ProjectList/app";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../lib/authUserContext';

export default function Dashboard() {
    const { authUser, loading } = useAuth();
    const router = useRouter();

    console.log(authUser)
    console.log(loading)
  
    useEffect(() => {
      if (!loading && !authUser) {
        router.push('/admin')
      }
    }, [authUser, loading])

    return (
        <Box pt={35}>
            <ProjectList></ProjectList>
        </Box>
    )
}
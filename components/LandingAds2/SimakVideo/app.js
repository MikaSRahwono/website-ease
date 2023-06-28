import { Box, Container, Text, Heading, Center, Stack, Card, HStack, Image, VStack } from "@chakra-ui/react";
import { Divider } from "antd";


export default function SimakVideo() {
  return (
    <Box pt={{base: '5vh',lg: '10vh'}}>
        <Center>
            <VStack spacing={{base: '5vw',lg: '3vw'}}>
            <Heading fontSize={{base: '2xl',md: '3xl'}} w={{base: "80vw", md: '50vw'}} textAlign='center'>Simak video dibawah ini untuk lihat Tim Ease ketika turun live streaming!</Heading>
            <Image alt="easeyourneeds" src="/img/ads2/video.png" h={{base: "25vh",lg: "50vh"}} />
            <Image alt="easeyourneeds" src="/img/ads2/video.png" h={{base: "25vh",lg: "50vh"}}  />
            </VStack>
        </Center>
    </Box>
  );
}

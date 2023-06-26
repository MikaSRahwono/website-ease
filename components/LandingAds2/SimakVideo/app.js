import { Box, Container, Text, Heading, Center, Stack, Card, HStack, Image, VStack } from "@chakra-ui/react";
import { Divider } from "antd";


export default function SimakVideo() {
  return (
    <Box pt='10vh'>
        <Center>
            <VStack spacing='3vw'>
            <Heading fontSize='3xl' w='50vw' textAlign='center'>Simak video dibawah ini untuk lihat Tim Ease ketika turun live streaming!</Heading>
            <Image alt="easeyourneeds" src="/img/ads2/video.png" h="50vh" />
            <Image alt="easeyourneeds" src="/img/ads2/video.png" h="50vh" />
            </VStack>
        </Center>
    </Box>
  );
}

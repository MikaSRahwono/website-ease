import { Box, Container, Text, Heading, Center, Stack, Card, HStack, Image, VStack, useMediaQuery } from "@chakra-ui/react";
import { Divider } from "antd";


export default function SimakVideo() {
  const [isLargerThan400] = useMediaQuery('(min-width: 480px)')

  return (
    <Box pt={{base: '5vh',lg: '10vh'}}>
        <Center>
          <VStack spacing={{base: '5vw',lg: '3vw'}}>
            <Heading fontSize={{base: '2xl',md: '3xl'}} w={{base: "80vw", md: '50vw'}} textAlign='center'>Simak video dibawah ini untuk lihat Tim Ease ketika turun live streaming!</Heading>
              {isLargerThan400 ? 
              <HStack spacing='5vw'>
              <Box
                  width={{md: '30vw', lg: '20vw'}}
                  as='video'
                  controls
                  src='https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Fvideo%2FBTS%20-%20Ibu%20Punya%20Mimpi%20(1).mov?alt=media&token=de56ba72-aa59-4ec2-bcd1-27eee2764241'
                  poster='https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Fvideo%2FScreen%20Shot%202023-07-13%20at%208.21.50%20PM.png?alt=media&token=82dca042-d92b-4202-8ace-eb24312427e6'
                  alt='Video Live Streaming'
                  objectFit='contain'
                  sx={{
                  aspectRatio: '9/16'
                  }}
                  mt={45}
                  borderRadius={25}
                  boxShadow='10px 10px 10px 2px rgba(0, 0, 0, 0.2)'
              />
                <Box
                width={{md: '50vw',lg: '40vw'}}
                as='video'
                controls
                src='https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Fvideo%2FIbu%20Punya%20Mimpi%20(1).mov?alt=media&token=8ce2e841-75c4-4f6d-9733-6a28e936dc22'
                poster='https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Fvideo%2FScreen%20Shot%202023-07-13%20at%208.20.52%20PM.png?alt=media&token=1dd2094a-b7da-44cd-a8c1-e63460347f30'
                alt='Big Buck Bunny'
                objectFit='contain'
                sx={{
                aspectRatio: '16/9'
                }}
                mt={45}
                borderRadius={25}
                boxShadow='10px 10px 10px 2px rgba(0, 0, 0, 0.2)'
            />     
              </HStack>
              : 
              <VStack spacing='5vw'>
                <Box
                    width='70vw'
                    as='video'
                    controls
                    src='https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Fvideo%2FBTS%20-%20Ibu%20Punya%20Mimpi%20(1).mov?alt=media&token=de56ba72-aa59-4ec2-bcd1-27eee2764241'
                    poster='https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Fvideo%2FScreen%20Shot%202023-07-13%20at%208.21.50%20PM.png?alt=media&token=82dca042-d92b-4202-8ace-eb24312427e6'
                    alt='Video Live Streaming'
                    objectFit='contain'
                    sx={{
                    aspectRatio: '9/16'
                    }}
                    mt={45}
                    borderRadius={25}
                    boxShadow='10px 10px 10px 2px rgba(0, 0, 0, 0.2)'
                />
                  <Box
                  width='80vw'
                  as='video'
                  controls
                  src='https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Fvideo%2FIbu%20Punya%20Mimpi%20(1).mov?alt=media&token=8ce2e841-75c4-4f6d-9733-6a28e936dc22'
                  poster='https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2FLandingAds%2Fvideo%2FScreen%20Shot%202023-07-13%20at%208.20.52%20PM.png?alt=media&token=1dd2094a-b7da-44cd-a8c1-e63460347f30'
                  alt='Big Buck Bunny'
                  objectFit='contain'
                  sx={{
                  aspectRatio: '16/9'
                  }}
                  mt={45}
                  borderRadius={25}
                  boxShadow='10px 10px 10px 2px rgba(0, 0, 0, 0.2)'
              />     
              </VStack>
              }

          </VStack>
        </Center>
    </Box>
  );
}

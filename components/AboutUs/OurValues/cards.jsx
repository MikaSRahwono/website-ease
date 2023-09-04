import { Box, Flex, Center, Text, Image, Icon, VStack } from '@chakra-ui/react'

const OurValuesWrapper = (props) => {
  const { ...rest } = props

  return (
    <Box 
      w="full"
      h={{base: '40vh', md: '38vh',lg: '38vh'}}      mx="auto"
      bg={'white'}
      pb="8"
      rounded="lg"
      shadow="base"
      position="relative"
      {...rest}
    />
  )
}

export const OurValuesCards = (props) => {
  const { img, desc, title,  ...rest } = props
  return (
    <Box w={{sm: '100%', md: "100%"}} maxW="xl">
      <OurValuesWrapper backgroundColor={'white'}>

      {/* <Center>
        <Image pt='10' src={img} alt={name} w="30%" h="30%" objectFit="cover" />
      </Center> */}
        <Center>
        <Box mx='1vw' h={{base: '40vh', md: '38vh',lg: '38vh'}} direction="column" justify="center" mt={4} textAlign="center">
          <Center h={{base: '35vh', md: '30vh',lg: '30vh'}}>
            <VStack>
              <Center pb='2vh'>
                <Image alt='easeyourneeds' boxSize='10vh' src={img}></Image>
              </Center>
              <Text color={'#000'} fontFamily='Aileron' fontSize="2xl" fontWeight="bold">
                {title}
              </Text>
              <Text fontFamily='Aileron' mt={2} color={'#000'} maxW="20rem" mx={['2', '2', 'auto']}>
                {desc}
              </Text>
            </VStack>
          </Center>
        </Box>
        </Center>

      </OurValuesWrapper>
    </Box>
  )
}

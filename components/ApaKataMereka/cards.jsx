import { Box, Flex, Center, Text, Image, HStack } from '@chakra-ui/react'

const HistoryWrapper = (props) => {
  const { ...rest } = props

  return (
    <Box 
      w="full"
      maxW="370"
      minH={['250px', '250px', '300px']}
      minW='370'
      mx="auto"
      bg={'white'}
      pb="8"
      rounded="lg"
      shadow="base"
      position="relative"
      {...rest}
    />
  )
}

export const HistoryCards = (props) => {
  const { img, img2, desc, name, jabatan,  ...rest } = props
  return (
    <Box w="100%" maxW="xl">
      <HistoryWrapper backgroundColor={'white'}>

      <Center>
        <HStack justifyContent="center" alignItems="center">
          <Image src={img} alt={name} w="30%" h="30%" objectFit="cover" />
          {img2 && <Image alt={name} src={img2} w="30%" h="30%" objectFit="cover" />}
        </HStack>
      </Center>

        <Flex fontFamily={'Montserrat'} direction="column" justify="left" mt={4} textAlign="justify">
          <Text textAlign={'center'}  color={'#000'} fontSize="1xl" fontWeight="bold">
            {name}
          </Text>
          <Text textAlign={'center'}  color={'#000'} fontSize="1xl" fontWeight="bold">
            {jabatan}
          </Text>
          <Text mt={2} color={'#000'} maxW="20rem" mx={['2', '2', 'auto']}>
            {desc}
          </Text>
        </Flex>

      </HistoryWrapper>
    </Box>
  )
}
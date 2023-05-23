import { Box, Flex, Center, Text, Image } from '@chakra-ui/react'

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
  const { img, desc, title,  ...rest } = props
  return (
    <Box w="100%" maxW="xl">
      <HistoryWrapper backgroundColor={'white'}>

        <Center>
          <Image rounded="lg" src={img} alt={title} w="100%" h="250px" objectFit="cover" />
        </Center>

        <Flex direction="column" justify="left" mt={4} textAlign="justify">
          <Text pl={['4', '4', '6']} color={'#000'} fontFamily='Aileron' fontSize="2xl" fontWeight="bold">
            {title}
          </Text>
          <Text fontFamily='Aileron' mt={2} color={'#000'} maxW="20rem" mx={['2', '2', 'auto']}>
            {desc}
          </Text>
        </Flex>

      </HistoryWrapper>
    </Box>
  )
}

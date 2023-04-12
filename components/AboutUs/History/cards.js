import { Box, Flex, Center, Text, Image } from '@chakra-ui/react'

const HistoryWrapper = (props) => {
  const { ...rest } = props

  return (
    <Box 
      w="100%"
      minH={['250px', '250px', '300px']}
      mx="auto"
      pb="8"
      position="relative"
      {...rest}
    />
  )
}

export const HistoryCards = (props) => {
  const { img, desc, title,  ...rest } = props
  return (
    <Box w="70%" maxW="xl" m='2.5vw'>
      <HistoryWrapper>

        <Center>
          <Image src={img} alt={title} w="100%" h="35vh" objectFit="cover" />
        </Center>
        <Text fontSize='sm' mt='0.5vh'>Keterangan</Text>

        <Flex direction="column" justify="left" mt={4} textAlign="justify">
          <Text  color={'#000'} fontFamily='Montserrat' fontSize="xl" fontWeight="bold">
            {title}
          </Text>
          <Text fontSize='sm' mt={2} color={'#000'} maxW="20rem" mx={['2', '2', 'auto']}>
            {desc}
          </Text>
        </Flex>

      </HistoryWrapper>
    </Box>
  )
}

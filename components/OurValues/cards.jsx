import { Box, Flex, Center, Text, Image } from '@chakra-ui/react'

const OurValuesWrapper = (props) => {
  const { ...rest } = props

  return (
    <Box 
      w="full"
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

export const OurValuesCards = (props) => {
  const { img, desc, title,  ...rest } = props
  return (
    <Box w="100%" maxW="xl">
      <OurValuesWrapper backgroundColor={'white'}>

      {/* <Center>
        <Image pt='10' src={img} alt={name} w="30%" h="30%" objectFit="cover" />
      </Center> */}
        <Center>
        <Flex direction="column" justify="center" mt={4} textAlign="center">
          <Text color={'#000'} fontFamily='Montserrat' fontSize="2xl" fontWeight="bold">
            {title}
          </Text>
          <Text fontFamily='Montserrat' mt={2} color={'#000'} maxW="20rem" mx={['2', '2', 'auto']}>
            {desc}
          </Text>
        </Flex>
        </Center>

      </OurValuesWrapper>
    </Box>
  )
}

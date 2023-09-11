import { Box, Flex, Center, Img, Divider, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

export const Testimonial = (props) => {
  const { logo, image, author, role, testimony } = props
  return (
    <Center>
      <Flex
      direction="column"
      rounded="lg"
      bg='white'
      color='#2f2f2f'
      shadow="lg"
      minH={{base:"100vh", md:"85vh", lg:'90vh'}}
      w={{lg:"25vw", md:"40vw", base:'87vw'}}
      px="4"
      py="10"
      ml={{lg:'5vw', sm:'5vw'}}
      mr={{lg:'5vw', sm:'5vw'}}
    >
      <Flex
        direction="column"
        position="relative"
        mb="4"
        textAlign="justify"
        justify="center"
        align="center"
        pt="10"
        pb="6"
        px={{lg:"5", md:"4", base:"6"}}
      >
        <Flex
        direction="column"
        position="relative"
        align="center"
        justify="center"
        color="#2f2f2f"
        px="6"
        pb="8"
      >
        <Img
          src={image}
          alt={author}
          rounded="full"
          position="relative"
          mt="-5"
          boxSize={{base:'20vw', md:'7vw'}}
          objectFit="cover"
        />
        <Box position="relative" fontSize="sm" mt="3" textAlign="center">
          <Text as="h3" fontWeight="bold" fontSize="md">
            {author}
          </Text>
          <Text>{role}</Text>
          <Center pt={{base: '3vh', lg: '50'}}>
            <Divider w={{base:'30vw', lg:'10vw', md:"20vw", sm:'30vw'}} alignItems='center' size='10' borderColor='gray' variant='solid' orientation='horizontal'></Divider>
          </Center>
        </Box>
      </Flex>
      <Box as="blockquote" maxW="360px" mx="auto" my="4">
          <Box
            position="absolute"
            top="6"
            left="5"
            display="inline"
            fontSize="3xl"
            opacity={0.2}
          >
            <ImQuotesLeft />
          </Box>
          <Text fontSize={{lg:"md", md:"md"}}>{testimony}</Text>
          <Box
            position="absolute"
            bottom="-2"
            right="5"
            display="inline"
            fontSize="3xl"
            opacity={0.2}
          >
            <ImQuotesRight />
          </Box>
          <Box
            position="absolute"
            top="5"
            right="5"
            display="inline"
          >
            <Img alignItems='end' src={logo} mb="2" w={{md:'4vw', base: '14vw'}}></Img>
          </Box>
        </Box>
      </Flex>
    </Flex>
    </Center>
  )
}
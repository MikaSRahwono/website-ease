import { Box, Flex, Center, Img, Stack, Text, useColorModeValue as mode, Divider } from '@chakra-ui/react'
import * as React from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

export const Testimonial = (props) => {
  const { logo, children, image, author, role, testimony } = props
  return (
    <Center>
      <Flex
      direction="column"
      rounded="lg"
      bg='white'
      color='#2f2f2f'
      shadow="lg"
      h={{lg:'full'}}
      w={{lg:"25vw", base:'87vw'}}
      px="3"
      py="10"
      ml={{lg:'8', sm:'2'}}
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
        px="10"
      >
        <Flex
          direction="column"
          position="relative"
          align="center"
          justify="center"
          color="#2f2f2f"
          px="6"
          pb="8"
          flex='1'
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
            <Center>
              <Divider w='20vw' alignItems='center' size='10' borderColor='gray' variant='solid' orientation='horizontal' mt='5vh'></Divider>
            </Center>
          </Box>
        </Flex>
        <Box as="blockquote" maxW="340px" mx="auto">
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
            <Text fontSize="md">{testimony}</Text>
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
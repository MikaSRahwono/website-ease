import { Box, Flex, Img, Center, SimpleGrid, Heading, Text, useColorModeValue as mode, HStack } from '@chakra-ui/react'
import * as React from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import { zoom } from './_data'

const Testimonial = (props) => {
  const { logo, children, image, author, role } = props
  return (
    <Flex
      direction="column"
      rounded={{
        md: 'lg',
      }}
      bg='white'
      color='#2f2f2f'
      shadow="lg"
    >
      <Flex
        direction="column"
        position="relative"
        mb="4"
        textAlign="center"
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
      >
        <Img
          src={image}
          alt={author}
          rounded="full"
          position="relative"
          mt="-5"
          w="7vw"
          h="7vw"
          objectFit="cover"
        />
        <Box position="relative" fontSize="sm" mt="3" textAlign="center">
          <Text as="h3" fontWeight="bold" fontSize="md">
            {author}
          </Text>
          <Text>{role}</Text>
        </Box>
      </Flex>
        <Box as="blockquote" maxW="340px" mx="auto" my="4">
          <Box
            position="absolute"
            top="6"
            left="5"
            display={{
              base: 'none',
              md: 'inline',
            }}
            fontSize="3xl"
            opacity={0.2}
          >
            <ImQuotesLeft />
          </Box>
          <Text fontSize="lg">{children}</Text>
          <Box
            position="absolute"
            bottom="-2"
            right="5"
            display={{
              base: 'none',
              md: 'inline',
            }}
            fontSize="3xl"
            opacity={0.2}
          >
            <ImQuotesRight />
          </Box>
          <Box
            position="absolute"
            top="5"
            right="5"
            display={{
              base: 'none',
              md: 'inline',
            }}
          >
            <Img alignItems='end' src={logo} mb="2" w='4vw'></Img>
          </Box>
        </Box>
      </Flex>
    </Flex>
  )
}

export const App = () => {
  return (
    <Box as="section" py="12">
      <Center color='#2f2f2f' mb='5vh'>
        <Heading>Testimoni</Heading>
      </Center>
      <Box
        maxW={{
          base: 'xl',
          md: '6xl',
        }}
        mx="auto"
        px={{
          md: '8',
        }}
      >
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          spacing="10"
        >
          {zoom.map((item, index) => (
            <Testimonial
              key={index}
              logo={item.logo}
              author={item.author}
              role={item.role}
              image={item.image}
            >
              {item.testimony}
            </Testimonial>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}

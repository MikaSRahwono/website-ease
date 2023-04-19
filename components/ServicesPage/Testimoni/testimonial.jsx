import { Box, Flex, HStack, Img, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { ImQuotesLeft } from 'react-icons/im'

export const Testimonial = (props) => {
  const { logo, image, name, role } = props
  return (
    <Stack
      as="blockquote"
      direction="row"
      spacing={{
        base: '0',
        md: '8',
      }}
      flex="1"
      {...props}
    >
      <Img
        display={{
          base: 'none',
          md: 'block',
        }}
        mt="2"
        flexShrink={0}
        src={image}
        alt={name}
        objectFit="cover"
        w={{
          base: '20',
          md: '32',
        }}
        h={{
          base: '20',
          md: '32',
        }}
        rounded="full"
      />
      <Flex w="full" direction="column">
        <Box mb="6">
          <Box as={ImQuotesLeft} color={mode('blue.600', 'blue.400')} fontSize="xl" />
          <Img src={logo}></Img>
        </Box>
        <HStack>
          <Img
            display={{
              base: 'block',
              md: 'none',
            }}
            flexShrink={0}
            src={image}
            alt={name}
            objectFit="cover"
            w={{
              base: '12',
              md: '32',
            }}
            h={{
              base: '12',
              md: '32',
            }}
            rounded="full"
          />
          <Box>
            <Text
              as="cite"
              fontStyle="normal"
              fontWeight="extrabold"
              color={mode('blue.600', 'blue.400')}
            >
              {name}
            </Text>
            <Text fontSize="sm" color={mode('gray.600', 'gray.400')}>
              {role}
            </Text>
          </Box>
        </HStack>
      </Flex>
    </Stack>
  )
}

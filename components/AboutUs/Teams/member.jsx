import { Box, Divider, HStack, Img, Link, Text, useColorModeValue, VisuallyHidden } from '@chakra-ui/react'
import * as React from 'react'
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa'

export const Member = (props) => {
  const { image, name, role, twitter, linkedIn, children } = props
  return (
    <Box w='12vw' m='3vw'>
      <Box pos="relative" >
        <Img
          pos="relative"
          alt={name}
          w="12vw"
          h="12vw"
          objectFit="cover"
          src={image}
          zIndex="1"
        />
      </Box>
      <Text textAlign='center' fontWeight="bold" mt="4" >
        {name}
      </Text>
      <Text textAlign='center'  >
        {role}
      </Text>
      <Divider borderColor='black' w='80%' mx='auto' mt='1vh'></Divider>
      <Text textAlign='center' fontSize='sm' mt="4" maxW="20rem">
        {children}
      </Text>
    </Box>
  )
}

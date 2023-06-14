import { Box, Divider, Center, VStack, HStack, Img, Link, Text, useColorModeValue, useMediaQuery, VisuallyHidden } from '@chakra-ui/react'
import * as React from 'react'
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa'

export const Member = (props) => {

  const [isLargerThan400] = useMediaQuery('(min-width: 480px)')
  const { image, name, role, twitter, linkedIn, children } = props
  return (
    <Box>
    {isLargerThan400 ? 
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
      </Box> :
      <VStack alignContent='center'>
      <Box w='40vw' m='3vw'>
        <Center>
          <Img
            pos="relative"
            alt={name}
            w="20vw"
            h="20vw"
            objectFit="cover"
            src={image}
            zIndex="1"
          />
        </Center>
        <Text textAlign='center' fontWeight="bold" mt="4" >
          {name}
        </Text>
        <Text textAlign='center'  >
          {role}
        </Text>
      </Box>
      </VStack>
    }
  </Box>
    
  )
}

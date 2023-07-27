import { Box, Divider, Center, VStack, HStack, Img, Link, Text, useColorModeValue, useMediaQuery, VisuallyHidden } from '@chakra-ui/react'
import * as React from 'react'
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa'

export const Member = (props) => {

  const [isLargerThan400] = useMediaQuery('(min-width: 480px)')
  const { image, name, role, twitter, linkedIn, children } = props
  return (
    <Box>
    {isLargerThan400 ? 
      <Box w={{md: '15vw', lg: "12vw"}} m={{md: '1vw', lg: '3vw'}}>
        <Box pos="relative" >
          <Img
            pos="relative"
            alt={name}
            w={{md: '15vw', lg: "12vw"}}
            h={{md: '15vw', lg: "12vw"}}
            objectFit="cover"
            src={image}
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
            w="40vw"
            h="40vw"
            objectFit="cover"
            src={image}
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

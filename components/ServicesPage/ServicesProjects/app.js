import {
  Box,
  HStack,
  Image,
  Text,
  Center,
  VStack,
  useMediaQuery
} from '@chakra-ui/react'
import { useState } from 'react';
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const App = (props) => {
  const slides = props.slides
  const [isLargerThan400] = useMediaQuery('(min-width: 480px)')

  return (
    <Center color='#000' w='90vw'>
      {isLargerThan400 ? <HStack>
        <Box  maxW="30vw">
          <Text fontSize='4xl' fontWeight='extrabold' noOfLines={2}>Recent</Text>
          <Text fontSize='4xl' fontWeight='extrabold'>Projects</Text>
          <Box h={10}></Box>
          <Text fontSize={{base: 'sm', md: 'md'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra diam quis dolor tincidunt, congue tempor urna fringilla. Maecenas tincidunt fringilla dictum. Donec commodo sed ipsum sit amet hendrerit. Phasellus mi ante, pulvinar in vestibulum nec, congue at neque.
          </Text>
        </Box>
        <Box w='5vw'></Box>
        <Box w="50vw">
          <Box mt='5vh' h='50vh'>
            <Slider>
              {slides.map((slide, index) => (
                <Image
                  borderRadius={20}
                  h='50vh'
                  key={index} // Add key prop
                  src={slide.img}
                  objectFit='cover'
                  alt={slide.description || 'Project slide'} // Add alt attribute
                />
              ))}
            </Slider>
          </Box>
        </Box>
      </HStack> : <VStack>
      <Box maxW='90vw'>
          <Text fontSize='4xl' fontWeight='extrabold' noOfLines={2} textAlign='center'>Recent Projects</Text>
          <Box h={10}></Box>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra diam quis dolor tincidunt, congue tempor urna fringilla. Maecenas tincidunt fringilla dictum. Donec commodo sed ipsum sit amet hendrerit. Phasellus mi ante, pulvinar in vestibulum nec, congue at neque.
          </Text>
        </Box>
        <Box w='5vw'></Box>
        <Box w="80vw">
          <Box mt='5vh' h='50vh'>
            <Slider>
              {slides.map((slide, index) => (
                <Image
                  borderRadius={10}
                  h='50vh'
                  key={index} // Add key prop
                  src={slide.img}
                  objectFit='cover'
                  alt={slide.description || 'Project slide'} // Add alt attribute
                />
              ))}
            </Slider>
          </Box>
        </Box>
        </VStack>}
      
    </Center>
  )
}

export default App;
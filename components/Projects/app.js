import {
    Box,
    HStack,
    Image,
    Text
  } from '@chakra-ui/react'
  import { useState } from 'react';
  import Slider from "react-slick"
  import 'slick-carousel/slick/slick.css';
  import 'slick-carousel/slick/slick-theme.css';
  
  export const App = (props) => {
    const slides = props.slides
  
    return (
      <Box color='#000'>
        <HStack>
          <Box maxW="20vw">
            <Text fontSize='4xl' fontWeight='extrabold' noOfLines={2}>Recent</Text>
            <Text fontSize='4xl' fontWeight='extrabold'>Projects</Text>
            <Box h={10}></Box>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra diam quis dolor tincidunt, congue tempor urna fringilla. Maecenas tincidunt fringilla dictum. Donec commodo sed ipsum sit amet hendrerit. Phasellus mi ante, pulvinar in vestibulum nec, congue at neque.
            </Text>
          </Box>
          <Box w='5vw'></Box>
          <Box w="40vw">
            <Box mt='5vh'>
              <Slider>
                {slides.map((slide, index) => (
                  <Image
                    key={index} // Add key prop
                    src={slide.img}
                    objectFit='cover'
                    alt={slide.description || 'Project slide'} // Add alt attribute
                  />
                ))}
              </Slider>
            </Box>
          </Box>
        </HStack>
      </Box>
    )
  }
  
  export default App;
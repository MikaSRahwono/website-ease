import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import * as React from 'react'
import * as Logos from './brands'
import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const App = () => {
  const logos = Object.values(Logos)

  // State untuk mengetahui index logo yang terpilih
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Mengatur style untuk SwiperSlide yang dipilih
  const selectedSlideStyle = {
    width: '100%',
    opacity: 1,
    transform: 'scale(5)',
    zIndex: 1,
  }

  // Mengatur style untuk SwiperSlide yang tidak dipilih
  const unselectedSlideStyle = {
    width: '5%',
    opacity: 0.1,
    transform: 'none',
  }

  const sliderSettings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 50,
    beforeChange: (current, next) => {
      setSelectedIndex(next)
    },
  }

  
  return (
    <Box bg="#F2F2F2" as="section" pt="16" pb="24">
      <Box
        maxW={{
          base: 'xl',
          md: '3xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Box textAlign="center" position="relative">
          <Heading color="#000000" size="lg" mb="4">
            <Box as="span" px="4">
              We Have Worked With
            </Box>
          </Heading>
          <Box
            position="absolute"
            left="0"
            top="50%"
            transform="translateY(-50%)"
            width={{ base: '50px', md: '150px' }}
            height="5px"
            backgroundColor="#000000"
            content=""
            display="inline-block"
          />
          <Box
            position="absolute"
            right="0"
            top="50%"
            transform="translateY(-50%)"
            width={{ base: '50px', md: '150px' }}
            height="5px"
            backgroundColor="#000000"
            content=""
            display="inline-block"
          />
        </Box>
        <Box pos="relative" w="full" h="full" pt="50px">
          <Box pos="absolute" left="50%" top="50%" transform="translate(-50%, -50%)" w="full">
            <Slider {...sliderSettings}>
              {logos.map((Logo, index) => (
                <Box
                  as="button"
                  key={Logo.name}
                  onClick={() => setSelectedIndex(index)}
                  style={index === selectedIndex ? selectedSlideStyle : unselectedSlideStyle}
                >
                  <Logo color="#000000" />
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

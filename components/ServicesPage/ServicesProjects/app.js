import {
  Box,
  HStack,
  Image,
  Text,
  Center,
  Button,
  VStack,
  useMediaQuery
} from '@chakra-ui/react'
import { useState } from 'react';
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'


export const App = (props) => {
  const slides = props.slides
  const [isLargerThan400] = useMediaQuery('(min-width: 480px)')

  const [slider, setSlider] = useState(null)

  const CustomArrow = ({ direction, onClick }) => {
    return (
      <Box
        as="button"
        onClick={onClick}
        position="absolute"
        top="50%"
        transform="translateY(-50%)"
        zIndex="1"
        bg="transparent"
        border="none"
        outline="none"
        cursor="pointer"
        left={direction === "left" ? "1px" : ""}
        right={direction === "right" ? "1px" : ""}
      >
        {direction === "left" ? (
          <ChevronLeftIcon w={6} h={6} color="black" />
        ) : (
          <ChevronRightIcon w={6} h={6} color="black" />
        )}
      </Box>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    centerMode: true, // tambahkan properti centerMode
    centerPadding: "0 10px", // tambahkan properti centerPadding
    responsive: [
      {
        breakpoint: 1446,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1148,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <Center color='#000' w='90vw'>
      {isLargerThan400 ? <HStack>
        <Box  maxW="30vw">
          <Text fontSize='4xl' fontWeight='extrabold' noOfLines={2}>Recent</Text>
          <Text fontSize='4xl' fontWeight='extrabold'>Projects</Text>
          <Box h={10}></Box>
          <Text fontSize={{base: 'sm', md: 'md'}}>
          These are a glimpse of our recent projects, where creativity and innovation have come together to deliver extraordinary results. From the moment we embark on a new venture, our passion for excellence drives us to create experiences that captivate, inspire, and leave a lasting impression.
          </Text>
          <Button mt='3vh' variant='solid' bg='#DAC17F' _hover={{bg: '#CBAD5C'}}>Lihat Project Kami!</Button>
        </Box>
        <Box w='5vw'></Box>
        <Box w="50vw">
          <Box mt='5vh' h='50vh'>
            <Slider {...settings} ref={setSlider}>
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
          These are a glimpse of our recent projects, where creativity and innovation have come together to deliver extraordinary results. From the moment we embark on a new venture, our passion for excellence drives us to create experiences that captivate, inspire, and leave a lasting impression.
          </Text>
          <Center>
            <Button mt='3vh' variant='solid' bg='#DAC17F' _hover={{bg: '#CBAD5C'}}>Lihat Project Kami!</Button>
          </Center>
        </Box>
        <Box w='5vw'></Box>
        <Box w="80vw">
          <Box mt='5vh' h='50vh'>
            <Slider {...settings} ref={setSlider} >
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

import { Box, Center, Heading, SimpleGrid, SlideFade } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { zoom } from './_data'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import { Testimonial } from './testimonial'
import { useInView } from 'react-intersection-observer'

export const App = () => {

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
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
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
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 1148,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  const [ref2, inViewport2] = useInView({rootMargin: '-50%'});
  const [ref, inViewport] = useInView({rootMargin: '-50px'});


  return (
    <Box w='full' mt='10vh'>
      <SlideFade in={inViewport}>
        <Center ref={ref} mb='6vh'>
            <Heading color='black'>
                Apa Kata Mereka?
            </Heading>
        </Center>
      </SlideFade>
      <SlideFade in={inViewport2}>
        <Box ref={ref2} w='full'>
          <Slider {...settings} ref={setSlider}>
          {zoom.map((data, index) => (
              <Testimonial key={index} {...data} />
            ))}
          </Slider>
        </Box>
      </SlideFade>
    </Box>
  );
};
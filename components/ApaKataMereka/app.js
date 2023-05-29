import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { apakatamerekaCardsData } from './_data'
import { Testimonial } from '../ServicesPage/Testimoni/testimonial'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

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
        border="none"
        outline="none"
        cursor="pointer"
        left={direction === "left" ? { base: "1", md: "1" } : ""}
        right={direction === "right" ? { base: "1", md: "1" } : ""}
      >
        {direction === 'left' ? (
          <ChevronLeftIcon boxSize={6} color={'white'} bgColor={'#000'} borderRadius={'full'} /> // Increase the boxSize value for a larger icon
        ) : (
          <ChevronRightIcon boxSize={6} color={'white'} bgColor={'#000'} borderRadius={'full'} /> // Increase the boxSize value for a larger icon
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


  return (
    <Box mx={['10px', '10px', '90px']} pb='20vh'>
      <Heading color='#000' textAlign={['left']} pl='15' as='h1' size='2xl' pb='5vh' variant='page-title' position="relative">
        Apa Kata Mereka?
      </Heading>
        <Box>
          <Slider {...settings} ref={setSlider}>
          {apakatamerekaCardsData.map((data, index) => (
              <Testimonial key={index} {...data} />
            ))}
          </Slider>
        </Box>
    </Box>
  );
};
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HistoryCards } from './cards'
import { historyCardsData } from './_data'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import { PrevArrow, NextArrow } from 'react-slick'

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
          slidesToShow: 1,
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
    <Box mx={['10px', '10px', '280px']} pb='9vh'>
      <Heading textAlign={['left']} pl='15' as='h1' size='2xl' pb='5vh' variant='page-title' position="relative">
        Our History
        <Box
          position="absolute"
          top="35%"
          left="300px"
          transform="translateY(-50%)"
          w="300px"
          h="3px"
          bg="black"
          fontWeight="bold"
          
        />
      </Heading>
        <Box>
          <Slider {...settings} ref={setSlider}>
          {historyCardsData.map((data, index) => (
              <HistoryCards key={index} {...data} />
            ))}
          </Slider>
        </Box>
    </Box>
  );
};

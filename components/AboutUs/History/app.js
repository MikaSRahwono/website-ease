import { Box, Container, Divider, HStack, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { DetailModal, HistoryCards } from './cards'
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
        bg='blackAlpha.300'
        border="none"
        outline="none"
        cursor="pointer"
        left={direction === "left" ? "1px" : ""}
        right={direction === "right" ? "1px" : ""}
        borderRadius='full'
      >
        {direction === "left" ? (
          <ChevronLeftIcon w={6} h={6}  color="black" />
        ) : (
          <ChevronRightIcon w={6} h={6} color="black" />
        )}
      </Box>
    );
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
  
    responsive: [
      {
        breakpoint: 1446,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 1148,
        settings: {
          slidesToShow: 3,
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

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };
  


  return (
    <Container pb='9vh' minW='80vw' pt='25vh'>
      <Box pb='5vh'>
        <Heading  textAlign={['left']} fontSize='6xl' pb='1vh' variant='page-title' position="relative">
          Our History
        </Heading>
        <Divider borderColor='grey' w='100%'></Divider>
      </Box>
        <Box>
          <Slider {...settings} ref={setSlider}>
            {historyCardsData.map((data, index) => (
                <HistoryCards key={index} data={data} onClick={handleItemClick} />
              ))}
          </Slider>
          {selectedItem && (
              <DetailModal item={selectedItem} onClose={handleCloseModal}></DetailModal>
            )}
        </Box>
    </Container>
  );
};

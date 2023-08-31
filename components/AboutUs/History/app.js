import { Box, Center, Container, Divider, HStack, Heading, SimpleGrid, SlideFade, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { DetailModal, HistoryCards } from './cards'
import { historyCardsData } from './_data'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import { PrevArrow, NextArrow } from 'react-slick'
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

  const [isLargerThan400] = useMediaQuery('(min-width: 480px)')
  const [ref, inViewport] = useInView({rootMargin: '-150px'});
  const [ref2, inViewport2] = useInView({rootMargin: '-150px'});


  return (
    <Container pb='9vh' minW='80vw' pt={isLargerThan400 ? "25vh" : "10vh"}>
      {isLargerThan400 ? 
      <Box pb='5vh'>
        <SlideFade in={inViewport}>
          <Heading ref={ref} textAlign={['left']} fontSize='6xl' pb='1vh' variant='page-title' position="relative">
            Our History
          </Heading>
        </SlideFade>
        <Divider borderColor='grey' w='100%'></Divider>
      </Box> : 
      <Box>
        <Center>
          <SlideFade in={inViewport}>
            <Heading  textAlign={['left']} fontSize='6xl' pb='1vh' variant='page-title' position="relative">
              Our History
            </Heading>
          </SlideFade>
        </Center>
      </Box>
    }
        <SlideFade in={inViewport2}>
          <Box ref={ref2}>
            <Slider {...settings} ref={setSlider}>
              {historyCardsData.map((data, index) => (
                  <HistoryCards key={index} data={data} onClick={handleItemClick} />
                ))}
            </Slider>
            {selectedItem && (
                <DetailModal item={selectedItem} onClose={handleCloseModal}></DetailModal>
              )}
          </Box>
        </SlideFade>
    </Container>
  );
};

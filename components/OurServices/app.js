import React, { useState, useRef } from "react";
import { Box, VStack, HStack, Image, Heading, Text, Button, Container, Center } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./arrow.module.css";

export const App = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    initialSlide: sliderIndex,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setSliderIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderContent = [
    {
      image: "img/iconservice/zoomlogo1.png",
      title: "Zoom",
      description: "Renting Zoom Pro and Zoom Webinar for everyone. Now, scheduling your zoom meeting is easier with us. ",
    },
    {
      image: "img/iconservice/studiologo1.png",
      title: "Studio",
      description: "Maximizing your visual and media to enhance your brand identity with us. We help you to create creative product photography, videography, and campaigns.",
    },
    {
      image: "img/iconservice/livelogo1.png",
      title: "Creative",
      description: "Helping you stream your events using advanced equipment and our best crews.",
    },
  ];

  const handleClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <Box fontFamily={'Montserrat'} alignContent={'center'} alignItems={'center'} color="#000" bgColor="white">
      <Heading as="h2" size="2xl" textAlign="center" mt={10} mb={5} fontWeight={'bold'}>Our Services</Heading>
      <Center>
        <HStack mb='10px' spacing={10} mt={2}>
          <Button bgColor={sliderIndex === 0 ? '#DAC17E' : '#f2f2f2'} borderRadius={50} onClick={() => handleClick(0)}>Zoom</Button>
          <Button bgColor={sliderIndex === 1 ? '#DAC17E' : '#f2f2f2'} borderRadius={50} onClick={() => handleClick(1)}>Studio</Button>
          <Button bgColor={sliderIndex === 2 ? '#DAC17E' : '#f2f2f2'} borderRadius={50} onClick={() => handleClick(2)}>Creative</Button>
        </HStack>
      </Center>
      <Center>
      <Box bgColor="#DAC17E" maxW="full" py={10} px={{lg:'20vw', sm:'10'}}>
        <Slider {...settings} ref={sliderRef}>
          {sliderContent.map((slide, index) => (
            <VStack key={index} alignItems="stretch" spacing={4}>
              <HStack spacing={4}>
                <Image
                  boxSize='sm'
                  src={slide.image}
                  alt={slide.title}
                  borderRadius="md"
                  w={{lg:'30%', sm:'40%'}}
                  h='auto'
                  objectFit="cover"
                />
                <VStack alignItems="start" spacing={2}>
                  <Heading as="h3" size="lg">
                    {slide.title}
                  </Heading>
                  <Text fontSize={{lg:'1vw'}} fontWeight={'semibold'}>{slide.description}</Text>
                  <Button colorScheme="teal">Lihat Selengkapnya</Button>
                </VStack>
              </HStack>
            </VStack>
          ))}
        </Slider>
      </Box>
      </Center>
    </Box>
  );
};
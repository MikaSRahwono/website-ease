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
import { motion } from "framer-motion";


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
        left={direction === "left" ? { base: "2vw", md: "2vw", sm: "" } : ""}
        right={direction === "right" ? { base: "2vw", md: "2vw", sm: "" } : ""}
      >
        {direction === "left" ? (
          <ChevronLeftIcon w={7} h={7} color="white" bgColor={"#000"} borderRadius={"full"} />
        ) : (
          <ChevronRightIcon w={7} h={7} color="white" bgColor={"#000"} borderRadius={"full"} />
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });


  return (
    <Box w='full' mt='10vh'>
      <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >   
        <Center ref={ref} mb='6vh'>
            <Heading color='black'>
                Apa Kata Mereka?
            </Heading>
        </Center>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >   
        <Box ref={ref2} w='full'>
          <Slider {...settings} ref={setSlider}>
          {zoom.map((data, index) => (
              <Testimonial key={index} {...data} />
            ))}
          </Slider>
        </Box>
      </motion.div>
    </Box>
  );
};
import React from "react";
import { Box, VStack, HStack, Image, Heading, Text, Button, Container } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./arrow.module.css"; // Import custom CSS

export const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderContent = [
    {
      image: "/path/to/image1.jpg",
      title: "Judul 1",
      description: "Deskripsi tentang card ini.",
    },
    {
      image: "/path/to/image2.jpg",
      title: "Judul 2",
      description: "Deskripsi tentang card ini.",
    },
    // Tambahkan konten lainnya di sini
  ];

  return (
    <Box color='#000' bgColor='white'>
      <Container w='30vw'>
        <Slider {...settings}>
          {sliderContent.map((slide, index) => (
            <VStack key={index} alignItems="stretch" spacing={4}>
              <HStack spacing={4}>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  borderRadius="md"
                  w={["100%", "40%"]}
                  h="auto"
                  objectFit="cover"
                />
                <VStack alignItems="start" spacing={2}>
                  <Heading as="h3" size="lg">
                    {slide.title}
                  </Heading>
                  <Text>{slide.description}</Text>
                  <Button colorScheme="teal">Lihat Selengkapnya</Button>
                </VStack>
              </HStack>
            </VStack>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

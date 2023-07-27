import { Box, Text, Heading, Center, VStack, Button, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { slides } from "./_data";

const Portofolio = (props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    arrows: false,
  };

  return (
    <Box pt={{ base: "5vh", lg: "10vh" }}>
      <VStack spacing={{ base: "5vw", lg: "3vw" }}>
        <Heading
          fontFamily="Aileron"
          fontSize={{ base: "2xl", md: "3xl" }}
          w={{ base: "80vw", md: "50vw" }}
          textAlign="center"
        >
          Portofolio Kami
        </Heading>
      </VStack>
      <Box w={{base:"", lg:"25vw"}} mx="auto" mt="5">
        <Slider rounded="md" {...settings}>
          {slides.map((slide) => (
            <Image
              key={slide.key}
              alt="easeyourneeds"
              src={slide.image}
              boxSize="100%"
              mx="auto"
              rounded="md"
              boxShadow="lg"
              objectFit="contain"
            />
          ))}
        </Slider>
      </Box>
      <Center>
      <Box pt="4rem">
          <Button 
          color="#000"
          bgColor={"black"}
          rounded={'full'}
          onClick={() => window.open('projects/studio')}
          _hover={{ bgColor: '#DAC17E' }}
          boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2)">
              <Text fontSize={{ base: "sm", md: "xl" }} color="white" textAlign="center">
                Lihat selengkapnya
              </Text>
          </Button>
        </Box>
      </Center>
    </Box>
  );
};

export default Portofolio;

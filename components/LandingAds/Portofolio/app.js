import { Box, Text, Heading, Center, VStack, Button, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Portofolio = (props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false,
  };

  const slides = [
    {
      key: 1,
      image: 'https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Fads1%2Fportofolio%2FOMG-all-produk-v2-revisi-2.jpg?alt=media&token=f750abe1-6fa6-4732-8fb0-ff407b787a27',
    },
    {
      key: 2,
      image: 'https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Fads1%2Fportofolio%2FDSC04839.jpg?alt=media&token=fc2c7cbb-6142-44fe-8ed5-00f8938f99a8',
    },
    {
      key: 3,
      image: 'https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Fads1%2Fportofolio%2FDSC08354.jpg?alt=media&token=7ea8b175-6c99-43eb-a084-76874fbce0e7',
    },
  ];

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
          onClick={() => window.open(slide.link)}
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

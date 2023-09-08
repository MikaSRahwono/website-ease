import { Box, Center, Container, Heading, SimpleGrid, Slide, SlideFade, Text, useColorModeValue as mode, useMediaQuery } from '@chakra-ui/react'
import * as React from 'react'
import { DurationSwitcher } from './durationSwitcher'
import { PricingCard } from './pricingCard'
import Slider from 'react-slick'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import { useInView } from 'react-intersection-observer'
import { motion } from "framer-motion";


export const App = ({description, datas, column}) => {
  const [isLargerThan400] = useMediaQuery('(min-width: 770px)')
  const [slider, setSlider] = React.useState(null)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

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
    <Box as="section" py="20">
      <Box
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >     
          <Heading
            ref={ref}
            as="h1"
            size="2xl"
            fontWeight="extrabold"
            textAlign="center"
            color='#2f2f2f'
          >
            Harga dan Paket
          </Heading>
        <Box h={{base: '14vh', md: '11vh', lg:'9vh'}} pl={5} pr={5} bg='white' mt='4vh' boxShadow='md' borderRadius={15}>
          <Center h={{base: '14vh', md: '11vh',lg:'9vh'}}>
            <Text fontSize={{base: 'sm', sm:'md', md: 'lg'}} textAlign='center' color='black'>{description}</Text>
          </Center>
        </Box>
        </motion.div>

        {isLargerThan400 ? 
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >     
          <SimpleGrid
            ref={ref2}
            alignItems="flex-start"
            mt={{
              base: '5',
              lg: '3vh',
            }}
            columns={{
              base: 1,
              md: column,
            }}
            spacing={{
              base: '12',
              md: '1vw',
            }}
          >
            {datas.map((data, index) => (
                <PricingCard
                  
                  key={index}
                  name={data.name}
                  description={data.desc}
                  price={data.price}
                  features={data.features}
                />
        ))} 
          </SimpleGrid> 
        </motion.div>
        : <Center><Box w={{base:'full', sm: '55vw'}} h='full' mt='5vh'>
          <Slider {...settings} ref={setSlider}>
          {datas.map((data, index) => (
          <PricingCard
            key={index}
            name={data.name}
            description={data.desc}
            price={data.price}
            features={data.features}
          />
        ))}
          
          </Slider>
        </Box></Center>}
      </Box>
    </Box>
  )
}

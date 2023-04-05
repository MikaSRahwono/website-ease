import React, { useState, useEffect } from 'react';
import { SimpleGrid, IconButton, Box, Heading, Text, useColorModeValue as mode } from '@chakra-ui/react';
import { ServicesCard } from './servicesCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import 'react-multi-carousel/lib/styles.css';
import { serviceCardsData } from './_data';

export const App = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + serviceCardsData.length) % serviceCardsData.length);
  };

  const next = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % serviceCardsData.length);
  };

  // Set up an interval to call the `next` function every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, []);


  return (
    <Box as="section" py="10">
      <Box
        maxW={{
          base: 'xl',
          md: '6xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Heading
          as='h1'
          size='2xl'
          fontFamily={'Montserrat'}
          fontWeight='extrabold'
          textAlign={{
            sm: 'center',
          }}
          color='#DAC17E'
        >
          Why Us?
        </Heading>

        <Box mt={10} position="relative">
          <SimpleGrid
            alignItems="flex-start"
            mt={{
              base: '10',
              lg: '24',
            }}
            columns={{
              base: 1,
              lg: 3,
            }}
            spacing={{
              base: '12',
              lg: '8',
            }}
          >
                <ServicesCard
                  scale={0.8}
                  img={serviceCardsData[activeIndex].img}
                  name={serviceCardsData[activeIndex].name}
                  description={serviceCardsData[activeIndex].description}
                />
                <ServicesCard
                  scale={1}
                  img={serviceCardsData[(activeIndex + 1) % serviceCardsData.length].img}
                  name={serviceCardsData[(activeIndex + 1) % serviceCardsData.length].name}
                  description={serviceCardsData[(activeIndex + 1) % serviceCardsData.length].description}
                />
                <ServicesCard
                  scale={0.8}
                  img={serviceCardsData[(activeIndex + 2) % serviceCardsData.length].img}
                  name={serviceCardsData[(activeIndex + 2) % serviceCardsData.length].name}
                  description={serviceCardsData[(activeIndex + 2) % serviceCardsData.length].description}
                />
              </SimpleGrid>
              <IconButton
                aria-label="Previous"
                icon={<ChevronLeftIcon />}
                onClick={prev}
                display={{ base: 'none', sm: 'block' }}
                position="absolute"
                left="0"
                top="50%"
                transform="translateY(-50%)"
                zIndex="1"
              />
              <IconButton
                aria-label="Next"
                icon={<ChevronRightIcon />}
                onClick={next}
                display={{ base: 'none', sm: 'block' }}
                position="absolute"
                right="0"
                top="50%"
                transform="translateY(-50%)"
                zIndex="1"
              />
        </Box>
      </Box>
    </Box>
  );
};
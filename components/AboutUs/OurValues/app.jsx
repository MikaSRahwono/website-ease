import React from 'react';
import { SimpleGrid, Box, Heading, Text, useColorModeValue as mode, useMediaQuery, Center, Container, SlideFade } from '@chakra-ui/react';
import { OurValuesCards } from './cards';
import 'react-multi-carousel/lib/styles.css';
import { ourValuesCardsData, ourValuesCardsDatamd1, ourValuesCardsDatamd2 } from './_data';
import { useInView } from 'react-intersection-observer';

export const App = () => {
  const [isLargerThan400] = useMediaQuery('(min-width: 540px)')
  const [isLargerThan992] = useMediaQuery('(min-width: 990px)')

  const [ref, inViewport] = useInView({rootMargin: '-25%'});
  const [ref2, inViewport2] = useInView({rootMargin: '-25%'});

  return (
    <Box     
        backgroundImage={'img/black-1.png'}
        backgroundSize='cover'
        as="section"
        pb='15vh'>
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          base: '4',
          md: '8',
        }}
      >
        {isLargerThan400 ?
        <SlideFade in={inViewport}>
         <Heading
         ref={ref}
         as='h1'
         size='2xl'
         fontFamily={'Aileron'}
         fontWeight='extrabold'
         textAlign={{
           sm: 'center',
         }}
         color='#DAC17E'
         pt='9vh'
       >
         Our Values
       </Heading>
       </SlideFade>
        : 
        <SlideFade in={inViewport}>
        <Heading
        ref={ref}
        as='h1'
        size='2xl'
        fontFamily={'Aileron'}
        fontWeight='extrabold'
        textAlign={{
          base: 'center',
        }}
        color='#DAC17E'
        pt='9vh'
      >
        Our Values
      </Heading>
      </SlideFade>
      }
       
        <SlideFade in={inViewport2}>
        <Box position="relative" ref={ref2}>
          {isLargerThan400 ? 
          isLargerThan992 ?
          <SimpleGrid
          alignItems="center"
          mt={{
            base: '10',
            lg: '24',
          }}
          columns={{
            lg: 3,
          }}
          spacing={{
            base: '8',
            md: '10',
            lg: '8',
          }}
        >
          {ourValuesCardsData.map((data, index) => (
            <OurValuesCards key={index} {...data} />
          ))}
        </SimpleGrid>
             :
             <Box>
              <SimpleGrid
              alignItems="center"
              mt={{
                base: '10',
                lg: '24',
              }}
              columns={{
                base: 2,
              }}
              spacing={{
                base: '10',
                md: '10',
                lg: '8',
              }}
            >
              {ourValuesCardsDatamd1.map((data, index) => (
                <OurValuesCards key={index} {...data} />
              ))}
            </SimpleGrid>
              <Container w='50vw'>
                <Center
                  alignItems="center"
                  mt='3vh'

                >
                  {ourValuesCardsDatamd2.map((data, index) => (
                    <OurValuesCards key={index} {...data} />
                  ))}
                </Center>
              </Container>
            </Box>
           : 
        <SimpleGrid
        alignItems="center"
        mt={{
          base: '10',
          lg: '24',
        }}
        columns={{
          base: 1,
          lg: 3,
        }}
        spacing={{
          base: '8',
          md: '10',
          lg: '8',
        }}
      >
        {ourValuesCardsData.map((data, index) => (
          <OurValuesCards key={index} {...data} />
        ))}
      </SimpleGrid>}
      </Box>
      </SlideFade>
      </Box>
    </Box>
  );
};

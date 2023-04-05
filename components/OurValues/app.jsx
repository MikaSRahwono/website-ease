import React from 'react';
import { SimpleGrid, Box, Heading, Text, useColorModeValue as mode } from '@chakra-ui/react';
import { OurValuesCards } from './cards';
import 'react-multi-carousel/lib/styles.css';
import { ourValuesCardsData } from './_data';

export const App = () => {

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
          pt='9vh'
        >
          Our Values
        </Heading>

        <Box position="relative">
          <SimpleGrid
            alignItems="center"
            mt={{
              base: '10',
              lg: '24',
            }}
            columns={{
              base: 1,
              md: 2,
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
        </Box>
      </Box>
    </Box>
  );
};

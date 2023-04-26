import { Box, Center, Container, Heading, SimpleGrid, Text, useColorModeValue as mode, useMediaQuery } from '@chakra-ui/react'
import * as React from 'react'
import { DurationSwitcher } from './durationSwitcher'
import { PricingCard } from './pricingCard'
import Slider from 'react-slick'

export const App = ({description, datas, column}) => {
  const [isLargerThan400] = useMediaQuery('(min-width: 480px)')
  return (
    <Box as="section" py="20">
      <Box
        maxH={{
          base: '100vh',
          md: '85vh'
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Heading
          as="h1"
          size="2xl"
          fontWeight="extrabold"
          textAlign="center"
          color='#2f2f2f'
        >
          Harga dan Paket
        </Heading>
        <Box h={{base: '12vh', md: '8vh',}} pl={5} pr={5} bg='white' mt='4vh' boxShadow='md' borderRadius={15}>
          <Center h={{base: '12vh', md: '8vh',}}>
            <Text fontSize={{base: 'sm'}} textAlign='center' color='#2f2f2f'>{description}</Text>
          </Center>
        </Box>
        <SimpleGrid
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
          {datas.map(data => (
          <PricingCard
            name={data.name}
            description={data.desc}
            price={data.price}
            features={data.features}
          />
          ))}
          
        </SimpleGrid>
      </Box>
    </Box>
  )
}

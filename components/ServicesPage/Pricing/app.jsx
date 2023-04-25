import { Box, Center, Container, Heading, SimpleGrid, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { DurationSwitcher } from './durationSwitcher'
import { PricingCard } from './pricingCard'

export const App = ({description, datas, column}) => {
  return (
    <Box as="section" py="20">
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
          as="h1"
          size="2xl"
          fontWeight="extrabold"
          textAlign={{
            sm: 'center',
          }}
          color='#2f2f2f'
        >
          Harga dan Paket
        </Heading>
        <Box h='10vh' bg='white' mt='8vh' boxShadow='md' borderRadius={15}>
          <Center h='10vh'>
            <Text textAlign='center' color='#2f2f2f' size='lg'>{description}</Text>
          </Center>
        </Box>
        <SimpleGrid
          alignItems="flex-start"
          mt={{
            base: '10',
            lg: '3vh',
          }}
          columns={{
            base: 1,
            lg: column,
          }}
          spacing={{
            base: '12',
            lg: '8',
          }}
        >
          {datas.map(data => (
            <PricingCard
              key={data.id}
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

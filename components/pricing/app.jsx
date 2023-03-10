import { Box, Heading, SimpleGrid, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { DurationSwitcher } from './durationSwitcher'
import { PricingCard } from './pricingCard'

export const App = () => {
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
        >
          Pricing
        </Heading>
        <Text
          mt="4"
          maxW="xl"
          mx="auto"
          fontSize="xl"
          color={mode('gray.600', 'gray.400')}
          textAlign={{
            sm: 'center',
          }}
        >
          Ayooo kita aksndasidjwiaksdmk asidaoskdoako asodkasodk askdoksaok
        </Text>
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
          <PricingCard
            name="Biasa"
            description="Job board for hiring designers and creative professionals."
            price={2000000}
            features={[
              'Sapiente libero doloribus modi',
              'Vel ipsa esse repudiandae',
              'Itaque cupiditate adipisci',
            ]}
          />
          <PricingCard
            popular
            name="SUPEERRR"
            description="Our premium search allows you to quickly find the perfect designer."
            price={2000000}
            features={[
              'Duis aute irure dolor repreht',
              'Excepteur sint occa cupidatat',
              'Vel ipsa esse andae excepturi',
              'Itaque cupiditate adipisci quim',
            ]}
          />
          <PricingCard
            name="MEGAAA"
            description="Combine the power of search with the job board at a discounted rate."
            price={2000000}
            features={[
              'Duis aute irure dolor',
              'Excepteur sint occaecat',
              'Vel ipsa esse repudiandae',
            ]}
          />
        </SimpleGrid>
      </Box>
    </Box>
  )
}

import { Box, Divider, HStack, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { Member } from './member'
import { members } from './_data'

export const App = () => {
  return (
    <Box as="section" pt='10vh' px='5vw' >
      <HStack alignItems='start'>
        <Box
          w='35vw'
          px={{
            base: '6',
            md: '8',
          }}
          py={{
            base: '12',
            md: '20',
          }}
        >
          <Heading
            size="2xl"
            letterSpacing="tight"
            mb="5"
            fontWeight="extrabold"
            color='#DAC17E'
            >
            Meet our team
          </Heading>
          <Text
            fontSize="lg"
            maxW="2xl"
            color='black'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </Text>
        </Box>
        <Box mr='7vw'>
          <SimpleGrid
            columns={{
              base: 1,
              md: 3,
              lg: 4,
            }}
            spacingX="6"
            spacingY="2"
          >
              {members.map((member, idx) => (
                <Member key={idx} image={member.image} role={member.role} name={member.name} twitter="#" linkedIn="#">
                  {member.description}
                </Member>
              ))}
          </SimpleGrid>
        </Box>
      </HStack>

    </Box>
  )
}

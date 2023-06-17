import { Box, Divider, VStack, HStack, Heading, SimpleGrid, Text, useColorModeValue, useMediaQuery } from '@chakra-ui/react'
import * as React from 'react'
import { Member } from './member'
import { members } from './_data'

export const App = () => {
  const [isLargerThan400] = useMediaQuery('(min-width: 480px)')

  return (
    <Box as="section" pt='10vh' px='5vw' pb={{base: "10vh"}}>
      {isLargerThan400 ? 
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
      : <VStack>
        <Box
              w='80vw'
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
                textAlign='center'
                >
                Meet our team
              </Heading>
            </Box>
            <Box mr='7vw'>
              <SimpleGrid
                columns={{
                  base: 2,
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
        </VStack>}
    </Box>
  )
}

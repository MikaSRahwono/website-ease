import { Box, Divider, VStack, HStack, Heading, SimpleGrid, Text, useColorModeValue, useMediaQuery, SlideFade } from '@chakra-ui/react'
import * as React from 'react'
import { Member } from './member'
import { members } from './_data'
import { useInView } from 'react-intersection-observer'

export const App = () => {
  const [isLargerThan400] = useMediaQuery('(min-width: 900px)')

  const [ref, inViewport] = useInView({rootMargin: '-35%'});
  const [ref2, inViewport2] = useInView({rootMargin: '-40%'});

  return (
    <Box as="section" pt='10vh' px='5vw' pb={{base: "10vh"}}>
      {/* {isLargerThan400 ? 
          <HStack alignItems='start'>
            <SlideFade in={inViewport}>
              <Box 
              ref={ref}
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
              </Box>
            </SlideFade>
              <Box ref={ref2} mr='7vw'>
              <SlideFade in={inViewport2}>
                <SimpleGrid
                  columns={{
                    base: 1,
                    sm: 2,
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
                </SlideFade>
              </Box>
          </HStack>
      :  */}
      <VStack>
        <Box
              w='100%'
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
            <Box>
              <SimpleGrid
                columns={{
                  base: 2,
                  sm: 3,
                  md: 4,
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
        </VStack>
    </Box>
  )
}

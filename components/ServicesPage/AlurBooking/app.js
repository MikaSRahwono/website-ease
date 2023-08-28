import { 
    Flex,
    Box,
    Text,
    Image,
    Button,
    VStack,
    Container,
    Center,
    HStack,
    Heading,
    useMediaQuery,
    SlideFade
 } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

export const App = ({datas}) => {
  const [isLargerThan400] = useMediaQuery('(min-width: 480px)')

  var data1 = []
  var data2 = []

  if (datas.length > 4) {
    data1 = datas.slice(0,3)
    data2 = datas.slice(3,6)
  }
  const [ref, inViewport] = useInView({rootMargin: '-200px'});
  const [ref2, inViewport2] = useInView({rootMargin: '-200px'});


  return (
    <Center h={{base: 'auto', md: datas.length > 4 ? '70vh' : '50vh', lg: datas.length > 4 ? '85vh' : '70vh'}} py={{base: '5vh', md: '0'}} bg='white' w='full' borderRadius={30} color='#2f2f2f'>
      {isLargerThan400 ? <VStack spacing={15}>
        <SlideFade in={inViewport}>
          <Heading mt={{md: '1vh', lg:'0'}} ref={ref} mb='5vh'>Alur Pemesanan</Heading>
        </SlideFade>

        {datas.length > 4 ? 
        <SlideFade in={inViewport2}>
          <VStack ref={ref2} spacing='2vh'>
            <HStack spacing='sp'>
              {data1.map((data, index) => (
              <VStack key={index} w='28vw'>
                <Image w='10vw' src={data.icon} alt="easeyourneeds" mb='1vh'></Image>
                <Text w='20vw' textAlign='center' fontSize={{base: 'md', md: 'lg',lg: 'xl'}} fontWeight='bold'>{data.title}</Text>
              </VStack>
            ))}
            </HStack>
            <HStack>
              {data2.map((data, index) => (
              <VStack key={index} w='28vw'>
                <Image w='10vw' src={data.icon} alt="easeyourneeds" mb='1vh'></Image>
                <Text w='20vw'  textAlign='center' fontSize={{base: 'md', md: 'lg', lg: 'xl'}} fontWeight='bold'>{data.title}</Text>
              </VStack>
            ))}
            </HStack>
          </VStack>
        </SlideFade>
         :<HStack spacing={7} p='2vw'>
            {datas.map((data, index) => (
              <VStack key={index} w='20vw'>
                <Image w='10vw' src={data.icon} alt="easeyourneeds" mb='3vh'></Image>
                <Text w='20vw' textAlign='center' fontSize={{base: 'md', md: 'xl'}} fontWeight='bold' >{data.title}</Text>
              </VStack>
            ))}
        </HStack>
        }
        
      </VStack> : <VStack>
      <Heading  mb='1vh'>Alur Pemesanan</Heading>
        <VStack spacing={7} p='2vw'>
            {datas.map((data, index) => (
              <VStack key={index}>
                <Image w='28vw' src={data.icon} alt="easeyourneeds" mb='1vh'></Image>
                <Text w='60vw' textAlign='center' fontSize={{base: 'md', md: 'md', lg: 'lg'}} fontWeight='bold' >{data.title}</Text>
              </VStack>
            ))}
        </VStack>
      </VStack>}
      
    </Center>
  )
}
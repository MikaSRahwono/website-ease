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
    useMediaQuery
 } from "@chakra-ui/react";

export const App = ({datas}) => {
  const [isLargerThan400] = useMediaQuery('(min-width: 480px)')

  var data1 = []
  var data2 = []

  if (datas.length > 4) {
    data1 = datas.slice(0,3)
    data2 = datas.slice(3,6)
  }

  return (
    <Center h={{base: '90vh', md: '85vh'}} bg='white' w='full' borderRadius={30} color='#2f2f2f' mb='10vh'>
      {isLargerThan400 ? <VStack spacing={15}>
        <Heading mb='5vh'>Alur Pemesanan</Heading>
        {datas.length > 4 ? 
        <VStack spacing='2vh'>
          <HStack spacing='sp'>
            {data1.map(data => (
            <VStack w='28vw'>
              <Image w='12vw' src={data.icon} mb='1vh'></Image>
              <Text textAlign='center' fontSize={{base: 'md', md: 'xl'}} fontWeight='bold' >{data.title}</Text>
            </VStack>
          ))}
          </HStack>
          <HStack>
            {data2.map(data => (
            <VStack w='28vw'>
              <Image w='12vw' src={data.icon} mb='1vh'></Image>
              <Text textAlign='center' fontSize={{base: 'md', md: 'xl'}} fontWeight='bold' >{data.title}</Text>
            </VStack>
          ))}
          </HStack>
        </VStack> :<HStack spacing={7} p='2vw'>
            {datas.map(data => (
              <VStack>
                <Image w='15vw' src={data.icon} mb='3vh'></Image>
                <Text textAlign='center' fontSize='lg' fontWeight='bold' >{data.title}</Text>
              </VStack>
            ))}
        </HStack>
        }
        
      </VStack> : <VStack>
      <Heading mb='1vh'>Alur Pemesanan</Heading>
        <VStack spacing={7} p='2vw'>
            {datas.map(data => (
              <VStack>
                <Image w='15vw' src={data.icon} mb='1vh'></Image>
                <Text textAlign='center' fontSize={{base: 'md', md: 'lg'}} fontWeight='bold' >{data.title}</Text>
              </VStack>
            ))}
        </VStack>
      </VStack>}
      
    </Center>
  )
}
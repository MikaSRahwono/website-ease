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
  Heading
} from "@chakra-ui/react";

export const App = ({datas}) => {

return (
  <Center h='70vh' bg='white' w='full' borderRadius={30} color='#2f2f2f' mb='10vh'>
    <VStack spacing={15}>
      <Heading mb='5vh'>Alur Pemesanan</Heading>
      <HStack spacing={7} p='2vw'>
          {datas.map(data => (
            <VStack key={data.id}>
              <Image w='15vw' src={data.icon} mb='3vh' alt={data.title} />
              <Text textAlign='center' fontSize='lg' fontWeight='bold' >{data.title}</Text>
            </VStack>
          ))}
      </HStack>
    </VStack>
  </Center>
)
}

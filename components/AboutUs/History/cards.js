import { 
  Center, 
  Flex,
  Box,
  Image,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Text,
  IconButton,
  HStack, } from '@chakra-ui/react'

const HistoryWrapper = (props) => {
  const { ...rest } = props

  return (
    <Box 
      w="100%"
      minH={['250px', '250px', '300px']}
      mx="auto"
      pb="8"
      position="relative"
      {...rest}
    />
  )
}

export const HistoryCards = ({data, onClick}) => {
  
  return (
    <Center onClick={() => onClick(data)}>
    <Box w="70%" maxW="xl" m='2.5vw' _hover={{ transform: "scale(1.05)" }} transition="transform 0.2s">
      <HistoryWrapper>

        <Center>
          <Image onClick={() => onClick(data)} src={data.img} alt={data.title} w="100%" h="35vh" objectFit="cover" />
        </Center>
        <Text fontSize='sm' mt='0.5vh' fontWeight="bold">{data.tanggal}</Text>

        <Flex direction="column" justify="left" mt={4} textAlign="justify">
          <Text  color={'#000'} fontFamily='Montserrat' fontSize="xl" fontWeight="bold">
            {data.title}
          </Text>
          <Text 
          overflow='hidden'
          fontSize='sm' mt={2} color={'#000'} maxW="20rem" mx={['2', '2', 'auto']}>
            {data.singkat}
          </Text>
          <Text cursor='pointer' onClick={() => onClick(data)} color={'#3366CC'} fontSize='smaller'>Read More</Text>
        </Flex>

      </HistoryWrapper>
    </Box>
    </Center>
  )
}

export const DetailModal = ({ item, onClose }) => {

  return (
    <Modal isOpen={true} onClose={onClose} size='5xl'>
      <ModalOverlay />
      <ModalContent bgColor='white' color='black'>
        <ModalBody >
          <HStack h='60vh' alignItems='start' pt='10vh'>
            <Center w='40vw'>
              <Image
                maxH='50vh'
                maxW='40vw'
                src={item.img}
                alt={`Picture of ${item.name}`}
                rounded="lg"
                mr="4"
              />
            </Center>
            <Box>
              <Text fontWeight="bold" fontSize='4xl' mb='3vh'>{item.title}</Text>
              <Text fontWeight='bold' mb='1vh' fontSize='xl'> | {item.tanggal}</Text>
              <Text mb="2" fontSize={{sm: 'sm', base:'sm', lg:'lg'}}>{item.desc}</Text>
            </Box>
          </HStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

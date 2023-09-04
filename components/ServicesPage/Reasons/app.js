import { 
    Box,
    Text,
    VStack,
    HStack,
    UnorderedList,
    ListItem,
    useMediaQuery,
    Center,
    SlideFade,
    OrderedList
 } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function Selector(service, isLargerThan400, heading, lists) {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  if(service == "creative") {
    if(isLargerThan400) {
      return (
      <HStack align='top' alignItems='center' spacing='3vw'>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >          
          <VStack ref={ref} align={{base: 'left', md: 'left'}} spacing={10} ml='7vw' w='30vw' p='4vw'>
              <Text fontSize={{base: '10vw', sm: '4.2vw', md: '4vw', lg: '3.2vw'}} fontWeight="bold">
                {heading}
              </Text>
          </VStack>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >      
          <VStack >
            <Box ref={ref2} px='8vw' pt='5vw' pb='5vw' bgImage='/img/reasons-bg/circle.png' bgPos='center' bgSize='50vw' bgRepeat='no-repeat'>
            <UnorderedList mt='4'fontSize={{base: '2.2vw', md: '2vw', lg: '1.7vw'}} fontWeight='normal'>
              {lists.map(item => (
                  <ListItem key={`item-${item}`} borderRadius='10' p='0.5vw' bg='#E3D6AC' mt={5}>
                  {item}
                </ListItem>
              ))}
            </UnorderedList>
            </Box>          
          </VStack>
        </motion.div>
      </HStack>);
    } else {
      return (
      <VStack pb='10vh'>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}>
        <Text ref={ref} mt='5vh' mb='1vw' textAlign='center' fontSize={{base: '7.5vw', md: '3vw', lg: '5xl'}} fontWeight="bold">
          {heading}
        </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >  
        <Box ref={ref2} px='8vw' pt='25vw' pb='25vw' bgImage='/img/reasons-bg/circle.png' bgPos='center' bgSize='125vw' bgRepeat='no-repeat'>
        <UnorderedList fontSize={{base: '5vw', md: '1.5vw', lg: '1.5vw'}} fontWeight='normal'>
          {lists.map(item => (
            <ListItem key={`item-${item}`} borderRadius='10' p='0.3vw' bg='#E3D6AC' mt={5}>{item}</ListItem>
          ))}
        </UnorderedList>
        </Box>
        </motion.div>
      </VStack>);
    }
  } else if (service == "studio"){
    if(isLargerThan400) {
      return (
        <HStack w='full' align='start' h='80vh'>
          <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}>
          <VStack ref={ref} align={{base: 'left', md: 'left'}} w='45vw' mr='5vw'>
            <Box h='80vh' pl={{sm:'2vw', md: '5vw'}} pr={{md: '10vw'}} alignItems='center' bgImage='/img/reasons-bg/circle.png' bgPos='right' bgSize={{sm: '85vw',md: '60vw'}} bgRepeat='no-repeat'>
              <Center h='full'>
                <Text fontSize={{base: '10vw',sm: '4.8vw', md: '4vw', lg: '3.2vw'}} fontWeight="bold">
                  {heading}
                </Text>
              </Center>
            </Box>
          </VStack>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >  
          <VStack ref={ref2}>
            <Box h={{sm: '70vh', md: '90vh', lg: '70vh'}} pl='3vw' pr='14vw' alignItems='center' bgImage='/img/reasons-bg/pen_landscape.png' bgPos='center' bgSize={{sm: '90vw',md: '80vw',lg: '50vw'}} bgRepeat='no-repeat'>
            <Center h={{sm: '60vh',md: '80vh', lg: '50vh'}}>
              <OrderedList mt='4'fontSize={{base: '3vw', md: '2.5vw', lg: '1.5vw'}} font fontWeight='normal'>
                {lists.map(item => (
                    <ListItem key={`item-${item}`} mt={5}>{item}</ListItem>
                ))}
              </OrderedList>
            </Center>
            </Box>          
          </VStack>
          /</motion.div>
        </HStack>);
    } else {
      return (
        <VStack pb='10vh'>
          <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}>
          <Text ref={ref} mb='6vh' pt='3.5vh' pb='13vh' textAlign='center' bgImage='/img/reasons-bg/circle.png' bgPos='bottom' bgSize='110vw' bgRepeat='no-repeat' fontSize={{base: '7.5vw', md: '3vw', lg: '5xl'}} fontWeight="bold">
            {heading}
          </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >  
          <Box ref={ref2} px='8vw' pt='12vw' pb='25vw' bgImage='/img/reasons-bg/pen_portrait.png' bgPos='left' bgSize='120vw' bgRepeat='no-repeat'>
          <OrderedList w='80%' fontSize={{base: '5vw', md: '1.5vw', lg: '1.5vw'}} fontWeight='normal'>
            {lists.map(item => (
              <ListItem key={`item-${item}`} mt={1}>{item}</ListItem>
            ))}
          </OrderedList>
          </Box>
          </motion.div>
        </VStack>);
    }
  } else {
    if(isLargerThan400) {
      return (
        <VStack w='full' align='start' pt='5vh'>
          <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}>
          <Box ref={ref} align={{base: 'left', md: 'left'}} w='85vw'>
            <Text p='1vw' pl='4vw' fontSize={{base: '5vw', md: '4vw', lg: '2.5vw'}}  borderRightRadius={20} bg='white' fontWeight="bold">
              {heading}
            </Text>
          </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >  
          <VStack ref={ref2}>
            <Center h='60vh' w='100vw'>
                {lists.map(item => (
                  <Center key={`item-${item}`} bg='#5FA698' m='1vw' h='30vh' w={{md: '18vw', lg: '15vw'}} borderRadius={10}>
                    <Text textAlign='center' fontWeight='bold' m='0.7vw' fontSize='xl' color='white'>{item}</Text>
                  </Center>
                ))}
            </Center>
          </VStack>
          </motion.div>
        </VStack>);
    } else {
      const list1 = lists.slice(0,2)
      const list2 = lists.slice(2,4)
      const list3 = lists.slice(4,5)
      return (
      <VStack h='100vh' w='80vw' align='start' pt='5vh' spacing='5vh'>
        <Text p='1vw' pl='4vw' fontSize={{base: '5vw', md: '3vw', lg: '2.5vw'}}  borderRightRadius={20} bg='white' fontWeight="bold">
          {heading}
        </Text>
        <Center w='100vw'>
          <VStack>
            <HStack >
              {list1.map(item => (
                <Center key={`item-${item}`} bg='#5FA698' m='1vw' h='20vh' w={{base:'40vw', md: '18vw', lg: '15vw'}} borderRadius={10}>
                  <Text textAlign='center' fontWeight='bold' m='0.7vw' fontSize='xl' color='white'>{item}</Text>
                </Center>
              ))}
            </HStack>
            <HStack>
              {list2.map(item => (
                <Center key={`item-${item}`} bg='#5FA698' m='1vw' h='20vh' w={{base:'40vw', md: '18vw', lg: '15vw'}} borderRadius={10}>
                  <Text textAlign='center' fontWeight='bold' m='0.7vw' fontSize='xl' color='white'>{item}</Text>
                </Center>
              ))}
            </HStack>
            <HStack>
              {list3.map(item => (
                <Center key={`item-${item}`} bg='#5FA698' m='1vw' h='20vh' w={{base:'40vw', md: '18vw', lg: '15vw'}} borderRadius={10}>
                  <Text textAlign='center' fontWeight='bold' m='0.7vw' fontSize='xl' color='white'>{item}</Text>
                </Center>
              ))}
            </HStack>
          </VStack>
        </Center>
      </VStack>);
    }
  }
}

export const App = ({heading, lists, service}) => {
  const [isLargerThan400] = useMediaQuery('(min-width: 480px)')
  const content = Selector(service, isLargerThan400, heading, lists)
  return (
    <Box
      w="full"
      h='full'
      bg='#5FA698'
      bgImage={service == 'zoom' ? isLargerThan400 ? '/img/reasons-bg/zoom_bg.png' : '/img/reasons-bg/zoom_bg_pot.png' : ''}
      bgSize={service == 'zoom' ? 'cover': ''}
      color='#303030'
      alignItems="center"
      justifyContent="center"
    >
      <Box  h='full'>
        {content}
      </Box>
    </Box>
  )
}

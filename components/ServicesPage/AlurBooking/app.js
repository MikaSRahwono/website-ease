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
import { motion } from "framer-motion";

export const App = ({datas}) => {
  const [isLargerThan400] = useMediaQuery('(min-width: 580px)')

  var data1 = []
  var data2 = []

  if (datas.length > 4) {
    data1 = datas.slice(0,3)
    data2 = datas.slice(3,6)
  }
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  return (
    <Center h={{base: 'auto', }} py={{base: '15vh', md: '10vh'}} px={{base: '5vw'}} bg='white' w='full' borderRadius={30} color='#2f2f2f'>
      {isLargerThan400 ? <VStack spacing={15}>
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >     
          <Heading mt={{md: '1vh', lg:'0'}} ref={ref} mb='5vh'>Alur Pemesanan</Heading>
        </motion.div>

        {datas.length > 4 ? 
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >   
          <VStack ref={ref2} spacing='2vh'>
            <HStack spacing='sp'>
              {data1.map((data, index) => (
              <VStack key={index} w='28vw'>
                <Image w='10vw' src={data.icon} alt="easeyourneeds" mb='1vh'></Image>
                <Text w='20vw' textAlign='center' fontSize={{base: 'sm', md: 'md',lg: 'xl'}} fontWeight='bold'>{data.title}</Text>
              </VStack>
            ))}
            </HStack>
            <HStack>
              {data2.map((data, index) => (
              <VStack key={index} w='28vw'>
                <Image w='10vw' src={data.icon} alt="easeyourneeds" mb='1vh'></Image>
                <Text w='20vw'  textAlign='center' fontSize={{base: 'sm', md: 'md', lg: 'xl'}} fontWeight='bold'>{data.title}</Text>
              </VStack>
            ))}
            </HStack>
          </VStack>
        </motion.div>
         :
         <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >   
         <HStack ref={ref2} spacing={7} p='2vw'>
            {datas.map((data, index) => (
              <VStack key={index} w={{sm: '18vw',  md: '19vw', lg: '20vw'}}>
                <Image w='10vw' src={data.icon} alt="easeyourneeds" mb='3vh'></Image>
                <Text w='20vw' textAlign='center' fontSize={{base: 'sm', md: 'lg', lg: 'xl'}} fontWeight='bold' >{data.title}</Text>
              </VStack>
            ))}
        </HStack>
        </motion.div>
        }
        
      </VStack> : <VStack>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >   
      <Heading ref={ref} mb='1vh'>Alur Pemesanan</Heading>
      </motion.div>
      <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >   
      <VStack ref={ref2} spacing={7} p='2vw'>
          {datas.map((data, index) => (
            <VStack key={index}>
              <Image w={{base: '18vw', sm: '23vw'}} src={data.icon} alt="easeyourneeds" mb='1vh'></Image>
              <Text w='60vw' textAlign='center' fontSize={{base: 'md', sm:'lg', md: 'md', lg: 'lg'}} fontWeight='bold' >{data.title}</Text>
            </VStack>
          ))}
      </VStack>
      </motion.div>
      </VStack>}
      
    </Center>
  )
}
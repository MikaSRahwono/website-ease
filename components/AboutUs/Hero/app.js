import { Box, Container, Center, Divider, VStack, HStack, Heading, Text, useMediaQuery, SlideFade } from "@chakra-ui/react"
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const App = (props) => {
    const [isLargerThan400] = useMediaQuery('(min-width: 480px)')
    const [isLargerThan900] = useMediaQuery('(min-width: 900px)')

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.8,
      });
      const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0.9,
      });
      const [ref3, inView3] = useInView({
        triggerOnce: true,
        threshold: 0.999,
      });
      const [ref4, inView4] = useInView({
        triggerOnce: true,
        threshold: 0.9,
      });

    return (
    <Box>
        <Box bgPos='center' h={{base: "20vh", md: "40vh", lg: "60vh"}} bgImage='/img/aboutus/vteam.jpg' bgSize='cover'></Box>
        {isLargerThan400 ? 
        <Container maxW='80vw' minW='80vw' pt='15vh'>
        {isLargerThan900 ?
        <HStack alignItems='initial'>
            <Box w='150vw'>
                <Divider mb='2vh' w='40%' alignItems='center' size='1vh' borderColor='black' variant='solid' orientation='horizontal'></Divider>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >    
                    <Box ref={ref}>
                        <Heading fontSize={{lg: '6xl', md: "4xl"}}>Our Story</Heading>
                        <Text mt='2vh' fontSize='2xl'>Why we started it?</Text>
                    </Box>
                </motion.div>
            </Box>  
            <Box fontSize='md' textAlign='justify'>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >  
                <Text ref={ref2} mb='4vh'>
                Ease Your Needs was established on September, 7th 2020, initiated by Our Founder, Nanda Najmi. Nanda first identified a problem among college students during Pandemic COVID-19, where they need to use a Zoom Pro for only 2 - 3 days on their event but still need to pay monthly for the Zoom subscription which is certainly not cost-efficient for students. Hence, Nanda initiated a service to rent Zoom Pro available hourly and daily to help students save their budget. After being affected by COVID-19, Zoom Pro keeps becoming more popular, and people use online meeting platforms to keep connected with their relatives, colleagues, and families. Since then, Ease Your Needs were present to answer all the urgent needs for communication.                    </Text>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >  
                <Text ref={ref3} mb='4vh'>
                Not only Zoom Pro renting services, but we provide services to our customers, where they can ask anything related to operating Zoom, so they don’t need to worry about the meeting because our team is ready 24/7 and shall assist with all the customers’ questions. Moreover, we also facilitate customers with our operator services to assist inside the meeting room and make your video conference obstacle-free.                     </Text>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >  
                <Text ref={ref4}>
                Through our excellent services which result in mouth-to-mouth marketing and loyal customers, our customers grew from zero to 40.000 customers in almost 3 years. In response to the increasing demand, now we also provide other services that are Live Streaming and Product Photography & Videography services.
                </Text>
                </motion.div>
            </Box>
        </HStack> : 
        <VStack alignItems='initial'>
        <Box>
            <Divider mb='2vh' w='40%' alignItems='center' size='1vh' borderColor='black' variant='solid' orientation='horizontal'></Divider>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >    
                <Box ref={ref} mb='5vh'>
                    <Heading fontSize={{base: '5xl', lg: '6xl', md: "5xl"}}>Our Story</Heading>
                    <Text mt='2vh' fontSize='2xl'>Why we started it?</Text>
                </Box>
            </motion.div>
        </Box>
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >    
            <Box ref={ref2} fontSize='md' textAlign='justify'>
                <Text mb='4vh'>
                Ease Your Needs was established on September, 7th 2020, initiated by Our Founder, Nanda Najmi. Nanda first identified a problem among college students during Pandemic COVID-19, where they need to use a Zoom Pro for only 2 - 3 days on their event but still need to pay monthly for the Zoom subscription which is certainly not cost-efficient for students. Hence, Nanda initiated a service to rent Zoom Pro available hourly and daily to help students save their budget. After being affected by COVID-19, Zoom Pro keeps becoming more popular, and people use online meeting platforms to keep connected with their relatives, colleagues, and families. Since then, Ease Your Needs were present to answer all the urgent needs for communication.                    </Text>
                <Text mb='4vh'>
                Not only Zoom Pro renting services, but we provide services to our customers, where they can ask anything related to operating Zoom, so they don’t need to worry about the meeting because our team is ready 24/7 and shall assist with all the customers’ questions. Moreover, we also facilitate customers with our operator services to assist inside the meeting room and make your video conference obstacle-free.                     </Text>
                <Text >
                Through our excellent services which result in mouth-to-mouth marketing and loyal customers, our customers grew from zero to 40.000 customers in almost 3 years. In response to the increasing demand, now we also provide other services that are Live Streaming and Product Photography & Videography services.
                </Text>
            </Box>
        </motion.div>
        </VStack>}
        </Container>
        : <Box><VStack>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >    
            <Box ref={ref}>
                <Center>
                    <Heading fontSize='6xl'>Our Story</Heading>
                </Center>
                <Center>
                    <Text mt='1vh' fontSize='2xl'>Why we started it?</Text>
                </Center>
            </Box>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >    
            <Box ref={ref2} px='7vw' fontSize='md' pt='1vh' textAlign='justify'>
                <Text mb='4vh'>
                Ease Your Needs was established on September, 7th 2020, initiated by Our Founder, Nanda Najmi. She initiated a service to rent Zoom Pro available hourly and daily to help students save their budget. After being affected by COVID-19, Zoom Pro keeps becoming more popular. Since then, Ease Your Needs were present to answer all the urgent needs for communication. Not only Zoom Pro renting services, we facilitate customers with our operator services to assist inside the meeting room and make your video conference obstacle-free. Our customers grew from zero to 40.000 customers in almost 3 years. In response to the increasing demand, now we also provide other services that are Live Streaming and Product Photography & Videography services.
                </Text>
            </Box>
            </motion.div>
        </VStack>
        </Box>}
    </Box>
    )
}
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Center, Heading, Text, SlideFade } from '@chakra-ui/react'
import { studio, creative, zoom } from './_data'
import { useInView } from 'react-intersection-observer'
import { motion } from "framer-motion";


export const App = ({data}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.9,
      });
      const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0.6,
      });

    var faqs
    if (data == "studio") {faqs = studio}
    else if (data == "creative") {faqs = creative}
    else if (data == "zoom") (faqs = zoom)

    

    return (
        <Box color='#2f2f2f'>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >   
                <Center ref={ref}>
                    <Heading textAlign='center' fontSize={{base: '3xl', md: '4xl'}}>
                        Frequently Asked Questions
                    </Heading>
                </Center>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >   
            <Box
                ref={ref2}
                borderRadius="lg"
                boxShadow="md"
                mx="auto"
                my={4}
                padding="4"
                width={{base: '90vw', md: '70vw'}}
            >
                <Accordion allowToggle>
                {faqs.map(faq => (
                    <AccordionItem key={faq.question} border="none">
                        <AccordionButton
                        borderRadius="lg"
                        _hover={{ bg: '#DCB753' }}
                        _focus={{ boxShadow: 'none' }}
                        mt={5}
                        bg='#DAC17F'
                        >
                        <Box flex="1" textAlign="left" p={2}>
                            <Text fontSize={{base: 'md', md: 'xl'}} fontWeight='bold'>
                            {faq.question}
                            </Text>
                        </Box>
                        <AccordionIcon />
                        </AccordionButton>
                    <AccordionPanel pb={4} fontSize={{base: 'sm', md: 'md'}} >
                        {faq.answer}
                    </AccordionPanel>
                    </AccordionItem>
                ))}
                </Accordion>
            </Box>
            </motion.div>
      </Box>
    )
  }
  
  
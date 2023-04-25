import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Center, Heading, Text } from '@chakra-ui/react'
import { studio, creative, zoom } from './_data'

export const app = ({data}) => {
    var faqs
    if (data == "studio") {faqs = studio}
    else if (data == creative) {faqs = creative}
    else if (data == zoom) (faqs = zoom)
    return (
        <Box color='#2f2f2f'>
            <Center>
                <Heading>
                    Frequently Asked Questions
                </Heading>
            </Center>
            <Box
                borderRadius="lg"
                boxShadow="md"
                mx="auto"
                my={4}
                padding="4"
                width='70vw'
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
                            <Text fontSize='xl' fontWeight='bold'>
                            {faq.question}
                            </Text>
                        </Box>
                        <AccordionIcon />
                        </AccordionButton>
                    <AccordionPanel pb={4}>
                        {faq.answer}
                    </AccordionPanel>
                    </AccordionItem>
                ))}
                </Accordion>
            </Box>
      </Box>
    )
  }
  
  
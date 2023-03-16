import { Container, Box, Heading, Show, Text, Center, Divider, Icon, Image, HStack, Stack, FormControl, FormLabel, Input, PasswordField, Button } from "@chakra-ui/react"
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  return (
    <Box color='black'>
        <HStack>
            <Box h='120vh' w='50vw' bg='white' maxW='70vw'>
                <Container mt='15vh'>
                    <Text color='black' fontSize='3xl' fontWeight='extrabold'>We Want to Hear From You</Text>
                    <Stack spacing="3" mt='5vh'>
                    <FormControl id="name" colorScheme='blackAlpha'>
                        <FormLabel color='black'>Name</FormLabel>
                        <Input color='black' name="name" type="text" autoComplete="email" borderColor='black' required />
                    </FormControl>
                    <FormControl id="email">
                        <FormLabel color='black'>Email address</FormLabel>
                        <Input color='black' name="email" type="email" autoComplete="email" borderColor='black' required />
                    </FormControl>
                    <FormControl id="phone">
                        <FormLabel color='black'>Phone</FormLabel>
                        <Input color='black' name="phone" type="number" autoComplete="email" borderColor='black' required />
                    </FormControl>
                    <FormControl id="message">
                        <FormLabel color='black'>Message</FormLabel>
                        <Input color='black' name="message" type="text" autoComplete="email" borderColor='black' required />
                    </FormControl>
                    </Stack>
                    <Button color='black' mt='5vh' bg='#F7E0A6' w='8vw'>Submit</Button>
                    <Box mt='5vh'>
                        <Text fontSize='2xl' fontWeight='extrabold'>Open Hour</Text>
                        <Text fontSize='lg'>Senin - Minggu, 07.00 - 23.00 WIB</Text>
                    </Box>
                    <Box mt='5vh'>
                        <Text fontSize='2xl' fontWeight='extrabold'>Social Media</Text>
                        <HStack>
                            <Icon as = {FaInstagram} boxSize={6}></Icon>
                            <Text fontSize='lg'> @easeyourneeds.group</Text>
                        </HStack>
                        <HStack>
                            <Icon as = {FaWhatsapp} boxSize={6}></Icon>
                            <Text fontSize='lg'> +62821-2439-4680</Text>
                        </HStack>
                    </Box>
                </Container>
            </Box>
            <Box>
                <Image 
                src='/img/jakarta2.jpeg' 
                w='50vw'
                h='120vh'
                ></Image>
            </Box>
        </HStack>
    </Box>
  )
}
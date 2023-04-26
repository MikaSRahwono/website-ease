import { Container, Box, Text, Icon, HStack, Stack, FormControl, FormLabel, Input, Button } from "@chakra-ui/react"
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  
  return (
    <Box>
      <Box type='contact' h={{lg:'100vh', sm:'140vh'}} bg='white' color='#000'>
      <Container>
        <Text pt='15vh' color='black' fontSize='3xl' fontWeight='extrabold'>We Want to Hear From You</Text>
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
        <Button color='black' mt='5vh' bg='#F7E0A6' w={{lg:'8vw', sm:'10vw'}}>Submit</Button>
        <Box mt='5vh'>
          <Text fontSize='2xl' fontWeight='extrabold'>Open Hour</Text>
          <Text fontSize='lg'>Senin - Minggu, 07.00 - 23.00 WIB</Text>
        </Box>
        <Box mt='5vh'>
          <Text fontSize='2xl' fontWeight='extrabold'>Social Media</Text>
          <HStack>
            <Icon as={FaInstagram} boxSize={6}></Icon>
            <Text fontSize='lg'> @easeyourneeds.group</Text>
          </HStack>
          <HStack>
            <Icon as={FaWhatsapp} boxSize={6}></Icon>
            <Text fontSize='lg'> +62821-2439-4680</Text>
          </HStack>
        </Box>
      </Container>
    </Box>

    <Box
      h='100vh'
      type='image'
      bgImage='/img/jakarta.png'
      bgSize='cover'
      bgPosition='center'
      bgRepeat='no-repeat'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Text color='white' fontSize='4xl' fontWeight='extrabold' textAlign='center'>
        Welcome to Our Website
      </Text>
    </Box>

  </Box>
    )

};


export default Contact;

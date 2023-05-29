import {Box, Text} from "@chakra-ui/react"

export const Heroimage = () => {
    return (
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
    );

};
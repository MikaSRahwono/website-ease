import {
  Box,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { Card } from './card'
import { LoginForm } from './loginForm'

export const App = () => (
  <Box
    bg={useColorModeValue('gray.50', 'inherit')}
    minH="100vh"
    py="12"
    px={{
      base: '4',
      lg: '8',
    }}
  >
    <Box maxW="md" mx="auto">
      <Heading textAlign="center" size="xl" fontWeight="extrabold" mt={24} mb={10}>
        Login Admin
      </Heading>
      <Card>
        <LoginForm />
      </Card>
    </Box>
  </Box>
)

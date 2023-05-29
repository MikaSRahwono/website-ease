import { Button, chakra, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { PasswordField } from './passwordField'
import { useState } from 'react'
import { useRouter } from 'next/router';
import { useAuth } from '@/lib/authUserContext';


// import { getSession } from '@/lib/get-session'
import cookie from 'cookie'


export const LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const {login} = useAuth();
  const router = useRouter();

  return (
    <chakra.form
      onSubmit={(e) => {
        console.log(email)
        console.log(password)
        login(email, password)
        .then(authUser => {
          router.push({
            pathname: '/dashboard',
            query: { sort: 'all' },
          });
        })
        .catch(error => {
          setError(error.message)
        });
        event.preventDefault();
        console.log("teting")
      }}
    >
      <Stack spacing="6">
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input name="email" type="email" autoComplete="email" required onChange={event => setEmail(event.currentTarget.value)}/>
        </FormControl>
        <PasswordField setPassword={setPassword}/>
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Sign in
        </Button>
      </Stack>
    </chakra.form>
  )
  }


// export default function handler(email, password, res) {
//   // Check if the user's credentials are valid
//   const user = signInWithEmailAndPassword(auth, email, password)

//   if (user) {
//     // Generate a unique session ID
//     const sessionId = generateSessionId()

//     // Set the session ID cookie
//     res.setHeader('Set-Cookie', cookie.serialize('sessionId', sessionId, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV !== 'development',
//       sameSite: 'strict',
//       maxAge: 3600, // 1 hour
//       path: '/'
//     }))

//     // Return a success response
//     res.json({ message: 'Login successful!' })
//   } else {
//     // Return an error response
//     res.status(401).json({ message: 'Invalid email or password' })
//   }
// }

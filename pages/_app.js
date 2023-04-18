import '@/styles/globals.css'
import Layout from '@/components/layouts/main'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/lib/theme'
import Navbar from '@/components/Navbar/navbar';
import '@/components/Navbar/navbar.module.css';
import 'react-multi-carousel/lib/styles.css';
import { AuthUserProvider } from '../lib/authUserContext';
import { FirestoreProvider } from '@/lib/databaseContext'


export default function App({ Component, pageProps, router }) {
  return (
    <AuthUserProvider>
      <FirestoreProvider>
        <ChakraProvider theme={theme}>
          <Layout router={router}>
          <Navbar />
          <Component {...pageProps} key={router.route} />
          </Layout>
        </ChakraProvider>
      </FirestoreProvider>
    </AuthUserProvider>
  )
}

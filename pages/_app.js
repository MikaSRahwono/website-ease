import '@/styles/globals.css'
import Layout from '@/components/Layouts/main'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/lib/theme'
import Navbar from '@/components/Navbar/navbar';
import '@/components/Navbar/navbar.module.css';
import 'react-multi-carousel/lib/styles.css';
import { AuthUserProvider } from '../lib/authUserContext';
import { FirestoreProvider } from '@/lib/databaseContext';
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
})


export default function App({ Component, pageProps, router }) {
  return (
    <main className={montserrat.className}>
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
    </main>
  )
}

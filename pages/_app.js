import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { AuthUserProvider } from '../lib/authUserContext';
import { FirestoreProvider } from '@/lib/databaseContext';
import { Global, css } from '@emotion/react';
import Navbar from '@/components/Navbar/navbar';
import 'react-multi-carousel/lib/styles.css';
import '@fontsource/aileron/400.css'; // Import Aileron 400 font
import '@fontsource/aileron/700.css'; // Import Aileron 700 font
import Head from 'next/head'
import { App as Footer}  from '@/components/Footer/App'
import { Box } from '@chakra-ui/react'
import { FaWhatsapp } from "react-icons/fa"
import styles from "@/styles/whatsapp.module.css"

// Extend the theme with the font face
const customTheme = extendTheme({
  fonts: {
    body: 'Aileron, sans-serif',
  },
});

// Add the Aileron font face to the global styles
const GlobalStyle = () => (
  <Global
    styles={css`
      /* Add any additional global styles here */
    `}
  />
);

export default function App({ Component, pageProps, router }) {

  let footer
    if (router.pathname.indexOf('dashboard') > -1) {
        footer = <Box></Box>
    }
    else {
        footer = <Footer></Footer>
    }
    

  return (
    <Box as="main">
    <AuthUserProvider>
      <FirestoreProvider>
        <ChakraProvider theme={customTheme}>
          <GlobalStyle />
          <Head>
            <meta name="viewport" content="width=device-width, inital-scale=1" />
            <title>Ease Your Needs</title>
          </Head>
          <Navbar />
          <Component {...pageProps} key={router.route} />
          <Box
                position="fixed"
                bottom={10}
                right={10}
                bg="#25d366"
                borderRadius="50%"
                padding={4}
                className={styles.Box}
                >
                <a
                    href="https://wa.me/message/U7HG5VRQIVVDJ1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp color="#fff" size={30} />
                </a>
            </Box>

            {footer}
        </ChakraProvider>
      </FirestoreProvider>
    </AuthUserProvider>
    </Box>
  );
}

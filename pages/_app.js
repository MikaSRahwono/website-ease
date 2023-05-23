import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { AuthUserProvider } from '../lib/authUserContext';
import { FirestoreProvider } from '@/lib/databaseContext';
import { Global, css } from '@emotion/react';
import Navbar from '@/components/Navbar/navbar';
import 'react-multi-carousel/lib/styles.css';
import '@fontsource/aileron/400.css'; // Import Aileron 400 font
import '@fontsource/aileron/700.css'; // Import Aileron 700 font

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
  return (
    <AuthUserProvider>
      <FirestoreProvider>
        <ChakraProvider theme={customTheme}>
          <GlobalStyle />
          <Navbar />
          <Component {...pageProps} key={router.route} />
        </ChakraProvider>
      </FirestoreProvider>
    </AuthUserProvider>
  );
}

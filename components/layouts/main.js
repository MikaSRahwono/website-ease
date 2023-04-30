import Head from 'next/head'
import NavBar from '../Navbar/navbar'
import { Box, extendTheme } from '@chakra-ui/react'
import { App as Footer}  from '../Footer/App'
import styles from "@/styles/whatsapp.module.css"
import { FaWhatsapp } from "react-icons/fa"

const Main = ({children, router}) => {
    let footer
    if (router.pathname.indexOf('dashboard') > -1) {
        footer = <Box></Box>
    }
    else {
        footer = <Footer></Footer>
    }
    
    return (
        <Box as="main">
        <Head>
          <meta name="viewport" content="width=device-width, inital-scale=1" />
          <title>Ease Your Needs</title>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>

            <NavBar path={router.asPath}></NavBar>
            <Box>
                {children}
            </Box>
            {/* Floating WhatsApp icon */}
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
                    href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp color="#fff" size={30} />
                </a>
            </Box>

            {footer}
        </Box>
    )
}

export default Main
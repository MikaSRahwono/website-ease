import { Box } from "@chakra-ui/react";
import { Contactform } from "@/components/contactPage/contactform";
import { Heroimage } from "@/components/contactPage/heroimage";
import styles from "@/styles/Contact.module.css"; // Import CSS
import React from 'react';

const Contact = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setScrollPosition(currentPosition <= 0 ? 0 : currentPosition);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarHeight = 1;
  const heroHeight = 500;

  return (
    <Box position="relative" color="black" background="#f2f2f2" minHeight="100vh">
      <Box position="fixed" top={0} left={0} right={0} height={navbarHeight} zIndex={10} background="#ffffff">
        {/* Add Navbar component here */}
      </Box>
      <Box position="fixed" top={navbarHeight} left={0} right={0} height={heroHeight} opacity={1 - scrollPosition / heroHeight} zIndex={0}>
        <Contactform></Contactform>
      </Box>
      <Box mt={heroHeight - navbarHeight} width="100%">
        <Heroimage></Heroimage>
      </Box>
    </Box>
  );
};

export default Contact;

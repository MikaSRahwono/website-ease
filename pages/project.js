import React, { useState } from 'react';
import { Spacer, Button, Box, Flex, Heading, Center, Text, Container, SimpleGrid } from "@chakra-ui/react"
import styles from "@/styles/Menubar.module.css";

const Navbar = () => {
    return (
      <Flex color="#000" mt={4}>
        <Button
          _hover={{
            textDecoration: "underline",
          }}
        >
          All
        </Button>
        <Button
          _hover={{
            textDecoration: "underline",
          }}
        >
          Zoom
        </Button>
        <Button
          _hover={{
            textDecoration: "underline",
          }}
        >
          Studio
        </Button>
        <Button
          _hover={{
            textDecoration: "underline",
          }}
        >
          Creative
        </Button>
      </Flex>
    );
  };
  
  

const PageTitle = () => {
  return (
    <Heading fontWeight={"extrabold"} fontFamily={'Montserrat'} color="#000">
        RECENT PROJECTS
    </Heading>
  );
};

const Card = ({ img, title }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {hovered && (
        <div className={styles.cardTitle}>
          <h3>{title}</h3>
        </div>
      )}
    </div>
  );
};

const CardGrid = () => {
  const cardData = [
    { img: 'img/jakarta2.jpeg', title: 'Judul 1' },
    { img: 'img/jakarta.png', title: 'Judul 2' },
    { img: 'img/jakarta2.jpeg', title: 'Judul 3' },
    { img: 'img/jakarta.png', title: 'Judul 4' },
    { img: 'img/jakarta2.jpeg', title: 'Judul 5' },
    { img: 'img/jakarta.png', title: 'Judul 6' },
    { img: 'img/jakarta2.jpeg', title: 'Judul 7' },
    { img: 'img/jakarta.png', title: 'Judul 8' },
    { img: 'img/jakarta.png', title: 'Judul 9' },
  ];

  return (
  <Box backgroundColor={'#f2f2f2'}> 
    <Container pt='15vh' pb='10vh' maxH="auto" maxW='75vw'>
      <PageTitle />
      <Navbar />
        <SimpleGrid
        my='8'
        columns={{
            base: 1,
            md: 1,
            lg: 3,
          }}
        spacing={10}
          >
      {cardData.map((card, index) => (
        <Card key={index} img={card.img} title={card.title} />
      ))}
      </SimpleGrid>
    </Container>
    </Box> 
  );
};

function App() {
  return (
    <div className="App">
      <CardGrid />
    </div>
  );
}

export default App;
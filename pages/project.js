import React, { useEffect, useState } from 'react';
import { Spacer, Box, Flex, Heading, Center, Text, Container, SimpleGrid, HStack, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { useDB } from '@/lib/databaseContext';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => {
  return (
    <HStack color="#000" mt={4} fontSize={{ base: "3xl", md: "1.5vw" }} spacing={{ base: "3xl", md: "1vw" }}>
      <Link
        href={{ pathname: '/project', query: { sort: "all" } }}
        _hover={{
          textDecoration: "underline",
        }}
      >
        <Text fontWeight='bold'>
          All
        </Text>
      </Link>
      <Link
        href={{ pathname: '/project', query: { sort: "zoom" } }}
        _hover={{
          textDecoration: "underline",
        }}
      >
        <Text fontWeight='bold'>
          Zoom
        </Text>
      </Link>
      <Link
        href={{ pathname: '/project', query: { sort: "studio" } }}
        _hover={{
          textDecoration: "underline",
        }}
      >
        <Text fontWeight='bold'>
          Studio
        </Text>
      </Link>
      <Link
        href={{ pathname: '/project', query: { sort: "creative" } }}
        _hover={{
          textDecoration: "underline",
        }}
      >
        <Text fontWeight='bold'>
          Creative
        </Text>
      </Link>
    </HStack>
  );
};

const PageTitle = () => {
  return (
    <Text fontWeight='bold' fontSize={{ base: "5xl", md: "5vh" }} w={{ base: "full", md: "25vw" }} color="#000">
      Our Work We Do for Our Client
    </Text>
  );
};

const Card = ({ id, img, title, desc, tanggal }) => {
  const [hovered, setHovered] = useState(false);
  const [url, setUrl] = useState("");

  const database = useDB();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  useEffect(() => {
    database.getPhoto(img).then(res => {
      setUrl(res);
    });
  }, [database, img]);

  return (
    <LinkBox color='black' width='20vw'>
        <Box
        height='50vh'
        width='20vw'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* {hovered && (
        <div className={styles.cardTitle}>
          <h3>{title}</h3>
        </div>
      )} */}
      <LinkOverlay href={"/detail?id=" + id} />
      <Text fontWeight='semibold' mt={4} fontSize={{ base: "3xl", md: "1.5vw" }}>{title}</Text>
      <Text noOfLines={2} fontSize={{ base: "2xl", md: "1vw" }}>{desc}</Text>
    </LinkBox>
  );
};

const CardGrid = ({ cardData }) => {
  return (
    <Box backgroundColor={'#f2f2f2'}>
      <Container pt={{ base: "10vh", md: "20vh" }} pb="10vh" maxH="auto" maxW={{ base: "full", md: "75vw" }}>
        <HStack spacing="auto" mb="10vh">
          <PageTitle />
          <Navbar />
        </HStack>
        <SimpleGrid
          my='8'
          columns={{
            base: 1,
            md: 1,
            lg: 3,
          }}
        spacing='2vw'
        spacingY='12vh'
          >
      {cardData.map((card, index) => {
  console.log(card[1]);
  return (
    <Card
      key={card[0]} // Add the key prop with a unique value
      id={card[0]}
      img={card[1].listPhotos == null ? "" : card[1].listPhotos[0]}
      desc={card[1].description}
      title={card[1].title}
      tanggal={card[1].date}
    />
  );
})}
      </SimpleGrid>
    </Container>
    </Box> 
  );
};

function App() {

  const database = useDB()
  const router = useRouter()
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (router.query.sort === "all") {
      database.getAllProjects().then(list => {
        setItems(list);
      });
    } else if (router.query.sort === 'zoom') {
      database.getZoomProjects().then(list => {
        setItems(list);
      });
    } else if (router.query.sort === 'studio') {
      database.getStudioProjects().then(list => {
        setItems(list);
      });
    } else if (router.query.sort === 'creative') {
      database.getCreativeProjects().then(list => {
        setItems(list);
      });
    }
  }, [database, router.query.sort]);

  return (
    <Box fontFamily='Montserrat'>
      <CardGrid cardData={items} />
    </Box>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { Spacer, Box, Image, Flex, Heading, Center, Text, Container, SimpleGrid, HStack, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { useDB } from '@/lib/databaseContext';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


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
=======
import { Spacer, Box, Image, Flex, Heading, Center, Link, Text, Container, SimpleGrid, HStack, LinkBox, LinkOverlay, VStack } from "@chakra-ui/react";
import { useDB } from '@/lib/databaseContext';
import { useRouter } from 'next/router';
import { Link as NextLink}  from 'next/link';
>>>>>>> c2529ab0950b649d1465eeaddd8624a8eeb49210

function App() {

  return (
<<<<<<< HEAD
    <Box pt='10vh'>
      <Box opacity='80%' h='30vh' w='100%' alt="easeyourneeds" src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/images%2F1b12e432-3575-4372-b677-fea0a44fa30d?alt=media&token=2dfa9e8b-6334-416c-95d4-77e161cca1f9" />
=======
    <Box  bgColor="#f2f2f2" color='black'>
    <Container pt={{base: '5vh', md: '10vh'}}  minW='80vw'>
      <Center py='20vh'>
        <Box>
        <Heading size='4xl' textAlign='center'>
          Our Portfolio
        </Heading>
        <Center>
        <Text textAlign='center' w={{base: '90vw', md: '50vw'}} py={{base: '5vh', md: '10vh'}} fontSize='lg' lineHeight='4vh' letterSpacing='0.3rem'>
        This is a glimpse of our works. As we strive for excellence in every project, the works we’ve done are achieved through a deep and thorough process according to our client’s liking. We also convey our client’s brand’s messages meticulously with our own distinctive ways of execution.
        </Text>
        </Center>
        </Box>
      </Center>
      <Box w='100%' alt="easeyourneeds" bgPos='center' bgSize='cover' bgImage="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Fprojects%2Fnormal%2FGroup%2064.png?alt=media&token=558274f2-9304-4f15-ab13-62463c8f60d7" >
        <Box h='50vh'>
          <Center h='50vh' color='white' backdropFilter='auto' backdropBlur='3px'>
          <VStack>
            <Heading textShadow= '0 3px 5px black' fontSize='5xl'>
              Live Streaming
            </Heading>
            <Link as={NextLink} href='/projects/live' textShadow= '0 3px 5px black'>
              View Project
            </Link>
            </VStack>
          </Center>
        </Box>
      </Box>
      <Box w='100%' alt="easeyourneeds" bgPos='center' bgSize='cover' bgImage="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Fprojects%2Fnormal%2FGroup%2065.png?alt=media&token=48828694-df95-4328-acea-3abfa66be1d5" >
        <Box h='50vh'>
          <Center h='50vh' color='white' backdropFilter='auto' backdropBlur='3px'>
          <VStack>
            <Heading textShadow= '0 3px 5px black' fontSize='5xl'>
              Studio
            </Heading>
            <Link as={NextLink} href='/projects/studio' textShadow= '0 3px 5px black'>
              View Project
            </Link>
            </VStack>
          </Center>
        </Box>
      </Box>
      <Box w='100%' blur='10vw' alt="easeyourneeds" bgPos='center' bgSize='cover' bgImage="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Fprojects%2Fnormal%2FGroup%2066.png?alt=media&token=f67674d9-a677-404b-ae71-db47766dd807" >
        <Box h='50vh'>
          <Center h='50vh' color='white' backdropFilter='auto' backdropBlur='3px'>
            <VStack>
            <Heading textShadow= '0 3px 5px black' fontSize='5xl'>
              Zoom
            </Heading>
            <Link as={NextLink} href='/projects/zoom' textShadow= '0 3px 5px black'>
              View Project
            </Link>
            </VStack>
          </Center>
        </Box>
      </Box>
    </Container>
>>>>>>> c2529ab0950b649d1465eeaddd8624a8eeb49210
    </Box>
);
}

export default App;

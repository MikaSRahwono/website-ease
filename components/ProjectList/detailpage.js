import { useDB } from '@/lib/databaseContext';
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';

export default function DetailPage({ id }) {
  const database = useDB();
  const [data, setData] = useState({});
  const [photosUrl, setPhotosUrl] = useState([]);

  useEffect(() => {
    if (id != null) {
      database.getProject(id).then(res => {
        setData(res);
        console.log("DATAAA = " + res.listPhotos);
        const photos = res.listPhotos;
        if (photos != null) {
          setPhotosUrl([]);
          photos.map(photo => {
            database.getPhoto(photo).then(res => {
              setPhotosUrl(prevPhotosUrl => [...prevPhotosUrl, res]);
            });
          });
        }
      });
    }
  }, [id, database]); // Added 'database' to the dependency array

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
  };

  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Center>
          <Slider {...settings}>
            {photosUrl.map(photo => (
              <Image
                key={photo}
                rounded={'md'}
                alt={'product image'}
                src={photo}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={{ base: '100%', sm: '400px', lg: '500px' }}
              />
            ))}
          </Slider>
        </Center>
        <Box>
          <Heading
            pb="5vh"
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
            {data.title}
          </Heading>
          <VStack spacing="2vh" alignItems="start">
            <Text fontSize="xl">
              Lokasi: <b>{data.place}</b>
            </Text>
            <Text fontSize="xl">
              Kategori: <b>{data.category}</b>
            </Text>
            <Text fontSize="xl">
              Tanggal: <b>{console.log(data.date)}</b>
            </Text>
            <Text fontSize={'lg'}>{data.description}</Text>
            <Text></Text>
          </VStack>
        </Box>
      </SimpleGrid>
    </Container>
  );
}

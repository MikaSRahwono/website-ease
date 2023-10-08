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
  HStack
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function DetailPage({ id }) {
  const database = useDB();
  const [data, setData] = useState({});
  const [date, setDate] = useState('');
  const [photosUrl, setPhotosUrl] = useState([]);

  const CustomArrow = ({ direction, onClick }) => {
    return (
      <Box
        as="button"
        onClick={onClick}
        position="absolute"
        top="50%"
        transform="translateY(-50%)"
        zIndex="1"
        bg='blackAlpha.300'
        border="none"
        outline="none"
        cursor="pointer"
        left={direction === "left" ? "-30px" : ""}
        right={direction === "right" ? "-30px" : ""}
        borderRadius='full'
      >
        {direction === "left" ? (
          <ChevronLeftIcon w={6} h={6}  color="black" />
        ) : (
          <ChevronRightIcon w={6} h={6} color="black" />
        )}
      </Box>
    );
  };

  useEffect(() => {
    if (id != null) {
      database.getProject(id).then(res => {
        setData(res);
        setDate(Intl.DateTimeFormat('id-ID', {year: 'numeric', month: 'long',day: '2-digit'}).format(res.date.toDate()))
      
        const photos = res.listPhotos;
        if (photos != null) {
          setPhotosUrl([]);
          photos.map(photo => {
            console.log(photosUrl)
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
    dots: false,
    arrows: true,
    height: 'auto',
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
  };

  return (
    <Container maxW='7xl' h='100vh'>
    {/* <Image
        alt="easeyourneeds"
        src={photosUrl[0]}
        w='500vw'
        rounded="md"
        boxShadow="lg"
        // objectFit="contain"
      /> */}
      <Center h='100vh'>
      <HStack>
        <Box w='40vw' h='80vh' my='10vw' mx='5vw'>
          <Slider rounded="md" {...settings}>
            {photosUrl.map((photo) => (
              <Center
                key={photo}
                w='40vw'
                  h='80vh'
                >
                <Image
                  w='40vw'
                  h='80vh'
                  alt="easeyourneeds"
                  src={photo}
                  rounded="md"
                  boxShadow="lg"
                  objectFit='contain'
                />
              </Center>
              ))}
              
            </Slider>
            {/* <Image
                key={photosUrl[0]}
                alt="easeyourneeds"
                src={photosUrl[0]}
                rounded="md"
                boxShadow="lg"
                objectFit='contain'
              /> */}
          </Box >
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
            
              {/* Tanggal: <b>{(format(parseISO(Date(JSON.stringify(data.date) * 1000)), 'd LLLL yyyy'))}</b> */}
              Tanggal: <b>{date}</b>
            </Text>
            <Text fontSize={'lg'}>{data.description}</Text>
            <Text></Text>
          </VStack>
        </Box>
      </HStack>
      </Center>
    </Container>
  );
}

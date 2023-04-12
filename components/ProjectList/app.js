import {
    Box,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    Link,
    Skeleton,
    Stack,
    useColorModeValue,
    Button,
    Text,
    Container,
  } from '@chakra-ui/react'
import { useState } from 'react';
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SimpleSidebar from './sidebar';
import Lists from './lists';
import { useRouter } from 'next/router';
import { useAuth } from '@/lib/authUserContext';

export const App = (props) => {
    return (
    <Box mt={5}>
        <SimpleSidebar>
            <Lists></Lists>
        </SimpleSidebar>
    </Box>
    )
}
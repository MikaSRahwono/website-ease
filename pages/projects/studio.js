import React, { useEffect, useState } from 'react';
import { Spacer, Box, Image, Flex, Heading, Center, Text, Container, SimpleGrid, HStack, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { foto_studio } from '@/components/_dataproject';

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

function App() {

  return (
    <Box pt='10vh'>
      <ResponsiveMasonry
          columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
      >
          <Masonry>
            {foto_studio.map((data, index) => (
              <Image key={index} src={data} alt='foto_studio' p='1vw' />
            ))}
          </Masonry>
      </ResponsiveMasonry>
    </Box>
);
}

export default App;

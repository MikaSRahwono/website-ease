import {
  Box,
  Button,
  createIcon,
  Flex,
  List,
  ListItem,
  Text,
  HStack,
  Image,
  useColorModeValue as mode,
  Divider,
  Center,
  VStack,
} from '@chakra-ui/react'
import * as React from 'react'
const CheckIcon = createIcon({
  viewBox: '0 0 17 12',
  d: 'M0 5.82857L1.64571 4.11429L5.48571 7.2L14.8114 0L16.4571 1.71429L5.48571 12L0 5.82857Z',
})

const PricingDetail = ({icon, name}) => {
  return (
    <ListItem ml={3} display="flex" alignItems="flex-start" fontWeight="medium" maxW="260px" >
      <HStack>
      <Image w={10} mr="2" mt="1" alt="easeyourneeds" src={icon}/>
      <Text fontSize={{base: '3vw', md: '1vw',}} as="span" display="inline-block">
        {name}
      </Text>
      </HStack>
    </ListItem>
  )
}

function addSeperator(nStr) {
  nStr += '';
  var x = nStr.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + '.' + '$2');
  }
  return x1 + x2;
}

const PopularBadge = (props) => (
  <Box
    whiteSpace="nowrap"
    top="-4"
    left="50%"
    transform="translateX(-50%)"
    pos="absolute"
    rounded="md"
    fontWeight="bold"
    fontSize="sm"
    px="4"
    py="1"
    textTransform="uppercase"
    bg="blue.500"
    color="white"
    {...props}
  />
)

const PriceDisplay = (props) => {
  const { currency, price } = props
  return (
    <VStack mb='2vh' mt='0.5vh'>
      <Text textAlign='start' fontWeight='bold'>Start from</Text>
      <Flex w="100%" align="center" justify="center" my="3" fontWeight="extrabold">
      <Text fontSize="2xl" mr="2">
      {price != 0 ? currency : ''}
      </Text>
      <Text fontSize={{base:"8vw",md: "2.8vw"}} lineHeight="1" letterSpacing="tight">
        {price != 0 ? addSeperator(price) : 'Custom'}
      </Text>
    </Flex>
    </VStack>
  )
}

const PricingWrapper = (props) => {
  const { highlight, ...rest } = props
  const popularStyles = {
    borderWidth: '2px',
    borderColor: 'blue.500',
    zIndex: 1,
    px: '1',
    pt: '12',
    pb: '10',
    top: {
      lg: '-8',
    },
  }
  const styles = highlight ? popularStyles : null
  return (
    <Flex
      direction='column'
      w={{base: '90%',md: "full"}}
      h={{base: 'full'}}
      maxW="md"
      mx="auto"
      bg='white'
      color='black'
      px="3"
      pt="8"
      pb="8"
      rounded="lg"
      shadow="base"
      position="relative"
      {...styles}
      {...rest}
    />
  )
}

export const PricingCard = (props) => {
  const { onClick, features, name, description, price, popular, ...rest } = props
  return (
    <PricingWrapper highlight={popular} {...rest}>
      {popular && <PopularBadge>Most Popular</PopularBadge>}

      <Flex direction="column" justify="center">
        <Box height={{lg: "18vh"}} minH={{lg: '100'}}>
          <Text align="center" fontSize={{base: "xl", md: 'xl', lg: "2xl"}} px={{base: '0', md:'1.6vw', lg: '0'}} fontWeight="bold">
            {name}
          </Text>
          <Text fontSize={{base: "md", md: 'sm', lg: "md"}} noOfLines={{md: '3',lg: '3'}} align="center" mt="2" mb='0.5vh' color='black' maxW="16rem" mx="auto">
            {description}
          </Text>
        </Box>
        <Center mt='2' mb='2'>
          <Divider w='70%' alignItems='center' size='10' borderColor='gray' variant='solid' orientation='horizontal'></Divider>
        </Center>
        {!(price == 2999000 || price == 3999000 || price == 4999000 || price == 1) ? 
            <PriceDisplay currency="Rp" price={price} /> : <Box></Box>
        }
        
      </Flex>

      <List flex='1' stylePosition="outside" mt="2" spacing={4}>
        {features.map((feature, index) => (
        <PricingDetail key={index} icon={feature.icon} name={feature.name}></PricingDetail>
      ))}
      </List>

      <Box alignItems='end'>
        <Button
          minH={{base: '5vh', md: "3.5rem"}}
          rounded="lg"
          fontWeight="bold"
          colorScheme={popular ? 'blue' : 'gray'}
          mt="8"
          w="100%"
          onClick={onClick}
          bg='#DAC17F'
          _hover={{bg: '#CBAD5C'}}
        >
          BOOKING NOW!
        </Button>
      </Box>
    </PricingWrapper>
  )
}

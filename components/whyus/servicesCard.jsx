import {
  Box,
  createIcon,
  Flex,
  Image,
  Center,
  ListItem,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
const CheckIcon = createIcon({
  viewBox: '0 0 17 12',
  d: 'M0 5.82857L1.64571 4.11429L5.48571 7.2L14.8114 0L16.4571 1.71429L5.48571 12L0 5.82857Z',
})

const ServicesDetail = (props) => {
  const { children, ...rest } = props
  return (
    <ListItem display="flex" alignItems="flex-start" fontWeight="medium" maxW="260px" {...rest}>
      <CheckIcon mr="4" mt="1" color={mode('blue.500', 'blue.300')} />
      <Text as="span" display="inline-block">
        {children}
      </Text>
    </ListItem>
  )
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

const ServicesWrapper = (props) => {
  const { highlight, ...rest } = props
  const popularStyles = {
    borderWidth: '2px',
    borderColor: 'blue.500',
    zIndex: 1,
    px: '8',
    pt: '12',
    pb: '10',
    top: {
      lg: '-8',
    },
  }
  const styles = highlight ? popularStyles : null
  return (
    <Box
      w="full"
      maxW="md"
      mx="auto"
      bg={mode('white', 'gray.700')}
      px="10"
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

export const ServicesCard = (props) => {
  const { img, scale = 1, onClick, name, description, price, popular, ...rest } = props
  return (
  
    <ServicesWrapper backgroundColor={'white'} highlight={popular} {...rest} style={{ transform: `scale(${scale})` }}>

      {popular && <PopularBadge>Most Popular</PopularBadge>}

      <Center>
        <Image src={img} alt={name} w="30%" h="30%" objectFit="cover" />
      </Center>

      <Flex direction="column" justify="center" mt={4} textAlign="center">
        <Text color={'#000'} fontFamily='Aileron' fontSize="2xl" fontWeight="bold">
          {name}
        </Text>
        <Text fontFamily='Aileron' mt={2} color={'#000'} maxW="20rem" mx="auto">
          {description}
        </Text>
      </Flex>

    </ServicesWrapper>

  )
}

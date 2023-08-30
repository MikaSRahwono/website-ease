import { Container, Box, Heading, useMediaQuery, HStack, Show, Text, Center, Divider, Button } from "@chakra-ui/react"
import { App as Projects } from "@/components/ServicesPage/ServicesProjects/app"
import { slides } from "@/components/Hero/slides/_dataCreative"
import { slides_pro } from "@/components/ServicesPage/ServicesProjects/_data"
import { App as Pricing } from "@/components/ServicesPage/Pricing/app"
import { App as Terms } from "@/components/Terms/app"
import { App as FAQ } from "@/components/ServicesPage/FAQ/app"
import { App as Reasons } from "@/components/ServicesPage/Reasons/app"
import { App as Highlight } from "@/components/ServicesPage/HighlightServices/app"
import { App as Hero } from "@/components/ServicesPage/HeroServices/app"
import { App as AlurBooking } from "@/components/ServicesPage/AlurBooking/app"
import { App as Testimoni } from "@/components/ServicesPage/Testimoni/app"
import { zoom_desc, zoom, } from "@/components/ServicesPage/Pricing/_data"
import { zoom_book } from "@/components/ServicesPage/AlurBooking/_data"
import { zoom_pro } from "@/components/ServicesPage/ServicesProjects/_data"
import Link from "next/link"

export default function Home() {
  const [isLargerThan400] = useMediaQuery('(min-width: 860px)')

  const reason_list = [
    'Links are already prepared, hassle free',
    '24/7 standby Admin to answer all your questions',
    'Affordable; Low cost zoom rental',
    'Always ready; we accept urgent orders',
    'You get points every time you rent zoom with us'
  ]

  return (
    <Box style={{ backgroundColor:'#ECECEC'}}
    >
      <Hero hero={1}></Hero>
        {isLargerThan400 ? <Box h='10vh' bg='#FFFFFF' w='100vw' mt={0} color='black'>
        <Center h='10vh'>
          <HStack spacing='3vw'>
            <Button backgroundColor='#88c4b4' _hover={{backgroundColor: '#EDCA7D'}}>
              <Link href='#reasons'>Why Us?</Link>
            </Button>
            <Button backgroundColor='#88c4b4' _hover={{backgroundColor: '#EDCA7D'}}>
              <Link href='#projects'>Recent Projects</Link>
            </Button>
            <Button backgroundColor='#88c4b4' _hover={{backgroundColor: '#EDCA7D'}}>
              <Link href='#pricing'>Pricing dan Paket</Link>
            </Button>
            <Button backgroundColor='#88c4b4' _hover={{backgroundColor: '#EDCA7D'}}>
              <Link href='#alur'>Alur Booking</Link>
            </Button>
            <Button backgroundColor='#88c4b4' _hover={{backgroundColor: '#EDCA7D'}}>
              <Link href='#faq'>FAQ</Link>
            </Button>
            <Button backgroundColor='#88c4b4' _hover={{backgroundColor: '#EDCA7D'}}>
              <Link href='#testimoni'>Testimoni</Link>
            </Button>
          </HStack>
        </Center>
      </Box> : <Box h='10vh' bg='#FFFFFF' w='100vw' mt={0} color='black'></Box>}
      <div id="reasons">
      <Reasons
        service='zoom'
        heading='Why you have to book Zoom Rental with EaseYourNeeds?'
        lists={reason_list}
      ></Reasons>
      </div>
      <Box h='10vh' bg='white'></Box>
      <Highlight service='zoom'></Highlight>
      <div id="projects"></div>
      <Center w='100vw' >
        <Box mt='10vh' width='90vw'>
          {/* Recent Projects */}
          <Box>
            <Projects slides={zoom_pro}></Projects>
          </Box>

          {/* Pricing */}
          <div id="pricing"></div>
          <Box>
            <Pricing datas={zoom} description={zoom_desc} column={3}></Pricing>
          </Box>

          {/* Terms of Service */}
          <div id="alur"></div>
          <Box mt={{md: '5vh',lg: '10vh'}}>
            <AlurBooking datas={zoom_book}></AlurBooking>
          </Box>

          {/* Frequently Asked Questions */}
          <div id="faq"></div>
          <Box mt={{base: '10vh',md: '5vh',lg: '20vh'}}>
            <FAQ data='zoom'></FAQ>
          </Box>

          <div id="testimoni"></div>
          <Box mt='15vh'>
            <Testimoni></Testimoni>
          </Box>

          <Box height='50vh'></Box>
        </Box>
      </Center>
    </Box>
  )
}
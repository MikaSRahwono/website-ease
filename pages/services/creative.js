import { Container, Box, Heading, Show, Text, HStack, Center, Divider, useMediaQuery } from "@chakra-ui/react"
import { App as Projects } from "@/components/ServicesPage/ServicesProjects/app"
import { slides } from "@/components/Hero/slides/_dataCreative"
import { slides_pro } from "@/components/ServicesPage/ServicesProjects/_data"
import { App as Pricing } from "@/components/ServicesPage/Pricing/app"
import { App as Terms } from "@/components/Terms/app"
import { app as FAQ } from "@/components/ServicesPage/FAQ/app"
import { App as Reasons } from "@/components/ServicesPage/Reasons/app"
import { App as Highlight } from "@/components/ServicesPage/HighlightServices/app"
import { App as Hero } from "@/components/ServicesPage/HeroServices/app"
import { App as AlurBooking } from "@/components/ServicesPage/AlurBooking/app"
import { App as Testimoni } from "@/components/ServicesPage/Testimoni/app"
import { creative_desc, creative, } from "@/components/ServicesPage/Pricing/_data"
import { creative_book } from "@/components/ServicesPage/AlurBooking/_data"
import { creative_pro } from "@/components/ServicesPage/ServicesProjects/_data"
import Link from "next/link"

export default function Home() {
  const [isLargerThan400] = useMediaQuery('(min-width: 480px)')

  const reason_list = [
    'Reach wider audience',
    'Low budget operational',
    'To evaluate and control the event more easily',
    'More sponsorships opportunities',
    'Digitalization to adapt with Industry 4.0'
  ]

  return (
    <Box style={{ backgroundColor:'#ECECEC'}}
    >
      <Hero hero={0}></Hero>
        {isLargerThan400 ? <Box h='10vh' bg='#FFFFFF' w='100vw' mt={0} color='black'>
        <Center h='10vh'>
          <HStack spacing='5vw'>
            <Link href='#reasons'>Why Us?</Link>
            <Link href='#projects'>Recent Projects</Link>
            <Link href='#pricing'>Pricing dan Paket</Link>
            <Link href='#alur'>Alur Booking</Link>
            <Link href='#faq'>FAQ</Link>
            <Link href='#testimoni'>Testimoni</Link>
          </HStack>
        </Center>
      </Box> : <Box h='10vh' bg='#FFFFFF' w='100vw' mt={0} color='black'></Box>}
      <div id="reasons">
        <Reasons
          service='creative'
          heading='Why do you need Live Streaming services?'
          lists={reason_list}
        ></Reasons>
      </div>
      <Box h='10vh' bg='white' mb='5vh'></Box>
      <Highlight></Highlight>
      <div id="projects"></div>
      <Center w='100vw' >
        <Box mt='10vh' width='90vw'>
          {/* Recent Projects */}
            <Box>
              <Projects slides={creative_pro}></Projects>
            </Box>

          {/* Pricing */}
          <div id="pricing"></div>
          <Box>
            <Pricing datas={creative} description={creative_desc} column={4}></Pricing>
          </Box>

          {/* Terms of Service */}
          <div id="alur"></div>
          <Box mt='15vh'>
            <AlurBooking datas={creative_book}></AlurBooking>
          </Box>

          {/* Frequently Asked Questions */}
          <div id="faq"></div>
          <Box mt='20vh'>
            <FAQ data='creative'></FAQ>
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
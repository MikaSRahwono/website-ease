import { Container, Box, useMediaQuery, HStack, Heading, Show, Text, Center, Divider } from "@chakra-ui/react"
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
import { studio_desc, studio, } from "@/components/ServicesPage/Pricing/_data"
import { studio_book } from "@/components/ServicesPage/AlurBooking/_data"
import { studio_pro } from "@/components/ServicesPage/ServicesProjects/_data"

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
      <Hero 
        heading='STUDIO' 
        description1='From 7 of 10 people, they prefer to choose brands that have high quality advertisements before deciding to purchase something. Improve your brand image with Ease Your Needs!'
        image='/img/services/prod-services.png'
        ></Hero>
        {isLargerThan400 ? <Box h='10vh' bg='#FFFFFF' w='100vw' mt={0} color='black'>
        <Center h='10vh'>
          <HStack spacing='5vw'>
            <Text>Why Us?</Text>
            <Text>Recent Projects</Text>
            <Text>Pricing dan Paket</Text>
            <Text>Alur Booking</Text>
            <Text>FAQ</Text>
            <Text>Testimoni</Text>
          </HStack>
        </Center>
      </Box> : <Box h='10vh' bg='#FFFFFF' w='100vw' mt={0} color='black'></Box>}
      <Reasons
        image='/img/reasons-bg/studio.jpg'
        imagemob='/img/reasons-bg/studio-potrait.jpg'
        heading='Why does your brand need professional product photos?'
        lists={reason_list}
      ></Reasons>
      <Box h='10vh' bg='white'></Box>
      <Highlight></Highlight>
      <Center w='100vw' >
        <Box mt={30} width='90vw'>
          {/* Recent Projects */}
          <Box mt='10'>
            <Projects slides={studio_pro}></Projects>
          </Box>

          {/* Pricing */}
          <Box>
            <Pricing datas={studio} description={studio_desc} column={3}></Pricing>
          </Box>

          {/* Terms of Service */}
          <Box>
            <AlurBooking datas={studio_book}></AlurBooking>
          </Box>

          {/* Frequently Asked Questions */}
          <Box>
            <FAQ data='studio'></FAQ>
          </Box>

          <Box>
            <Testimoni></Testimoni>
          </Box>

          <Box height='50vh'></Box>
        </Box>
      </Center>
    </Box>
  )
}
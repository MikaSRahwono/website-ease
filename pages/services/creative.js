import { Container, Box, Heading, Show, Text, Center, Divider } from "@chakra-ui/react"
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

export default function Home() {
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
        heading='CREATIVE' 
        description1='With highly efficient features in event broadcasting, We help you digitalize your event with Our Live Streaming Services.'
        image='/img/services/live-services.png'
        ></Hero>
      <Reasons
        image='/img/reasons-bg/creative.jpg'
        imagemob='/img/reasons-bg/creative-potrait.jpg'
        heading='Why do you need Live Streaming services?'
        lists={reason_list}
      ></Reasons>
      <Box h='10vh' bg='white'></Box>
      <Highlight></Highlight>
      <Center w='100vw' >
        <Box mt={30} width='90vw'>
          {/* Recent Projects */}
          <Box mt='10'>
            <Projects slides={creative_pro}></Projects>
          </Box>

          {/* Pricing */}
          <Box>
            <Pricing datas={creative} description={creative_desc} column={4}></Pricing>
          </Box>

          {/* Terms of Service */}
          <Box>
            <AlurBooking datas={creative_book}></AlurBooking>
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
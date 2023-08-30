import { Container, Box, Divider } from "@chakra-ui/react"
import { App as HeroSlides } from "@/components/HeroSlides/app"
import { App as WhoAre } from "@/components/WhoAre/app"
import { App as ThanksFor } from "@/components/ThanksFor/app"
import { App as Highlight } from "@/components/ServicesPage/HighlightServices/app"
import { App as OurServices } from "@/components/OurServices/app"
import { App as MeetOurClient } from "@/components/MeetOurClient/app"
import { App as Testimoni } from "@/components/ServicesPage/Testimoni/app"

export default function Home() {

  return (
    <Box style={{ backgroundColor:'#fff'}}
    >
      <HeroSlides ></HeroSlides>
      {/* Video Profile */}
      <WhoAre></WhoAre>
      
      <ThanksFor></ThanksFor>
      <OurServices></OurServices>
        <Divider mb={65}></Divider>
      <Highlight > </Highlight>
      <MeetOurClient></MeetOurClient>
      <Box pt={'8vh'} bgColor="#f2f2f2">
        <Testimoni></Testimoni>
      </Box>
    </Box>
  )
}
import { Container, Box, Divider } from "@chakra-ui/react"
import { App as Services } from "@/components/services/app"
import { App as Projects } from "@/components/Projects/app"
import { App as HeroSlides } from "@/components/HeroSlides/app"
import { App as WhoAre } from "@/components/WhoAre/app"
import { App as Whyus } from "@/components/whyus/app"
import { slides } from "@/components/Hero/slides/_dataHome"
import { slides_pro } from "@/components/Projects/_data"
import { App as ThanksFor } from "@/components/ThanksFor/app"
import { App as Highlight } from "@/components/Highlight/app"
import { App as OurServices } from "@/components/OurServices/app"
import { App as MeetOurClient } from "@/components/MeetOurClient/app"
import { App as ApaKataMereka } from "@/components/ApaKataMereka/app"

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
        <ApaKataMereka></ApaKataMereka>
      </Box>
    </Box>
  )
}
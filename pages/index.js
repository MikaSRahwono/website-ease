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

export default function Home() {

  return (
    <Box style={{ backgroundColor:'#f2f2f2',  backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM91 60h-2V40h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM39.32 74l-1 1.732-17.32-10L22 64l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM71 80h-2V60h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM120 89v2h-20v-2h20zm-84.134 9.16l-1.732 1-10-17.32 1.732-1 10 17.32zM51 100h-2V80h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM100 109v2H80v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM31 120h-2v-20h2v20z' fill='%23dac17e' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`}}
    >
      <HeroSlides ></HeroSlides>
      {/* Video Profile */}
      <WhoAre></WhoAre>
      <ThanksFor></ThanksFor>
      <Highlight > </Highlight>
      <Container maxW='70vw' >
        <Box mt={30} width='70vw'>
          {/* Our Services */}
          <Box>
            <Services></Services>
          </Box>
          <Divider mb={65} ></Divider>
          {/* Why Us */}
          <Box mb='50'>
            <Whyus></Whyus>
          </Box>
          {/* Recent Projects */}
          <Box>
            <Projects slides={slides_pro}></Projects>
          </Box>
          <Box height='15vh'></Box>
        </Box>
      </Container>
    </Box>
  )
}
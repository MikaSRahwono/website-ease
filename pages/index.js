import { Container, Box, Divider } from "@chakra-ui/react"
import { App as Services } from "@/components/services/app"
import { App as Projects } from "@/components/Projects/app"
import { App as Hero } from "@/components/Hero/app"
import { App as WhoAre } from "@/components/WhoAre/app"
import { App as Whyus } from "@/components/whyus/app"
import { slides } from "@/components/Hero/slides/_dataHome"
import { slides_pro } from "@/components/Projects/_data"

export default function Home() {
  return (
    <Box background="#000000">
      <Hero slides={slides}></Hero>
      {/* Video Profile */}
      <WhoAre></WhoAre>
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
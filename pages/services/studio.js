import { Container, Box, Heading, Show, Text, Center, Divider } from "@chakra-ui/react"
import { App as Projects } from "@/components/Projects/app"
import { App as Hero } from "@/components/Hero/app"
import { slides } from "@/components/Hero/slides/_dataStudio"
import { slides_pro } from "@/components/Projects/_data"
import { App as Pricing } from "@/components/pricing/app"
import { App as Terms } from "@/components/Terms/app"
import { app as FAQ } from "@/components/FAQ/app"

export default function Home() {
  return (
    <Box background="#000000">
      <Hero slides={slides}></Hero>
      <Container maxW='70vw' >
        <Box mt={50} width='70vw'>
          {/* Recent Projects */}
          <Box>
            <Projects slides={slides_pro}></Projects>
          </Box>

          {/* Pricing */}
          <Box>
            <Pricing></Pricing>
          </Box>

          {/* Terms of Service */}
          <Box>
            <Terms></Terms>
          </Box>

          {/* Frequently Asked Questions */}
          <Box>
            <FAQ></FAQ>
          </Box>
          <Box height='50vh'></Box>
        </Box>
      </Container>
    </Box>
  )
}
import { Box, Container, Flex, Heading } from "@chakra-ui/react"
import React from "react"

const Home = () => {
  return (
    <Container>
      <Flex borderRadius={"lg"} bg={"red"} p={3} mb={6} align={"center"}>
        Hello, I'm a full-stack developer based in Brazil!
      </Flex>
      <Box display={{md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as={"h2"} variant={"page-title"}>
            Glauber Santana
          </Heading>
        <p>Digital Carpenter (Musician / Developer / Pun Maker ) </p>
        </Box>
      </Box>
    </Container>
  )
}

export default Home

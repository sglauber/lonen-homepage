import Head from "next/head"
import { Box, Container } from "@chakra-ui/react"

import Navbar from "../Navbar/Navbar"

const Main = ({ router, children }: any) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Lonen's homepage" />
        <meta name="author" content="Glauber Santana" />
        <meta name="author" content="Lonen" />
        <title>Lonen's - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW={"md"} pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main

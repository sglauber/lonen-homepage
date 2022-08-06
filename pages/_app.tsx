import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/layouts/Main"
import React from "react"

const App = ({ Component, pageProps, router }:any) => {
  return (
    <ChakraProvider resetCSS>
      <Layout router={router}>
        <Component {...pageProps} router={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default App;
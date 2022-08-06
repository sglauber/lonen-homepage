import Link from "next/link"
import Image from "next/image"

import React from "react"
import { Text, useColorModeValue } from "@chakra-ui/react"
import LogoBox from "./LogoBox"
import logoImage from "public/images/logo.jpg"

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={logoImage} width={20} height={20} alt="Logo"></Image>
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            Glauber Santana
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo

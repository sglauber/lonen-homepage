import LinkItem from "components/LinkItem/LinkItem"
import Logo from "components/Logo/Logo"

import NextLink from "next/link"

import { HamburgerIcon } from "@chakra-ui/icons"

import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react"

const Navbar = ({ path, ...rest }: any) => {
  return (
    <Box
      position={"fixed"}
      as={"nav"}
      w={"100%"}
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      {...rest}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        alignContent="center"
        justifyItems="space-between"
      >
        <Flex align={"center"} mr={5}>
          <Heading as={"h1"} size={"lg"} letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href={"/works"} path={path}>
            Works
          </LinkItem>
          <LinkItem href={"/posts"} path={path}>
            Posts
          </LinkItem>
          <LinkItem href={"/others"} path={path}>
            Others
          </LinkItem>
        </Stack>
        <Box display={"flex"} alignContent={"right"}>
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant={"outline"}
                aria-label={"Options"}
              />
              <MenuList>
                <NextLink href={"/about"} passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href={"/works"} passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href={"/others"} passHref>
                  <MenuItem as={Link}>Others</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar

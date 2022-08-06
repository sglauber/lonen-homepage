import NextLink from "next/link"
import { Link, useColorModeValue } from "@chakra-ui/react"
const LinkItem = ({ href, path, children, target, ...props }: any) => {
  const active = path === href
  const inactiveColor = useColorModeValue("gray.200", "whiteAlpha.900")
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

export default LinkItem

import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/logo.webp"
import React from 'react'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding="10px" mr="5px">
        <Image src={logo} boxSize="60px"></Image>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
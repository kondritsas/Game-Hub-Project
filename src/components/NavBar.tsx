import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/logo.webp"
import React from 'react'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
  onSearch: (searchText:string) => void
}

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack justifyContent='space-between' padding="10px" mr="5px">
        <Image src={logo} boxSize="60px"></Image>
        <SearchInput onSearch={onSearch}></SearchInput>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar

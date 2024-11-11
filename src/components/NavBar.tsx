import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import useGameQueryStore from "../store";

const NavBar = () => {
  const resetGameQuery = useGameQueryStore((s) => s.resetGameQuery);
  return (
    <HStack
      justifyContent="space-between"
      padding="10px"
      mr="5px"
      backgroundColor="gray.800"
    >
      <Link to={"/"} onClick={resetGameQuery}>
        <Image src={logo} boxSize="60px" objectFit="cover"></Image>
      </Link>
      <SearchInput></SearchInput>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

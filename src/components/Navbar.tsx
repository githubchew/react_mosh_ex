import React from "react";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Surge-Select-Still-1024x806.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;

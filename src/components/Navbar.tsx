import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Surge-Select-Still-1024x806.webp";
const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>Navbar text</Text>
    </HStack>
  );
};

export default Navbar;

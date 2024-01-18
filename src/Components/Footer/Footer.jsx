import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../../Assets/Image/Logo1.png";
const Footer = () => {
  return (
    <Flex backgroundColor={"white"} w={"100%"}>
      <Flex justify={"space-between"} flexDir={"row"} w={"100%"}>
        <Text w={"30%"}>Страницы </Text>{" "}
        <Image w={"40%"} src={Logo} h={"200px"} />
        <Text w={"30%"}>Меню</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;

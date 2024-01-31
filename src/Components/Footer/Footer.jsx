import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../../Assets/Image/Logo1.png";
const Footer = () => {
  return (
    <Flex
      backgroundColor={"white"}
      w={"100%"}
      h={"80px"}
      bottom={"0"}
      mt={"20px"}
      borderTop={"1px solid #ccc"}
    >
      <Flex justify={"space-between"} flexDir={"row"} w={"100%"}>
        <Text w={"30%"}>Страницы </Text>{" "}
        <Image w={"40%"} src={Logo} h={"160px"} />
        <Text w={"30%"}>Меню</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;

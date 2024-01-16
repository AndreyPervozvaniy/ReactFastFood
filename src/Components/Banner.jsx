import React from "react";
import Logo from "../Assets/Image/Logo1.png";
import { Flex, Image, Text } from "@chakra-ui/react";
const Banner = () => {
  return (
    <Flex justifyContent={"center"} mt={20} flexDir={"column"}>
      <Flex justify={"center"}>
        <Text
          pos={"absolute"}
          border={"2px solid white"}
          background={"white"}
          my={-4}
          fontWeight={"bold"}
          borderRadius={"5px"}
          fontSize={"xl"}
          px={4}
        >
          Доставка в каждый город
        </Text>
        <Image src={Logo} w={"400px"} border={"2px solid black"} />{" "}
        <Flex
          pos={"absolute"}
          border={"1px solid white"}
          h={"10px"}
          w={40}
          justifyContent={"center"}
          alignItems={"center"}
          mt={"131px"}
          backgroundColor={"white"}
        ></Flex>
      </Flex>
    </Flex>
  );
};

export default Banner;

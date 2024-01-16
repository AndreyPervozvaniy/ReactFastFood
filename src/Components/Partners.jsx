import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import cola from "../Assets/Image/colalogo.png";
import vilenas from "../Assets/Image/vilenas.png";
import watatsumi from "../Assets/Image/watatsumi.png";

const Partners = () => {
  return (
    <Flex flexDir={"column"} justify={"center"} textAlign={"center"}>
      <Text p={5} textAlign={"center"} fontWeight="extrabold" fontSize={"4xl"}>
        Партнеры:
      </Text>
      <Flex justifyContent={"space-around"} alignItems={"center"}>
        {" "}
        <Image w={250} src={cola} /> <Image w={400} h="200px" src={vilenas} />{" "}
        <Image w={250} h={200} src={watatsumi} />
      </Flex>
    </Flex>
  );
};

export default Partners;

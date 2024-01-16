import React from "react";
import { Flex, Icon, Image, Text, Box } from "@chakra-ui/react";
import Logo from "../../Assets/Image/Logo1.png";
import { IoMdTime, IoMdCall } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
const Header = () => {
  return (
    <Flex pos={"fixed"} w={"100%"} h="120px" background={"white"}>
      <Flex flexDir={"column"} justifyContent={"center"} w={"30%"} ml={5}>
        <Flex alignItems={"center"}>
          <Icon as={IoMdTime} h={8} w={8} color={"black"} mx={2} />
          <Text color="black" fontWeight={"bold"}>
            {" "}
            Мы работаем с 10-00 до 21-00
          </Text>
        </Flex>
        <Flex w={"100%"} alignItems={"center"} justify={"start"}>
          <Icon as={IoMdCall} h={8} w={8} color={"black"} mx={2} />
          <Text
            color={"#ccc"}
            cursor={"pointer"}
            transition={"ease 1s"}
            _hover={{ color: "black" }}
          >
            7500 (Обратная связь)
          </Text>
        </Flex>
      </Flex>
      <Flex alignItems={"center"} justify={"center"} w={"40%"}>
        <Image src={Logo} w={"300px"} cursor={"pointer"} />
      </Flex>
      <Flex w={"30%"} alignItems={"center"} justify={"end"} mr={5}>
        <Flex
          borderRadius={"8px"}
          border={"1px solid black"}
          p={2}
          alignItems={"center"}
        >
          <Text color="black">Корзина</Text>
          <Text mx={2} color={"black"}>
            0 UAH.
          </Text>
          <Icon as={CiShoppingCart} h={8} w={8} color={"black"} mx={2} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;

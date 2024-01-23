import React from "react";
import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import Logo from "../../Assets/Image/Logo1.png";
import { IoMdTime, IoMdCall } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";
import { NavBarData } from "../../Utills/Utills";

const Header = () => {
  const router = useNavigate();
  const currentLocation = useLocation();

  return (
    <Flex
      pos={"absolute"}
      w={"100%"}
      h="200px"
      background={"white"}
      flexDir={"column"}
    >
      <Flex>
        <Flex flexDir={"column"} justifyContent={"center"} w={"30%"} ml={5}>
          <Flex alignItems={"center"}>
            <Icon as={IoMdTime} h={8} w={8} color={"black"} mx={10} />
            <Text color="black" fontWeight={"bold"}>
              {" "}
              Мы работаем с 10-00 до 21-00
            </Text>
          </Flex>
          <Flex w={"100%"} alignItems={"center"} justify={"start"}>
            <Icon as={IoMdCall} h={8} w={8} color={"black"} mx={10} />
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
          <Image
            src={Logo}
            w={"300px"}
            cursor={"pointer"}
            onClick={() => router("/")}
          />
        </Flex>
        <Flex w={"30%"} alignItems={"center"} justify={"end"} mr={10}>
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
            <Icon
              as={CiShoppingCart}
              h={8}
              w={8}
              color={"black"}
              mx={2}
              onClick={() => router("/bag")}
              cursor={"pointer"}
            />
          </Flex>
        </Flex>
      </Flex>

      <Flex justify={"center"}>
        <Flex
          flexDir={"row"}
          justifyContent={"space-between"}
          borderTop={"2px solid #ccc"}
          transition={"ease-in-out 0.5s"}
          w={"90%"}
          _hover={{ borderColor: "black" }}
          alignItems={"center"}
          h={100}
        >
          {NavBarData.map((item, index) => (
            <Flex
              borderBottom={
                currentLocation.pathname === item.router
                  ? "2px solid green"
                  : "2px solid transparent"
              }
              justify={"center"}
              alignItems={"center"}
              onClick={() => router(item.router)}
              _hover={{
                backgroundColor: "#ccc",
                borderBottom: "2px solid red",
              }}
              h={"100%"}
              overflow={"hidden"}
              w={"100%"}
              cursor={"pointer"}
              flexDir={"column"}
            >
              {" "}
              <Icon as={item.icon} h={12} w={12} />
              <Text fontWeight={"bold"}>{item.text}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;

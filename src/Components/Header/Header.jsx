import React, { useState, useEffect } from "react";
import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import Logo from "../../Assets/Image/Logo1.png";
import { IoMdTime, IoMdCall } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";
import { NavBarData } from "../../Utills/Utills";

const Header = () => {
  const router = useNavigate();
  const currentLocation = useLocation();
  const [showBag, setShowBag] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 200;
      if (window.scrollY > scrollThreshold) {
        setShowBag(true);
      } else {
        setShowBag(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Flex w={"100%"} background={"white"} flexDir={"column"}>
      <Flex backgroundColor={"#decb6a"} h={"30px"}>
        <Text>'</Text>
      </Flex>
      <Flex justify={"space-around"}>
        <Flex flexDir={"column"} justifyContent={"center"}>
          <Flex alignItems={"center"}>
            <Icon as={IoMdTime} h={8} w={8} color={"black"} mx={5} />
            <Text color="black" fontWeight={"bold"}>
              {" "}
              Мы работаем с 10-00 до 21-00
            </Text>
          </Flex>
          <Flex alignItems={"center"} justify={"start"}>
            <Icon as={IoMdCall} h={8} w={8} color={"black"} mx={5} />
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
        <Flex alignItems={"center"} justify={"center"}>
          <Image
            src={Logo}
            w={"300px"}
            cursor={"pointer"}
            onClick={() => router("/")}
            mr={10}
          />
        </Flex>
        <Flex
          alignItems={"center"}
          justify={"end"}
          pos={showBag && "fixed"}
          top={showBag && "0"}
          right={showBag && "20"}
          backgroundColor={showBag && "white"}
          borderRadius={"8px"}
          zIndex={1}
        >
          <Flex
            borderRadius={"8px"}
            border={"1px solid black"}
            p={4}
            alignItems={"center"}
            w={"300px"}
            justifyContent={"center"}
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
          borderTop={"3px solid #ccc"}
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
                  ? "3px solid green"
                  : "3px solid transparent"
              }
              justify={"center"}
              alignItems={"center"}
              onClick={() => router(item.router)}
              _hover={{
                backgroundColor: "#ccc",
                borderBottom: "3px solid red",
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

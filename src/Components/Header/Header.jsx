import React, { useState, useEffect } from "react";
import { Flex, Icon, Image, Text, IconButton } from "@chakra-ui/react";
import Logo from "../../Assets/Image/Logo1.png";
import { IoMdTime, IoMdCall } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";
import { NavBarData } from "../../Utills/Utills";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { SlBag } from "react-icons/sl";
import { useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";

const Header = () => {
  const { totalPrice, totalCount } = useSelector((state) => state.CartSlice);
  const router = useNavigate();
  const currentLocation = useLocation();
  const [elevateBag, setElevateBag] = useState(false);
  const { onClose, onOpen, isOpen } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 200;
      if (window.scrollY > scrollThreshold) {
        setElevateBag(true);
      } else {
        setElevateBag(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const callPhoneNumber = (phoneNumber) => {
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  };
  return (
    <Flex>
      <Flex w={"100%"} background={"white"} flexDir={"column"}>
        <Flex
          backgroundColor={"#decb6a"}
          h={"30px"}
          justify={"center"}
          alignItems={"center"}
          display={{ base: "none", lg: "flex" }}
        >
          <Text> </Text>
        </Flex>
        <Flex justify={"space-around"}>
          <Flex
            flexDir={"column"}
            justifyContent={"center"}
            display={{ base: "none", lg: "flex" }}
          >
            <Flex alignItems={"center"}>
              <Icon as={IoMdTime} h={8} w={8} color={"black"} mx={5} />
              <Text color="black" fontWeight={"bold"}>
                Мы работаем с 10-00 до 21-00
              </Text>
            </Flex>
            <Flex
              alignItems={"center"}
              justify={"start"}
              onClick={() => callPhoneNumber("7500")}
              cursor={"pointer"}
            >
              <Icon as={IoMdCall} h={8} w={8} color={"black"} mx={5} />
              <Text
                color={"#ccc"}
                transition={"ease 1s"}
                _hover={{ color: "black" }}
              >
                7500 (Обратная связь)
              </Text>
            </Flex>
          </Flex>{" "}
          <Image
            src={Logo}
            w={{ base: "150px", md: "200px", lg: "250px" }}
            cursor={"pointer"}
            onClick={() => router("/")}
            mr={10}
          />
          <Flex
            display={{ base: "none", lg: "flex" }}
            alignItems={"center"}
            justify={"end"}
            pos={elevateBag && currentLocation.pathname !== "/bag" && "fixed"}
            top={elevateBag && "0"}
            right={elevateBag && "20"}
            backgroundColor={elevateBag && "white"}
            borderRadius={"8px"}
            zIndex={1}
            onClick={() => router("/bag")}
            cursor={"pointer"}
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
                {totalPrice} UAH.
              </Text>
              <Icon as={CiShoppingCart} h={8} w={8} color={"black"} mx={2} />
              <Text>{totalCount}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex justify={"center"} display={{ base: "none", lg: "flex" }}>
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
                key={index}
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
        </Flex>{" "}
      </Flex>
      <Flex
        flexDir={"column"}
        display={{ base: "inherit", lg: "none" }}
        pos={"fixed"}
        w={"100%"}
        zIndex={3}
      >
        <Flex
          backgroundColor={"white"}
          alignItems={"center"}
          justify={{ base: "space-between", lg: "space-around" }}
          w={{ base: "100%", lg: "inherit" }}
          px={{ base: "5%", lg: "0px" }}
        >
          <IconButton
            size="sm"
            icon={<GiHamburgerMenu />}
            aria-label="Open Menu"
            display={{ base: "inherit", lg: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Image
            src={Logo}
            w={{ base: "150px", md: "200px", lg: "250px" }}
            cursor={"pointer"}
            onClick={() => router("/")}
            mr={10}
          />
        </Flex>{" "}
        <Flex
          p={2}
          backgroundColor={"#decb6a"}
          display={{ base: "inherit", lg: "none" }}
          justify={"space-between"}
          alignItems={"center"}
          onClick={() => router("/bag")}
        >
          <Text fontWeight={"bold"}>Итого : {totalPrice} Грн.</Text>
          <Flex justify={"center"} alignItems={"center"}>
            <Icon as={SlBag} w={8} h={8} />
            <Text mt={2} pos={"absolute"}>
              {totalCount}
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size={"full"}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Меню</DrawerHeader>
            <DrawerBody
              bgColor={"white"}
              overflowY="auto"
              fontWeight={"bold"}
              h={"100%"}
            >
              <Flex
                flexDir={"column"}
                justifyContent={"start"}
                w={"100%"}
                alignItems={"center"}
              >
                {NavBarData.map((item, index) => (
                  <Flex
                    mt={2}
                    key={index}
                    borderBottom={
                      currentLocation.pathname === item.router
                        ? "3px solid green"
                        : "3px solid transparent"
                    }
                    justify={"start"}
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
                    flexDir={"row"}
                  >
                    {" "}
                    <Icon as={item.icon} h={8} w={8} />
                    <Text ml={2} fontWeight={"bold"}>
                      {item.text}
                    </Text>
                  </Flex>
                ))}
              </Flex>{" "}
              <Flex alignItems={"center"} mt={2} justify={"center"}>
                <Icon as={IoMdTime} h={8} w={8} color={"black"} />
                <Text ml={2} color="black" fontWeight={"bold"}>
                  Мы работаем с 10-00 до 21-00
                </Text>
              </Flex>{" "}
              <Flex
                mt={2}
                alignItems={"center"}
                justify={"center"}
                onClick={() => callPhoneNumber("7500")}
                cursor={"pointer"}
              >
                <Icon as={IoMdCall} h={8} w={8} color={"black"} mx={5} />
                <Text>7500 (Обратная связь)</Text>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  );
};

export default Header;

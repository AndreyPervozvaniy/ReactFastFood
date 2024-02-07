import { Flex, Icon, Image, Text, Link } from "@chakra-ui/react";
import React from "react";
import Logo from "../../Assets/Image/Logo1.png";
import { useNavigate } from "react-router-dom";
import { FloatingBtnData } from "../../Utills/Utills";

const Footer = () => {
  const router = useNavigate();
  return (
    <Flex
      backgroundColor={"white"}
      h={"200px"}
      bottom={"0"}
      right={0}
      left={0}
      mt={"20px"}
      borderTop={"1px solid #ccc"}
      justify={"center"}
    >
      <Flex w={"100%"} flexDir={"column"}>
        <Flex justify={"space-between"} alignItems={"center"} w={"100%"}>
          <Text> </Text>{" "}
          <Image
            cursor={"pointer"}
            onClick={() => router("/")}
            src={Logo}
            h={{ base: "70px", lg: "100px" }}
          />
          <Text> </Text>
        </Flex>
        <Flex justify={"center"} alignItems={"center"} mt={5}>
          <Flex justify={"space-between"} w={"30%"}>
            {FloatingBtnData.map((item, index) => (
              <Flex key={index}>
                <Link href={item.href} isExternal>
                  <Icon as={item.icon} w={6} h={6} cursor={"pointer"} />
                </Link>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex
          justify={"center"}
          mt={5}
          textAlign={"center"}
          flexWrap={"wrap"}
          px={4}
        >
          <Text>© 2024 Все права защищены - burger-lord Днепр.</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;

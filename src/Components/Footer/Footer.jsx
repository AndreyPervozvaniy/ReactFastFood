import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../../Assets/Image/Logo1.png";
import { FaTelegram, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const router = useNavigate();
  return (
    <Flex
      backgroundColor={"white"}
      h={"200px"}
      bottom={"0"}
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
            h={"100px"}
          />
          <Text> </Text>
        </Flex>
        <Flex justify={"center"} alignItems={"center"}>
          <Flex justify={"space-between"} w={"10%"}>
            <Link to={"https://t.me/AndreyPervozvaniy"} isExternal>
              <Icon as={FaTelegram} w={6} h={6} cursor={"pointer"} />
            </Link>
            <Link
              to={
                "https://www.instagram.com/andreypervozvaniy?igsh=YndvcDNzOHhtd2E4&utm_source=qr"
              }
              isExternal
            >
              <Icon as={FaInstagram} w={6} h={6} cursor={"pointer"} />
            </Link>
            <Link
              to={
                "https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BA%D1%83%D0%B4%D1%80%D1%8F-24343b168?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              }
              isExternal
            >
              <Icon as={FaLinkedin} w={6} h={6} cursor={"pointer"} />
            </Link>
          </Flex>
        </Flex>
        <Flex justify={"center"} mt={5}>
          <Text>© 2024 Все права защищены - burger-lord Днепр.</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;

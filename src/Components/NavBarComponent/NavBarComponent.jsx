import React from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { NavBarData } from "../../Utills/Utills";
import { useLocation } from "react-router-dom";
const NavBarComponent = ({ ...props }) => {
  const router = useNavigate();
  const currentLocation = useLocation();
  return (
    <Flex {...props}>
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
  );
};

export default NavBarComponent;

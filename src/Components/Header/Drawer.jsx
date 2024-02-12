import {
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Text,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import CustomText from "../CustomElements/CustomText";
import CustomFlex from "../CustomElements/CustomFlex";
import { IoMdTime, IoMdCall } from "react-icons/io";
import { useNavigate, useLocation } from "react-router";
import { NavBarData } from "../../Utills/Utills";
const DrawerTemplate = ({ onClose, isOpen }) => {
  const router = useNavigate();
  const currentLocation = useLocation();
  const callPhoneNumber = (phoneNumber) => {
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  };
  return (
    <Flex>
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
              <CustomFlex justifyContent={"start"} alignItems={"center"}>
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
                    <CustomText ml={2}>{item.text}</CustomText>
                  </Flex>
                ))}
              </CustomFlex>{" "}
              <Flex alignItems={"center"} mt={2} justify={"center"}>
                <Icon as={IoMdTime} h={8} w={8} color={"black"} />
                <CustomText ml={2} color="black">
                  Мы работаем с 10-00 до 21-00
                </CustomText>
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

export default DrawerTemplate;

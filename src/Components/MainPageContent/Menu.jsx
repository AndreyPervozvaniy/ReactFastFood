import { Text, Flex, Image, Box } from "@chakra-ui/react";
import React from "react";
import { MenuData } from "../../Utills/Utills";
const Menu = () => {
  return (
    <Flex justify={"center"} alignItems={"center"} flexDir={"column"}>
      <Text
        fontWeight={"extrabold"}
        fontSize={"3xl"}
        textAlign={"center"}
        w={"90%"}
      >
        Отличный выбор блюд японской, европейской и американской кухни с
        доставкой только в Burger Lord
      </Text>
      <Flex flexDir={"column"} w={"100%"}>
        {MenuData.map((item, index) => (
          <Flex justify={"center"} flexDir={"row"}>
            <Flex
              w={"95%"}
              h={"400px"}
              my={5}
              bgPosition={"-100px"}
              bgImage={item.image}
              borderRadius={"10px"}
              justifyContent={"end"}
              textAlign={"center"}
            >
              {" "}
              <Flex
                flexDirection={"column"}
                pos={"absolute"}
                color={"white"}
                fontWeight={"bold"}
                backgroundColor={"#231f20"}
                w={"500px"}
                h={"400px"}
                justify={"center"}
              >
                <Text textAlign={"start"} fontSize={"2xl"}>
                  {" "}
                  {item.title}
                </Text>{" "}
                <Box
                  w={"100px"}
                  h={"5px"}
                  border={"1px solid blue"}
                  backgroundColor={"blue"}
                ></Box>
                <Text textAlign={"start"} fontSize={"lg"}>
                  {" "}
                  {item.text}
                </Text>
              </Flex>
            </Flex>{" "}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Menu;

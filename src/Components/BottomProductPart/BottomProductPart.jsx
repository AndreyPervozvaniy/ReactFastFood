import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { bottomProductData } from "../../Utills/Utills";
const BottomProductPart = (props) => {
  return (
    <Flex mt={10} p={10}>
      {bottomProductData
        .filter((item) => item.page === props.page)
        .map((item, index) => (
          <Flex key={item.id} flexDir={"row"} justifyContent={"space-between"}>
            <Flex flexDir="column" w={"70%"}>
              <Text fontWeight={"bold"} fontSize={"4xl"}>
                {item.title1}
              </Text>
              <Text mt={5} fontWeight={"bold"} fontSize={"xl"}>
                {item.text1}
              </Text>{" "}
              <Text mt={10} fontWeight={"bold"} fontSize={"4xl"}>
                {item.title2}
              </Text>
              <Text mt={5} fontWeight={"bold"} fontSize={"xl"}>
                {item.text2}
              </Text>
            </Flex>
            <Flex
              w={"350px"}
              h={"600px"}
              border="1px solid black"
              flexDir={"column"}
            >
              <Text> Тут будет </Text>
              <Text> брошура хуюра мать ее </Text>
            </Flex>
          </Flex>
        ))}
    </Flex>
  );
};

export default BottomProductPart;

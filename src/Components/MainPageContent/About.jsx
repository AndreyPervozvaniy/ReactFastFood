import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { AboutData } from "../../Utills/Utills";
const About = () => {
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      my={10}
    >
      <Text
        border={"2px solid black"}
        textAlign={"center"}
        w="70%"
        fontWeight={"bold"}
        fontSize={"xl"}
        p={4}
      >
        Мы предлагаем широкий ассортимент азиатской и европейской кухни: роллы,
        супы, пицца и суши - доставка по Харькову всего нашего меню в считанные
        минуты!
      </Text>
      <Flex flexDir={"column"} my={10} p={10}>
        {AboutData.map((item, index) => (
          <Flex flexDir={"row"} my={5}>
            <Flex flexDir={"column"} w={"55%"} mx={10}>
              <Text fontWeight={"bold"} fontSize={"3xl"}>
                {item.title}
              </Text>
              <Box
                border={"1px solid blue"}
                w={100}
                h={1}
                backgroundColor={"blue"}
                my={5}
              ></Box>
              <Text fontWeight={"bold"}>{item.text}</Text>
            </Flex>

            <Image src={item.image} w={"550px"} borderRadius={"15px"} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default About;

import { Box, Container, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { GiCook, GiSushis, GiFruitBowl } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { BenefitData } from "../../Utills/Utills";
const Benefit = () => {
  return (
    <Flex
      justifyContent={"center"}
      p={10}
      flexDir={"column"}
      textAlign={"center"}
    >
      <Text fontSize={"lg"} fontWeight={"bold"}>
        Привносим ресторанное качество в еду с доставкой.
      </Text>
      <Container maxW={"7xl"} my={10}>
        <Flex justify={"center"} flexWrap="wrap" gridGap={6}>
          {BenefitData.map((item, index) => (
            <Flex
              key={index}
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              w={"250px"}
              flex={1}
            >
              <Box borderRadius={"50%"} p={5} backgroundColor={item.color}>
                <Icon as={item.icon} w={20} h={20} color={"white"} />
              </Box>

              <Text fontWeight={"bold"} fontSize={"xl"} mt={2}>
                {item.title}
              </Text>
              <Box w={"80px"} h={"5px"} backgroundColor={item.color} my={2}>
                {" "}
              </Box>
              <Text fontWeight={"bold"} mt={4}>
                {item.mainText}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Container>
    </Flex>
  );
};

export default Benefit;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaRegSmileBeam, FaStar } from "react-icons/fa";
import { Container, Flex, Icon, Text } from "@chakra-ui/react";
const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    function getData() {
      const request = axios
        .get("https://659fbce75023b02bfe8a5607.mockapi.io/ReveiwData")
        .then((res) => setReview(res.data));
    }
    getData();
  }, []);
  return (
    <Flex justify={"center"} textAlign={"center"} flexDir={"column"}>
      <Text p={5} textAlign={"center"} fontWeight="extrabold" fontSize={"4xl"}>
        Отзывы
      </Text>
      <Container maxW={"7xl"} mt={12}>
        <Flex justify={"center"} flexWrap="wrap" gridGap={2}>
          {review.map((item, index) => (
            <Flex
              w={"600px"}
              border={"1px solid #ccc"}
              borderRadius={"5px"}
              p={4}
              backgroundColor={"white"}
            >
              <Icon as={FaRegSmileBeam} w={12} h={12} />
              <Flex flexDir={"column"} textAlign={"start"} mx={2}>
                {" "}
                <Text fontWeight={"bold"}>
                  {item.name} {item.data}
                </Text>
                <Flex my={3} flexDir={"column"}>
                  <Text
                    color={"blue"}
                    textDecor={"underline"}
                    cursor={"pointer"}
                  >
                    {item.dish}
                  </Text>
                  <Flex>
                    {" "}
                    {[...Array(5)].map((item, index) => (
                      <Icon key={index} as={FaStar} color={"#c78500"} />
                    ))}
                  </Flex>
                </Flex>
                <Text fontWeight={"bold"}>{item.comments}</Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Container>
    </Flex>
  );
};

export default Review;

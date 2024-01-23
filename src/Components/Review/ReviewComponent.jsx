import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Icon, Flex, Text } from "@chakra-ui/react";
import { FaRegSmileBeam, FaStar } from "react-icons/fa";
const ReviewComponent = (props) => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    function getData() {
      axios
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
      <Container maxW={"7xl"} mt={2}>
        <Flex justify={"center"} flexWrap="wrap" gridGap={2}>
          {review
            .filter((item) => item.page === props.page)
            .map((item, index) => (
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
                      {[...Array(5)].map((_, index) => (
                        <Icon
                          key={index}
                          as={FaStar}
                          color={index < item.starCount ? "#c78500" : "gray"} // Используйте серый цвет для незакрашенных звезд
                          h={4}
                          w={4}
                        />
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

export default ReviewComponent;

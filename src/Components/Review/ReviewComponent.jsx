import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Icon, Flex, Text } from "@chakra-ui/react";
import { FaRegSmileBeam, FaStar } from "react-icons/fa";
import SkeletonReview from "../Skeleton/SkeletonReview";
const ReviewComponent = (props) => {
  const [review, setReview] = useState([]);
  const [reviewLoading, setReviewLoading] = useState(true);
  function getData() {
    axios
      .get("https://659fbce75023b02bfe8a5607.mockapi.io/ReveiwData")
      .then((res) => {
        setReview(res.data);
        setReviewLoading(false);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <Flex justify={"center"} textAlign={"center"} flexDir={"column"}>
      <Text p={5} textAlign={"center"} fontWeight="extrabold" fontSize={"4xl"}>
        Отзывы
      </Text>
      <Container maxW={"7xl"} mt={2}>
        <Flex justify={"center"} flexWrap="wrap" gridGap={2}>
          {reviewLoading
            ? [...new Array(6)].map((_, index) => (
                <SkeletonReview key={index} />
              ))
            : review
                .filter((item) => item.page === props.page)
                .map((item) => (
                  <Flex
                    key={item.id}
                    w={"500px"}
                    border={"1px solid #ccc"}
                    borderRadius={"5px"}
                    p={2}
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
                          cursor={"default"}
                        >
                          {item.dish}
                        </Text>
                        <Flex>
                          {[...Array(5)].map((_, index) => (
                            <Icon
                              key={index}
                              as={FaStar}
                              color={
                                index < item.starCount ? "#c78500" : "gray"
                              }
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

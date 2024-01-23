import { Container, Icon, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
const ProductStack = (props) => {
  const [dataBack, setDataBack] = useState([]);
  useEffect(() => {
    function getData() {
      axios
        .get(`https://65a93323219bfa371868c106.mockapi.io/${props.endpoint}`)
        .then((res) => setDataBack(res.data));
    }
    getData();
  }, [props.endpoint]);

  const [isHovered, setIsHovered] = useState(null);
  return (
    <Flex mt={"200px"} flexDir={"column"}>
      <Flex flexDir={"column"} justify={"center"} alignItems={"center"}>
        {" "}
        <Text p={5} fontWeight={"bold"} fontSize={"4xl"}>
          {props.title}{" "}
        </Text>
        <Container maxW={"7xl"} mt={12}>
          <Flex justify={"center"} flexWrap="wrap" gridGap={2}>
            {dataBack
              .filter((item) => item.type === props.type)
              .map((item, index) => (
                <Flex
                  key={item.id}
                  w={"600px"}
                  border={"1px solid #ccc"}
                  borderRadius={"5px"}
                  p={4}
                  flexDir={"column"}
                  backgroundColor={"white"}
                  onMouseEnter={() => setIsHovered(item.id)}
                  onMouseLeave={() => setIsHovered(null)}
                  cursor={"pointer"}
                >
                  <Text fontWeight={"bold"} fontSize={"3xl"}>
                    {item.name}
                  </Text>
                  <Flex>
                    {[...Array(5)].map((_, index) => (
                      <Icon
                        key={index}
                        as={FaStar}
                        color={index < item.starCount ? "#c78500" : "gray"} // Используйте серый цвет для незакрашенных звезд
                        h={6}
                        w={6}
                      />
                    ))}
                  </Flex>

                  {isHovered === item.id ? (
                    <Flex
                      flexDir={"column"}
                      justify={"center"}
                      alignItems={"center"}
                    >
                      <Image opacity={"20%"} src={item.imageURL} />
                      <Text
                        pos={"absolute"}
                        fontWeight={"bold"}
                        flexWrap={"wrap"}
                        w={"500px"}
                      >
                        {item.consist}
                      </Text>
                    </Flex>
                  ) : (
                    <Flex
                      transition={"ease-out 2s"}
                      flexDir={"column"}
                      justify={"center"}
                      alignItems={"center"}
                    >
                      <Image src={item.imageURL} loading="eager" />
                    </Flex>
                  )}
                  <Flex flexDir={"row"} alignItems={"center"}>
                    <Text fontWeight={"bold"} fontSize={"2xl"}>
                      {item.cost}
                    </Text>
                    <Flex h={"30px"} border={"1px solid black"} mx={2}></Flex>
                    <Text fontSize={"2xl"}>{item.weight}</Text>
                  </Flex>
                </Flex>
              ))}
          </Flex>
        </Container>
      </Flex>
    </Flex>
  );
};

export default ProductStack;

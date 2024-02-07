import { Flex, Text, Icon, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { bottomDescriptionEachPage } from "../../Utills/Utills";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { fetchData } from "../../Redux/DataSlice";
const BottomProductPart = ({ page }) => {
  const { dataFromServer } = useSelector((state) => state.DataSlice);
  const router = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Flex mt={10} p={10}>
      {bottomDescriptionEachPage
        .filter((item) => item.page === page)
        .map((item) => (
          <Flex
            key={item.id}
            flexDir={{ base: "column", lg: "row" }}
            justifyContent={{ base: "center", lg: "space-between" }}
          >
            <Flex
              flexDir="column"
              w={"100%"}
              textAlign={{ base: "center", lg: "left" }}
            >
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
              w={{ base: "100%", lg: "80%" }}
              h={"400px"}
              flexDir={"column"}
              ml={{ base: "0", lg: "2" }}
              p={4}
              backgroundColor={"white"}
            >
              <Text fontWeight={"bold"} fontSize={"3xl"}>
                Хиты продаж
              </Text>
              <Flex border={"1px solid blue"} w={"50px"}>
                {" "}
              </Flex>
              {dataFromServer
                .filter((obj) => obj.starCount > 4)
                .slice(0, 3)
                .map((item) => (
                  <Flex
                    mt={2}
                    key={item.id}
                    flexDir={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    borderTop={"1px solid #ccc"}
                    onClick={() => router(`/fullproduct/${item.id}`)}
                    cursor={"pointer"}
                  >
                    <Flex flexDir={"column"}>
                      <Text fontWeight={"bold"}>{item.name}</Text>{" "}
                      <Flex>
                        {[...Array(5)].map((_, index) => (
                          <Icon
                            key={index}
                            as={FaStar}
                            color={index < item.starCount ? "#c78500" : "gray"} // Используйте серый цвет для незакрашенных звезд
                            h={3}
                            w={3}
                          />
                        ))}
                      </Flex>{" "}
                      <Text fontWeight={"bold"}>{item.cost} грн.</Text>{" "}
                    </Flex>
                    <Image src={item.imageURL} w={"150px"} h={"100px"} />
                  </Flex>
                ))}
            </Flex>
          </Flex>
        ))}
    </Flex>
  );
};

export default BottomProductPart;

import { Flex, Icon, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { btmDescription } from "../../Utills/Utills";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { fetchDataFromAPI } from "../../Redux/DataSlice";
import CustomText from "../CustomElements/CustomText";
import CustomFlex from "../CustomElements/CustomFlex";
const BottomProductPart = ({ page }) => {
  const { dataFromServer } = useSelector((state) => state.DataSlice);
  const router = useNavigate();
  useEffect(() => {
    fetchDataFromAPI();
  }, []);
  return (
    <Flex mt={10} p={10}>
      {btmDescription
        .filter((item) => item.page === page)
        .map((item) => (
          <Flex
            key={item.id}
            flexDir={{ base: "column", lg: "row" }}
            justifyContent={{ base: "center", lg: "space-between" }}
          >
            <CustomFlex textAlign={{ base: "center", lg: "left" }}>
              <CustomText fontSize={"4xl"}>{item.title1}</CustomText>
              <CustomText mt={5} fontSize={"xl"}>
                {item.text1}
              </CustomText>{" "}
              <CustomText mt={10} fontSize={"4xl"}>
                {item.title2}
              </CustomText>
              <CustomText mt={5} fontSize={"xl"}>
                {item.text2}
              </CustomText>
            </CustomFlex>
            <Flex
              w={{ base: "100%", lg: "80%" }}
              h={"400px"}
              flexDir={"column"}
              ml={{ base: "0", lg: "2" }}
              p={4}
              backgroundColor={"white"}
            >
              <CustomText fontSize={"3xl"}>Хиты продаж</CustomText>
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
                      <CustomText>{item.name}</CustomText>
                      <Flex>
                        {[...Array(5)].map((_, index) => (
                          <Icon
                            key={index}
                            as={FaStar}
                            color={index < item.starCount ? "#c78500" : "gray"}
                            h={3}
                            w={3}
                          />
                        ))}
                      </Flex>{" "}
                      <CustomText>{item.cost} грн.</CustomText>{" "}
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

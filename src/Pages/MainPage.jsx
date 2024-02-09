import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  AboutData,
  MenuData,
  PartnersData,
  BenefitData,
} from "../Utills/Utills";
import {
  Container,
  Icon,
  Flex,
  Image,
  Text,
  Box,
  Stack,
} from "@chakra-ui/react";
import Logo from "../Assets/Image/Logo1.png";
import AccordionTemplate from "../Components/MainPageContent/AccordionTemplate";
import CarouselTemplate from "../Components/MainPageContent/Carousel";
import ReviewComponent from "../Components/Review/ReviewComponent";
import Elevator from "../Components/ElevatorComponent/Elevator";
import ProductStack from "../Components/ProductStack/ProductStack";
import FloatingBtnContant from "../Components/FloatingBtnContact/FloatingBtnContact";
import CustomText from "../Components/CustomElements/CustomText";
import CustomFlex from "../Components/CustomElements/CustomFlex";
const MainPage = () => {
  return (
    <>
      <Elevator />

      <Header />
      <Flex flexDir={"column"} mt={{ base: "95px", lg: "0px" }}>
        <CarouselTemplate />
        <ProductStack type="sets" title={"Вкусные новинки"} customMT="10px" />
        <Flex flexDir={"column"} justify={"center"} textAlign={"center"}>
          <Text
            p={5}
            textAlign={"center"}
            fontWeight="extrabold"
            fontSize={"4xl"}
          >
            Партнеры:
          </Text>
          <Flex
            justifyContent={"space-around"}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            {PartnersData.map((item, index) => (
              <Flex key={index} p={"5%"}>
                <Image src={item.image} />
              </Flex>
            ))}
          </Flex>
        </Flex>
        <ReviewComponent page="Main" />
        <Flex justify={"center"} p={10}>
          <CustomText
            pos={"absolute"}
            border={"2px solid white"}
            background={"white"}
            my={-4}
            borderRadius={"5px"}
            fontSize={{ base: "small", xl: "large" }}
            px={4}
          >
            Доставка в каждом городе
          </CustomText>
          <Flex border={"2px solid black"}>
            {" "}
            <Image src={Logo} w={"400px"} />{" "}
          </Flex>

          <Flex
            pos={"absolute"}
            border={"1px solid white"}
            h={"10px"}
            w={40}
            justifyContent={"center"}
            alignItems={"center"}
            mt={"131px"}
            backgroundColor={"white"}
          ></Flex>
        </Flex>{" "}
        <Flex
          justifyContent={"center"}
          p={10}
          flexDir={"column"}
          textAlign={"center"}
        >
          <CustomText fontSize={"lg"}>
            Привносим ресторанное качество в еду с доставкой.
          </CustomText>
          <Container maxW={"7xl"} mt={10}>
            <Flex justify={"center"} flexWrap="wrap" gridGap="6">
              {BenefitData.map((item, index) => (
                <Flex
                  key={index}
                  flexDir={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  maxW={{ base: "full", md: "275px", lg: "275px" }}
                >
                  <Box borderRadius={"95%"} backgroundColor={item.color} p={2}>
                    <Icon
                      as={item.icon}
                      w={"120px"}
                      h={"120px"}
                      color={"white"}
                    />
                  </Box>

                  <CustomText fontSize={"xl"} mt={2}>
                    {item.title}
                  </CustomText>
                  <Box w={"80px"} h={"5px"} backgroundColor={item.color} mt={2}>
                    {" "}
                  </Box>
                  <CustomText mt={2}>{item.mainText}</CustomText>
                </Flex>
              ))}
            </Flex>
          </Container>
        </Flex>
        <AccordionTemplate />{" "}
        <Flex
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={10}
        >
          <CustomText
            border={"2px solid black"}
            textAlign={"center"}
            w="70%"
            fontSize={"xl"}
            p={4}
          >
            Мы предлагаем широкий ассортимент азиатской и европейской кухни:
            роллы, супы, пицца и суши - доставка по Харькову всего нашего меню в
            считанные минуты!
          </CustomText>
          {AboutData.map((item, index) => (
            <Container maxW={"7xl"} key={index} padding={2}>
              <Stack
                textAlign={{
                  base: "center",
                  sm: "center",
                  md: "center",
                  lg: "left",
                }}
                align={"center"}
                justify="center"
                spacing={{ base: 8, md: 10 }}
                mt={{ base: 24, md: 28 }}
                direction={{ base: "column", md: "column", lg: "row" }}
              >
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                  <CustomText fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
                    {item.title}
                  </CustomText>
                  <CustomText>{item.text}</CustomText>
                </Stack>
                <Flex flex={1} w={"full"} flexDir={"column"}>
                  <Box
                    height={"400px"}
                    rounded={"2xl"}
                    boxShadow={"2xl"}
                    width={"100%"}
                    overflow={"hidden"}
                  >
                    <Image
                      w={"100%"}
                      h={"100%"}
                      objectFit="cover"
                      src={item.image}
                    />
                  </Box>{" "}
                </Flex>{" "}
              </Stack>{" "}
            </Container>
          ))}
        </Flex>{" "}
        <Flex
          justify={"center"}
          alignItems={"center"}
          flexDir={"column"}
          mt={10}
        >
          <Text
            fontWeight={"extrabold"}
            fontSize={"3xl"}
            textAlign={"center"}
            w={"90%"}
            mt={5}
          >
            Отличный выбор блюд японской, европейской и американской кухни с
            доставкой только в Burger Lord
          </Text>
          <CustomFlex>
            {MenuData.map((item, index) => (
              <Flex
                key={index}
                justify={"center"}
                mt={10}
                borderRadius={"20px"}
              >
                <Flex
                  backgroundColor={"#231f20"}
                  w={"90%"}
                  justifyContent={"center"}
                  borderRadius={"20px"}
                  flexDir={{ base: "column", lg: "row" }}
                >
                  <Flex
                    w={{ base: "100%", lg: "40%" }}
                    justify={"center"}
                    alignItems={"center"}
                    overflow={"hidden"}
                  >
                    <Image borderRadius={"20px"} src={item.image} h={"300px"} />
                  </Flex>

                  <CustomFlex
                    flex={{ base: "0", md: "1", lg: "1" }}
                    h="300px"
                    backgroundColor={"#231f20"}
                    justify={"center"}
                    borderRadius={"20px"}
                    textAlign={{ base: "center", lg: "start" }}
                    p={2}
                  >
                    <Text mt={"10px"} color={"white"}>
                      {item.title}
                    </Text>

                    <Text mt={"10px"} color={"white"}>
                      {item.text}
                    </Text>
                  </CustomFlex>
                </Flex>
              </Flex>
            ))}
          </CustomFlex>
        </Flex>
      </Flex>
      <FloatingBtnContant />
      <Footer />
    </>
  );
};

export default MainPage;

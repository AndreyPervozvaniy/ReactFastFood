import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  AboutData,
  MenuData,
  PartnersData,
  BenefitData,
} from "../../Utills/Utills";

import { Container, Icon, Flex, Image, Text, Box } from "@chakra-ui/react";
import Logo from "../../Assets/Image/Logo1.png";
import AccordionTemplate from "../MainPageContent/AccordionTemplate";
import CarouselTemplate from "../Carousel/Carousel";
import BackgroundWallpaper from "../MainPageContent/BackgroundWallpaper";
import ReviewComponent from "../Review/ReviewComponent";
import Elevator from "../ElevatorComponent/Elevator";
const MainPage = () => {
  return (
    <Flex flexDirection={"column"}>
      <BackgroundWallpaper />
      <Elevator />
      <Header />
      <Flex flexDir={"column"}>
        <CarouselTemplate />
        <Flex textAlign={"center"} justify={"center"} p={"5"}>
          <Text fontWeight={"bold"} fontSize={"4xl"}>
            {" "}
            Вкусные новинки
          </Text>
        </Flex>{" "}
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
              <Flex>
                <Image src={item.image} />
              </Flex>
            ))}
          </Flex>
        </Flex>
        <ReviewComponent page="Main" />
        <Flex justify={"center"} p={10}>
          <Text
            pos={"absolute"}
            border={"2px solid white"}
            background={"white"}
            my={-4}
            fontWeight={"bold"}
            borderRadius={"5px"}
            fontSize={"xl"}
            px={4}
          >
            Доставка в каждом городе
          </Text>
          <Image src={Logo} w={"400px"} border={"2px solid black"} />{" "}
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
          <Text fontSize={"lg"} fontWeight={"bold"}>
            Привносим ресторанное качество в еду с доставкой.
          </Text>
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
                  <Box borderRadius={"50%"} backgroundColor={item.color} p={2}>
                    <Icon
                      as={item.icon}
                      w={"120px"}
                      h={"120px"}
                      color={"white"}
                    />
                  </Box>

                  <Text fontWeight={"bold"} fontSize={"xl"} mt={2}>
                    {item.title}
                  </Text>
                  <Box w={"80px"} h={"5px"} backgroundColor={item.color} mt={2}>
                    {" "}
                  </Box>
                  <Text fontWeight={"bold"} mt={2}>
                    {item.mainText}
                  </Text>
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
          <Text
            border={"2px solid black"}
            textAlign={"center"}
            w="70%"
            fontWeight={"bold"}
            fontSize={"xl"}
            p={4}
          >
            Мы предлагаем широкий ассортимент азиатской и европейской кухни:
            роллы, супы, пицца и суши - доставка по Харькову всего нашего меню в
            считанные минуты!
          </Text>
          <Container maxW="7xl" mt={10} p={2} flexWrap={"wrap"}>
            <Flex flexDir={"column"}>
              {" "}
              {AboutData.map((item, index) => (
                <Flex
                  mt={5}
                  flexWrap={"wrap"}
                  alignItems={"center"}
                  justify={"center"}
                >
                  <Flex flexDir={"column"} mr={"5px"}>
                    <Text fontWeight={"bold"} fontSize={"3xl"}>
                      {item.title}
                    </Text>
                    <Box
                      border={"1px solid blue"}
                      w={100}
                      h={1}
                      backgroundColor={"blue"}
                      mt={5}
                    ></Box>
                    <Text
                      mt={5}
                      fontWeight={"bold"}
                      maxW={{ base: "full", md: "2xl", lg: "3xl" }}
                    >
                      {item.text}
                    </Text>
                  </Flex>

                  <Image
                    src={item.image}
                    w={"md"}
                    h={"md"}
                    borderRadius={"15px"}
                  />
                </Flex>
              ))}
            </Flex>
          </Container>
        </Flex>{" "}
        <Flex
          justify={"center"}
          alignItems={"center"}
          flexDir={"column"}
          py={"5%"}
        >
          <Text
            fontWeight={"extrabold"}
            fontSize={"3xl"}
            textAlign={"center"}
            w={"90%"}
            my={5}
          >
            Отличный выбор блюд японской, европейской и американской кухни с
            доставкой только в Burger Lord
          </Text>
          <Flex flexDir={"column"} w={"100%"}>
            {MenuData.map((item, index) => (
              <Flex justify={"center"} flexDir={"row"}>
                <Flex
                  w={"95%"}
                  h={"400px"}
                  my={5}
                  bgPosition={"-100px"}
                  bgImage={item.image}
                  borderRadius={"10px"}
                  justifyContent={"end"}
                  textAlign={"center"}
                >
                  {" "}
                  <Flex
                    flexDirection={"column"}
                    pos={"absolute"}
                    color={"white"}
                    fontWeight={"bold"}
                    backgroundColor={"#231f20"}
                    w={"500px"}
                    h={"400px"}
                    justify={"center"}
                  >
                    <Text textAlign={"start"} fontSize={"2xl"}>
                      {item.title}
                    </Text>{" "}
                    <Box
                      w={"100px"}
                      h={"5px"}
                      border={"1px solid blue"}
                      backgroundColor={"blue"}
                    ></Box>
                    <Text textAlign={"start"} fontSize={"lg"}>
                      {" "}
                      {item.text}
                    </Text>
                  </Flex>
                </Flex>{" "}
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default MainPage;

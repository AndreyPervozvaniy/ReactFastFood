import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  AboutData,
  MenuData,
  PartnersData,
  BenefitData,
} from "../../Utills/Utills";
import axios from "axios";
import { FaRegSmileBeam, FaStar } from "react-icons/fa";
import { Container, Icon, Flex, Image, Text, Box } from "@chakra-ui/react";
import Logo from "../../Assets/Image/Logo1.png";
import AccordionTemplate from "../MainPageContent/AccordionTemplate";
import CarouselTemplate from "../Carousel/Carousel";
import BackgroundWallpaper from "../MainPageContent/BackgroundWallpaper";
const MainPage = () => {
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
    <Flex flexDirection={"column"}>
      <BackgroundWallpaper />
      <Header />
      <Flex flexDir={"column"}>
        {/* <CarouselTemplate /> */}
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
          <Flex justifyContent={"space-around"} alignItems={"center"} p={"4%"}>
            {PartnersData.map((item, index) => (
              <Image src={item.image} w={"35%"} h={"250px"} />
            ))}
          </Flex>
        </Flex>
        <Flex justify={"center"} textAlign={"center"} flexDir={"column"}>
          <Text
            p={5}
            textAlign={"center"}
            fontWeight="extrabold"
            fontSize={"4xl"}
          >
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
        </Flex>{" "}
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
        <AccordionTemplate />{" "}
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
            Мы предлагаем широкий ассортимент азиатской и европейской кухни:
            роллы, супы, пицца и суши - доставка по Харькову всего нашего меню в
            считанные минуты!
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

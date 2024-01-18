import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import BackgroundWallpaper from "./Components/MainPageContent/BackgroundWallpaper";
import Header from "./Components/Header/Header";
import CarouselTemplate from "./Components/Carousel/Carousel";
import Partners from "./Components/MainPageContent/Partners";
import Review from "./Components/MainPageContent/Review";
import Banner from "./Components/MainPageContent/Banner";
import Benefit from "./Components/MainPageContent/Benefit";
import AccordionTemplate from "./Components/MainPageContent/AccordionTemplate";
import About from "./Components/MainPageContent/About";
import Menu from "./Components/MainPageContent/Menu";
function App() {
  return (
    <Flex flexDir={"column"}>
      <BackgroundWallpaper />
      <Header />
      <CarouselTemplate />
      <Text p={5} textAlign={"center"} fontWeight="extrabold" fontSize={"4xl"}>
        Вкусные новинки{" "}
      </Text>
      <Partners />
      <Review />
      <Banner />
      <Benefit />
      <AccordionTemplate />
      <About />
      <Menu />
      <Flex h={"200vh"}></Flex>
    </Flex>
  );
}

export default App;

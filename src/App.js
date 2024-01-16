import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import BackgroundWallpaper from "./Components/BackgroundWallpaper";
import Header from "./Components/Header/Header";
import CarouselTemplate from "./Components/Carousel/Carousel";
import Partners from "./Components/Partners";
import Review from "./Components/Review";
import Banner from "./Components/Banner";
import Benefit from "./Components/Benefit";
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
      <Flex h={"200vh"}></Flex>
    </Flex>
  );
}

export default App;

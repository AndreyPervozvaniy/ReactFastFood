import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BackgroundWallpaper from "../MainPageContent/BackgroundWallpaper";
const Sushi = () => {
  return (
    <Flex flexDir={"column"}>
      <BackgroundWallpaper />
      <Header />
      <Flex></Flex>
      <Footer />
    </Flex>
  );
};

export default Sushi;

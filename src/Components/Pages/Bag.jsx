import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BackgroundWallpaper from "../MainPageContent/BackgroundWallpaper";

const Bag = () => {
  return (
    <Flex flexDir={"column"}>
      <BackgroundWallpaper />
      <Header />

      <Footer />
    </Flex>
  );
};

export default Bag;

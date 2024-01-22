import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BackgroundWallpaper from "../MainPageContent/BackgroundWallpaper";
import ProductStack from "../ProductStack/ProductStack";
const Sushi = () => {
  return (
    <Flex flexDir={"column"}>
      <BackgroundWallpaper />
      <Header />

      <ProductStack endpoint="Sushi" title="Вкуснейшие суши в Днепре" />

      <Footer />
    </Flex>
  );
};

export default Sushi;

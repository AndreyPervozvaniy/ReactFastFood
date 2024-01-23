import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BackgroundWallpaper from "../MainPageContent/BackgroundWallpaper";
import ProductStack from "../ProductStack/ProductStack";
import ReviewComponent from "../Review/ReviewComponent";
const Sushi = () => {
  return (
    <Flex flexDir={"column"}>
      <BackgroundWallpaper />
      <Header />

      <ProductStack title="ВКУСНЕЙШИЕ СУШИ В ДНЕПРЕ" type="sushi" />
      <ReviewComponent page="Rolls" />

      <Footer />
    </Flex>
  );
};

export default Sushi;

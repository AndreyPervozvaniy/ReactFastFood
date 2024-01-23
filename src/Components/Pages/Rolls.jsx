import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BackgroundWallpaper from "../MainPageContent/BackgroundWallpaper";
import ProductStack from "../ProductStack/ProductStack";
import ReviewComponent from "../Review/ReviewComponent";
const Rolls = () => {
  return (
    <Flex flexDir={"column"}>
      <BackgroundWallpaper />
      <Header />

      <ProductStack
        endpoint="Sushi"
        title="ВКУСНЕЙШИЕ РОЛЛЫ В ДНЕПРЕ"
        type="rolls"
      />
      <ReviewComponent page="Rolls" />

      <Footer />
    </Flex>
  );
};

export default Rolls;

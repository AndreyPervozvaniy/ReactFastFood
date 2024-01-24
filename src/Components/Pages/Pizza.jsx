import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BackgroundWallpaper from "../MainPageContent/BackgroundWallpaper";
import ProductStack from "../ProductStack/ProductStack";
import ReviewComponent from "../Review/ReviewComponent";
import Elevator from "../ElevatorComponent/Elevator";
import BottomProductPart from "../BottomProductPart/BottomProductPart";
const Pizza = () => {
  return (
    <Flex flexDir={"column"}>
      <BackgroundWallpaper />
      <Elevator />
      <Header />
      <ProductStack title="ВКУСНЕЙШАЯ ПИЦЦА В ДНЕПРЕ" type="pizza" />
      <ReviewComponent page="Pizza" />
      <BottomProductPart page="Pizza" />
      <Footer />
    </Flex>
  );
};

export default Pizza;

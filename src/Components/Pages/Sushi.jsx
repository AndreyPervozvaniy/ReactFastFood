import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BackgroundWallpaper from "../MainPageContent/BackgroundWallpaper";
import ProductStack from "../ProductStack/ProductStack";
import ReviewComponent from "../Review/ReviewComponent";
import Elevator from "../ElevatorComponent/Elevator";
import BottomProductPart from "../BottomProductPart/BottomProductPart";
const Sushi = () => {
  return (
    <Flex flexDir={"column"}>
      <BackgroundWallpaper />
      <Elevator />
      <Header />

      <ProductStack title="ВКУСНЕЙШИЕ СУШИ В ДНЕПРЕ" type="sushi" />
      <ReviewComponent page="Rolls" />
      <BottomProductPart page="Sushi" />
      <Footer />
    </Flex>
  );
};

export default Sushi;

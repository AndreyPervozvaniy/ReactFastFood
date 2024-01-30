import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BackgroundWallpaper from "../Components/MainPageContent/BackgroundWallpaper";
import ProductStack from "../Components/ProductStack/ProductStack";
import ReviewComponent from "../Components/Review/ReviewComponent";
import Elevator from "../Components/ElevatorComponent/Elevator";
import BottomProductPart from "../Components/BottomProductPart/BottomProductPart";
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

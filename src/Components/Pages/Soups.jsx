import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BackgroundWallpaper from "../MainPageContent/BackgroundWallpaper";
import ProductStack from "../ProductStack/ProductStack";
import ReviewComponent from "../Review/ReviewComponent";
import Elevator from "../ElevatorComponent/Elevator";
import BottomProductPart from "../BottomProductPart/BottomProductPart";

const Soups = () => {
  return (
    <Flex flexDir={"column"}>
      <BackgroundWallpaper />
      <Elevator />
      <Header />
      <ProductStack title="ВКУСНЕЙШИЕ СУПЫ В ДНЕПРЕ" type="soups" />
      <ReviewComponent page="Soups" />
      <BottomProductPart page="Soups" />
      <Footer />
    </Flex>
  );
};

export default Soups;

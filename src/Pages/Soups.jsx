import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

import ProductStack from "../Components/ProductStack/ProductStack";
import ReviewComponent from "../Components/Review/ReviewComponent";
import Elevator from "../Components/ElevatorComponent/Elevator";
import BottomProductPart from "../Components/BottomProductPart/BottomProductPart";
import FloatingBtnContant from "../Components/FloatingBtnContact/FloatingBtnContact";

const Soups = () => {
  return (
    <Flex flexDir={"column"}>
      <Elevator />
      <Header />
      <FloatingBtnContant />
      <ProductStack title="ВКУСНЕЙШИЕ СУПЫ В ДНЕПРЕ" type="soups" />
      <ReviewComponent page="Soups" />
      <BottomProductPart page="Soups" />
      <Footer />
    </Flex>
  );
};

export default Soups;

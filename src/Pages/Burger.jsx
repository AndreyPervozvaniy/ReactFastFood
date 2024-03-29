import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

import ProductStack from "../Components/ProductStack/ProductStack";
import ReviewComponent from "../Components/Review/ReviewComponent";
import Elevator from "../Components/ElevatorComponent/Elevator";
import BottomProductPart from "../Components/BottomProductPart/BottomProductPart";
import FloatingBtnContant from "../Components/FloatingBtnContact/FloatingBtnContact";

const Burger = () => {
  return (
    <Flex flexDir={"column"}>
      <Elevator />
      <FloatingBtnContant />
      <Header />
      <ProductStack title="ВКУСНЕЙШИЕ БУРГЕРЫ В ДНЕПРЕ" type="burgers" />
      <ReviewComponent page="Burgers" />
      <BottomProductPart page="Burger" />
      <Footer />
    </Flex>
  );
};

export default Burger;

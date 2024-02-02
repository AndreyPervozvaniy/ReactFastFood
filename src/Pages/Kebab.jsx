import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

import ProductStack from "../Components/ProductStack/ProductStack";
import ReviewComponent from "../Components/Review/ReviewComponent";
import Elevator from "../Components/ElevatorComponent/Elevator";
import BottomProductPart from "../Components/BottomProductPart/BottomProductPart";
import FloatingBtnContant from "../Components/FloatingBtnContact/FloatingBtnContact";

const Kebab = () => {
  return (
    <Flex flexDir={"column"}>
      <Elevator />
      <Header />
      <FloatingBtnContant />
      <ProductStack title="ВКУСНЕЙШАЯ ШАУРМА В ДНЕПРЕ" type="kebab" />
      <ReviewComponent page="Kebab" />
      <BottomProductPart page="Kebab" />
      <Footer />
    </Flex>
  );
};

export default Kebab;

import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

import ProductStack from "../Components/ProductStack/ProductStack";
import ReviewComponent from "../Components/Review/ReviewComponent";
import Elevator from "../Components/ElevatorComponent/Elevator";
import BottomProductPart from "../Components/BottomProductPart/BottomProductPart";
const Rolls = () => {
  return (
    <Flex flexDir={"column"}>
      <Header />
      <Elevator />
      <ProductStack title="ВКУСНЕЙШИЕ РОЛЛЫ В ДНЕПРЕ" type="rolls" />
      <ReviewComponent page="Rolls" />
      <BottomProductPart page="Rolls" />
      <Footer />
    </Flex>
  );
};

export default Rolls;

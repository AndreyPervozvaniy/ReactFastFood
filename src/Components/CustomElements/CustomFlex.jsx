import React from "react";
import { Flex } from "@chakra-ui/react";
const CustomFlex = ({ children, ...props }) => {
  return (
    <Flex w={"100%"} flexDir={"column"} {...props}>
      {children}
    </Flex>
  );
};

export default CustomFlex;

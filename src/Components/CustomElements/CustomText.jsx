import { Text } from "@chakra-ui/react";
import React from "react";

const CustomText = ({ children, ...props }) => {
  return (
    <Text fontWeight={"bold"} {...props}>
      {children}
    </Text>
  );
};
export default CustomText;

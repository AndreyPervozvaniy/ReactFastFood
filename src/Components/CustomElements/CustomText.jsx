import { Text } from "@chakra-ui/react";
import React, { Children } from "react";

const CustomText = ({ children, ...props }) => {
  return (
    <Text fontWeight={"bold"} {...props}>
      {children}
    </Text>
  );
};
export default CustomText;

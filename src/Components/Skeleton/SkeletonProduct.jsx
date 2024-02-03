import React from "react";
import { Skeleton, Stack } from "@chakra-ui/react";

const SkeletonProduct = () => {
  return (
    <Stack>
      <Skeleton
        w={{ base: "364px", md: "600px", lg: "600px" }}
        height={{ base: "368px", md: "531px", lg: "531px" }}
      />
    </Stack>
  );
};

export default SkeletonProduct;

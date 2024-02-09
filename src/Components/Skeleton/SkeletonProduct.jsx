import React from "react";
import { Skeleton, Stack } from "@chakra-ui/react";

const SkeletonProduct = ({ w, h }) => {
  return (
    <Stack>
      <Skeleton w={w} height={h} />
    </Stack>
  );
};

export default SkeletonProduct;

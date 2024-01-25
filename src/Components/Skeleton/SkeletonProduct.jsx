import React from "react";
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

const SkeletonProduct = () => {
  return (
    <Stack>
      <Skeleton height="492px" w={"582px"} />
    </Stack>
  );
};

export default SkeletonProduct;

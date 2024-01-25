import React from "react";
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

const SkeletonReview = () => {
  return (
    <Stack>
      <Skeleton height="136px" w={"582px"} />
    </Stack>
  );
};

export default SkeletonReview;

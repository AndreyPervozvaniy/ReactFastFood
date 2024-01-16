import React from "react";
import { Box } from "@chakra-ui/react";

import backgroundImage from "../Assets/Image/background.jpg";
const BackgroundWallpaper = () => {
  return (
    <Box
      pos="absolute"
      w={"100%"}
      h={"100%"}
      _before={{
        content: '""',
        bgImage: backgroundImage,
        bgSize: "fill",
        bgRepeat: "repeat",
        pos: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        opacity: 0.3,
        zIndex: -1,
      }}
    />
  );
};

export default BackgroundWallpaper;

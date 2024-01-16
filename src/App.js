import React from "react";
import { Flex, Text, Image, Box } from "@chakra-ui/react";
import back from "../src/Assets/Image/background.jpg";
import BackgroundWallpaper from "./Components/BackgroundWallpaper";
import Header from "./Components/Header/Header";
function App() {
  return (
    <Flex>
      <BackgroundWallpaper />
      <Header />
      <Flex h={"200vh"}></Flex>
    </Flex>
  );
}

export default App;

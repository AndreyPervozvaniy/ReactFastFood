import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BackgroundWallpaper from "../MainPageContent/BackgroundWallpaper";
import { useDispatch, useSelector } from "react-redux";
import { removeItems } from "../../Redux/CartSlice";
const Bag = () => {
  const dispatchRemove = useDispatch();
  const { cart } = useSelector((state) => state.CartSlice);
  const removeItemFromCart = (itemId) => {
    dispatchRemove(removeItems(itemId));
  };
  return (
    <Flex flexDir={"column"}>
      {/* <BackgroundWallpaper /> */}
      <Header />
      <Flex p={5} justifyContent={"space-around"}>
        <Flex border="1px solid black" w={"500px"} h={"800px"}></Flex>
        <Flex h={"100vh"} mt={"10px"} flexDir={"column"} w={"600px"}>
          <Text fontWeight={"bold"} fontSize={"3xl"} textAlign={"start"}>
            Ваш заказ
          </Text>
          {cart.map((item, _) => (
            <Flex key={item.id} flexDir={"column"} w={"100%"}>
              <Flex
                flexDir={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Image src={item.imageURL} w={"250px"} h={"200px"} />
                <Flex flexDir={"column"}>
                  <Text>{item.name}</Text>
                  <Text>{item.name}</Text>
                </Flex>
                <Flex flexDir={"column"}>
                  <Button onClick={() => removeItemFromCart(item.id)}>x</Button>

                  <Text>{item.cost} грн.</Text>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default Bag;

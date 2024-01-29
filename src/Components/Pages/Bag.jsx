import { Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BackgroundWallpaper from "../MainPageContent/BackgroundWallpaper";
import { useDispatch, useSelector } from "react-redux";
import { CiTrash } from "react-icons/ci";
import {
  clearCart,
  removeItems,
  addItems,
  decreaseCount,
} from "../../Redux/CartSlice";
const Bag = () => {
  const clearAllCart = useDispatch();
  const dispatchRemove = useDispatch();
  const decreaseHandle = useDispatch();
  const { cart, totalCount } = useSelector((state) => state.CartSlice);
  const removeItemFromCart = (itemId) => {
    dispatchRemove(removeItems(itemId));
  };
  const handleClearAllCart = () => {
    clearAllCart(clearCart());
  };
  const decreaseCountItem = (item) => {
    decreaseHandle(decreaseCount(item));
  };
  const dispatch = useDispatch();
  const addItemInCart = (item) => {
    dispatch(addItems(item));
  };
  return (
    <Flex flexDir={"column"}>
      {/* <BackgroundWallpaper /> */}
      <Header />
      <Flex justifyContent={"space-around"}>
        <Flex flexDir={"column"} mt={"10px"}>
          {" "}
          <Text fontWeight={"bold"} fontSize={"3xl"} textAlign={"start"}>
            Детали оплаты
          </Text>
          <Flex border="1px solid black" w={"500px"} h={"800px"}></Flex>
        </Flex>

        <Flex mt={"10px"} flexDir={"column"} w={"50%"}>
          <Flex flexDir={"row"} justifyContent={"space-between"}>
            <Text fontWeight={"bold"} fontSize={"3xl"} textAlign={"start"}>
              Ваш заказ
            </Text>
            <Button
              variant={"ghost"}
              _hover={{ backgroundColor: "white", textDecor: "underline" }}
              onClick={() => handleClearAllCart()}
            >
              Очистить корзину
            </Button>
          </Flex>
          <Flex
            overflow={"hidden"}
            overflowY={"auto"}
            h={"600px"}
            flexWrap={"wrap"}
          >
            {" "}
            {totalCount >= 1 ? (
              cart.map((item, _) => (
                <Flex key={item.id} flexDir={"column"} w="90%">
                  <Flex
                    flexDir={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Image src={item.imageURL} w={"250px"} h={"200px"} />
                    <Flex flexDir={"column"} justify={"center"}>
                      <Text>{item.name}</Text>
                      <Flex
                        flexDir={"row"}
                        alignItems={"center"}
                        justify={"center"}
                        mt={5}
                      >
                        <Button
                          variant={"outline"}
                          onClick={() => decreaseCountItem(item)}
                          border={"1px solid black"}
                          _hover={{ backgroundColor: "white" }}
                          isDisabled={item.count === 1}
                          w="30px"
                        >
                          -
                        </Button>{" "}
                        <Text mx={4} w="30px" textAlign={"center"}>
                          {item.count}
                        </Text>{" "}
                        <Button
                          variant={"outline"}
                          onClick={() => addItemInCart(item)}
                          border={"1px solid black"}
                          isDisabled={item.count === 9}
                          _hover={{ backgroundColor: "white" }}
                          w="30px"
                        >
                          +
                        </Button>
                      </Flex>
                    </Flex>
                    <Flex flexDir={"column"}>
                      <Button
                        variant={"outline"}
                        onClick={() => removeItemFromCart(item.id)}
                        border={"none"}
                        _hover={{ backgroundColor: "white" }}
                      >
                        <Icon as={CiTrash} />
                      </Button>

                      <Text>{item.cost} грн.</Text>
                    </Flex>
                  </Flex>
                </Flex>
              ))
            ) : (
              <Text>Cart is empty </Text>
            )}{" "}
          </Flex>
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default Bag;

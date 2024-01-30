import { Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { CiTrash } from "react-icons/ci";
import empryCart from "../Assets/Image/emptyCart.png";
import {
  clearCart,
  removeItems,
  addItems,
  decreaseCount,
} from "../Redux/CartSlice";
import PrizeCartComponent from "../Components/PrizeCartComponent/PrizeCartComponent";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { DeliverInfo } from "../Utills/Utills";
import Elevator from "../Components/ElevatorComponent/Elevator";
const Bag = () => {
  const dispatch = useDispatch();
  const router = useNavigate();
  const { cart, totalCount, totalPrice } = useSelector(
    (state) => state.CartSlice
  );
  const addItemInCart = (item) => {
    dispatch(addItems(item));
  };
  const removeItemFromCart = (itemId) => {
    dispatch(removeItems(itemId));
  };
  const decreaseCountItem = (item) => {
    dispatch(decreaseCount(item));
  };
  const handleClearAllCart = () => {
    dispatch(clearCart());
  };
  const minimalOrder = 250;
  const freeDeliver = 400;

  return (
    <Flex flexDir={"column"}>
      <Header />
      <Elevator />
      <Flex justifyContent={"space-around"}>
        <Flex flexDir={"column"} mt={"10px"}>
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
              variant={"outline"}
              _hover={{
                backgroundColor: "transparent",
                textDecor: "underline",
              }}
              onClick={() => handleClearAllCart()}
            >
              <Text fontWeight={"bold"} color={"red"}>
                Очистить корзину{" "}
              </Text>
            </Button>
          </Flex>
          {totalCount >= 1 ? (
            <Flex flexDir={"column"}>
              <Flex
                justify={"center"}
                overflow={"hidden"}
                overflowY={"auto"}
                maxH={"400px"}
                flexWrap={"wrap"}
              >
                {cart.map((item, _) => (
                  <Flex key={item.id} flexDir={"column"} w="90%">
                    <Flex
                      flexDir={"row"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Image
                        p={3}
                        borderRadius={"50%"}
                        src={item.imageURL}
                        w={"250px"}
                        h={"200px"}
                      />
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
                            _hover={{ backgroundColor: "transparent" }}
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
                            _hover={{ backgroundColor: "transparent" }}
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
                          _hover={{ backgroundColor: "transparent" }}
                        >
                          <Icon as={CiTrash} />
                        </Button>

                        <Text>{item.cost} грн.</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                ))}
              </Flex>
              <PrizeCartComponent />
            </Flex>
          ) : (
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              flexDir={"column"}
            >
              <Image src={empryCart} w={"500px"} h={"400px"} />
              <Button variant={"outline"} onClick={() => router("/sets")}>
                <Text>Заполнить корзину!</Text>
              </Button>
            </Flex>
          )}
          <Flex
            borderTop={"1px solid #ccc"}
            mt={10}
            flexDir={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text>Доставка :</Text>
            {totalPrice < minimalOrder ? (
              <Flex flexDir={"column"} textAlign={"center"}>
                <Text fontWeight={"bold"}>
                  К сожалению, доставка невозможна
                </Text>{" "}
                <Text fontSize={"14px"}>(минимальный заказ - 250 грн.)</Text>{" "}
              </Flex>
            ) : totalPrice <= freeDeliver ? (
              <Text>Доставка 50 грн</Text>
            ) : (
              <Text fontWeight="bold" color="green">
                Бесплатно!
              </Text>
            )}
          </Flex>{" "}
          <Flex
            mt={10}
            flexDir={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontWeight={"bold"}>ОБЩАЯ СТОИМОСТЬ : </Text>
            <Text fontWeight={"bold"} fontSize={"3xl"} textDecor={"underline"}>
              {totalPrice < minimalOrder
                ? totalPrice
                : totalPrice + (totalPrice < freeDeliver ? 50 : 0)}{" "}
              грн.
            </Text>
          </Flex>{" "}
          <Flex mt={"10px"} flexDir={"column"} p={5}>
            <Text>Доставка в г. Днепр :</Text>
            {DeliverInfo.map((item, index) => (
              <Flex alignItems={"center"} mt={2} key={index}>
                <Icon as={FaStar} color={"#c78500"} mx={2} />{" "}
                <Text fontSize={"sm"}>{item.text}</Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default Bag;

import { Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { CiTrash } from "react-icons/ci";

import carted from "../Assets/Image/cart-empty1.jpg";
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
import FloatingBtnContant from "../Components/FloatingBtnContact/FloatingBtnContact";
import FormDeliver from "../Components/FormDeliver/FormDeliver";
import CustomText from "../Components/CustomElements/CustomText";

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
    <Flex flexDir={"column"} h={"100%"}>
      <Header />
      <Elevator />
      <FloatingBtnContant />{" "}
      <Flex
        mt={{ base: "95px", lg: "0px" }}
        flexDir={{ base: "column", lg: "row" }}
        justify={{ base: "center", lg: "space-around" }}
        textAlign={{ base: "center", lg: "start" }}
      >
        <Flex mt={"10px"} flexDir={"column"} w={{ base: "100%", lg: "50%" }}>
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            justifyContent={"space-between"}
          >
            <CustomText fontSize={"3xl"}>Ваш заказ</CustomText>
            {totalCount >= 1 && (
              <Button
                variant={"outline"}
                _hover={{
                  backgroundColor: "transparent",
                  textDecor: "underline",
                }}
                onClick={() => handleClearAllCart()}
              >
                <CustomText color={"red"}>Очистить корзину </CustomText>
              </Button>
            )}
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
                {cart.map((item) => (
                  <Flex key={item.id} flexDir={"column"} w="90%">
                    <Flex
                      flexDir={{ base: "column", lg: "row" }}
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
              <Image src={carted} w={"450px"} h={"400px"} />
              <Button variant={"outline"} onClick={() => router("/sets")}>
                <Text>Заполнить корзину!</Text>
              </Button>
            </Flex>
          )}

          {totalCount >= 1 && (
            <Flex flexDir={"column"}>
              <Flex
                borderTop={"1px solid #ccc"}
                mt={10}
                flexDir={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text mt={2}>Доставка :</Text>
                {totalPrice < minimalOrder ? (
                  <Flex flexDir={"column"} textAlign={"center"}>
                    <CustomText>К сожалению, доставка невозможна</CustomText>{" "}
                    <Text fontSize={"14px"}>
                      (минимальный заказ - 250 грн.)
                    </Text>{" "}
                  </Flex>
                ) : totalPrice <= freeDeliver ? (
                  <Flex flexDir={"column"} textAlign={"center"}>
                    <CustomText>Доставка 50 грн</CustomText>{" "}
                    <Text fontSize={"14px"}>
                      (бесплатная от 400 грн. остаток :{" "}
                      {freeDeliver - totalPrice} грн.)
                    </Text>{" "}
                  </Flex>
                ) : (
                  <CustomText color="green">Бесплатно!</CustomText>
                )}
              </Flex>{" "}
              <Flex
                mt={10}
                flexDir={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <CustomText>ОБЩАЯ СТОИМОСТЬ : </CustomText>
                <CustomText fontSize={"3xl"} textDecor={"underline"}>
                  {totalPrice < minimalOrder
                    ? totalPrice
                    : totalPrice + (totalPrice < freeDeliver ? 50 : 0)}{" "}
                  грн.
                </CustomText>
              </Flex>{" "}
            </Flex>
          )}
        </Flex>
        <Flex flexDir={"column"} mt={"10px"} w={{ base: "100%", lg: "30%" }}>
          <CustomText fontSize={"3xl"}>Детали оплаты</CustomText>

          <Flex>
            <FormDeliver />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        justify={"center"}
        alignItems="center"
        minH={{ base: "none", lg: "40vh" }}
        mt={"10px"}
        flexDir={"column"}
        p={5}
      >
        <Text>Доставка в г. Днепр :</Text>
        {DeliverInfo.map((item, index) => (
          <Flex alignItems={"center"} mt={2} key={index}>
            <Icon as={FaStar} color={"#c78500"} mx={2} />{" "}
            <Text fontSize={"sm"}>{item.text}</Text>
          </Flex>
        ))}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Bag;

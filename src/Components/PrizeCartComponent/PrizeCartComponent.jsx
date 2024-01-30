import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const PrizeCartComponent = () => {
  const pepsiPrize = 599;
  const rollPrize = 999;
  const burgerPrize = 1599;
  const { totalPrice } = useSelector((state) => state.CartSlice);
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={"#fdedeb"}
    >
      {totalPrice < pepsiPrize ? (
        <Flex backgroundColor={"#fdedeb"} flexDir={"column"} p={4}>
          <Text fontWeight={"bold"}>
            ДОБАВЬТЕ ЕЩЕ {pepsiPrize - totalPrice} ГРН
          </Text>
          <Text>к заказу, чтобы получить Pepsi 1 л. в подарок ❤️</Text>
        </Flex>
      ) : totalPrice < rollPrize ? (
        <Flex backgroundColor={"#fdedeb"} flexDir={"column"} p={4}>
          <Text fontWeight={"bold"}>
            Дарим бутылку Pepsi 1 л. к этой сумме заказа!
          </Text>
          <Text>ДОБАВЬТЕ ЕЩЕ {rollPrize - totalPrice} ГРН</Text>
          <Text>чтобы улучшить подарок до ролла Микс лосось ❤️</Text>
        </Flex>
      ) : totalPrice < burgerPrize ? (
        <Flex backgroundColor={"#fdedeb"} flexDir={"column"} p={4}>
          <Text fontWeight={"bold"}>
            Дарим ролл Микс лосось к этой сумме заказа!
          </Text>
          <Text>ДОБАВЬТЕ ЕЩЕ {burgerPrize - totalPrice} ГРН</Text>
          <Text>чтобы улучшить подарок до Суши бургер с лососем ❤️</Text>
        </Flex>
      ) : (
        <Flex backgroundColor={"#fdedeb"} flexDir={"column"} p={4}>
          <Text fontWeight={"bold"}>
            Дарим Суши бургер с лососем или ролл Микс лосось на выбор ❤️
          </Text>
        </Flex>
      )}
    </Flex>
  );
};

export default PrizeCartComponent;

import React, { useEffect, useState } from "react";
import { Flex, Text, Image, Button, Icon } from "@chakra-ui/react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

import Elevator from "../Components/ElevatorComponent/Elevator";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { addItems } from "../Redux/CartSlice";
import { FaStar } from "react-icons/fa";
import { Spinner } from "@chakra-ui/react";
import FloatingBtnContant from "../Components/FloatingBtnContact/FloatingBtnContact";
import CustomText from "../Components/CustomElements/CustomText";
const FullProductPage = () => {
  const { id } = useParams();
  const toast = useToast();
  const dispatch = useDispatch();
  const [product, setProduct] = useState();
  const { cart } = useSelector((state) => state.CartSlice);
  const countChecker = (itemId) => {
    const itemInCart = cart.find((product) => product.id === itemId);
    return itemInCart ? itemInCart.count < 9 : true;
  };
  const showToast = (isSuccess, product) => {
    const toastSettings = {
      position: "top",
      duration: 2000,
      isClosable: true,
    };

    if (isSuccess) {
      toast({
        ...toastSettings,
        title: "Товар добавлен",
        description: `Товар ${product.name} на сумму (${product.cost} грн.) добавлен в корзину!`,
        status: "success",
      });
    } else {
      toast({
        ...toastSettings,
        title: "Уважаемый Клиент!",
        description:
          "Сжальтесь над нашими поварами! =) У нас действуют ограничение на 9 позиций одного товара!",
        status: "error",
      });
    }
  };
  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(
          "https://65a93323219bfa371868c106.mockapi.io/Sushi/" + id
        );
        setProduct(data);
      } catch (error) {
        console.log("Ошибка в получение данных");
      }
    }
    fetchProduct();
  }, [id]);
  const addItemInCart = (product) => {
    dispatch(addItems(product));
    showToast(countChecker(product.id), product);
  };
  if (!product) {
    return (
      <Flex justifyContent={"center"} alignItems={"center"} h="100vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="transparent"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  }
  return (
    <Flex flexDir={"column"}>
      <Elevator />
      <Header />
      <FloatingBtnContant />
      <Flex
        mt={{ base: "100px", lg: "0px" }}
        flexDir={{ base: "column", lg: "row" }}
        justifyContent={"center"}
        alignItems={{ base: "center", lg: "left" }}
      >
        <Image
          src={product.imageURL}
          w={{ base: "60%", lg: "575px" }}
          h={{ base: "60%", lg: "380px" }}
        />
        <Flex
          ml={5}
          flexDir={"column"}
          w={{ base: "80%", lg: "50%" }}
          alignItems={{ base: "center", lg: "start" }}
          textAlign={{ base: "center", lg: "start" }}
        >
          <CustomText fontSize={{ base: "xl", lg: "3xl" }}>
            {product.name}
          </CustomText>{" "}
          <Flex>
            {[...Array(5)].map((_, index) => (
              <Icon
                key={index}
                as={FaStar}
                color={index < product.starCount ? "#c78500" : "gray"}
                h={6}
                w={6}
              />
            ))}
          </Flex>
          <Button
            display={{ base: "inherit", lg: "none" }}
            mt={10}
            key={product.id}
            backgroundColor={"#decb6a"}
            onClick={() => addItemInCart(product)}
            w={"150px"}
          >
            <CustomText>ЗАКАЗАТЬ</CustomText>
          </Button>
          <CustomText fontSize={" xl"} mt={10}>
            {product.consist}
          </CustomText>{" "}
          <Flex mt={10}>
            {" "}
            <CustomText fontSize={"2xl"}>{product.cost}</CustomText>
            <Flex h={"30px"} border={"1px solid black"} mx={2}></Flex>
            <Text fontSize={"2xl"}>{product.weight}</Text>
          </Flex>
          <Button
            display={{ base: "none", lg: "inherit" }}
            mt={10}
            key={product.id}
            backgroundColor={"#decb6a"}
            onClick={() => addItemInCart(product)}
            w={"150px"}
          >
            <CustomText>ЗАКАЗАТЬ</CustomText>
          </Button>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default FullProductPage;

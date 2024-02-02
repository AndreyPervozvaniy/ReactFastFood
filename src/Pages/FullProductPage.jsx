import React, { useEffect, useState } from "react";
import { Flex, Text, Image, Button, Icon } from "@chakra-ui/react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import BackgroundWallpaper from "../Components/MainPageContent/BackgroundWallpaper";
import Elevator from "../Components/ElevatorComponent/Elevator";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { addItems } from "../Redux/CartSlice";
import { FaStar } from "react-icons/fa";
import { Spinner } from "@chakra-ui/react";
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
      {/* <BackgroundWallpaper /> */}
      <Elevator />
      <Header />
      <Flex mt="10px" flexDir={"row"} justifyContent={"center"}>
        <Image src={product.imageURL} w={575} h={380} />
        <Flex ml={5} flexDir={"column"} w={"50%"}>
          <Text fontSize={"3xl"} fontWeight={"bold"}>
            {product.name}
          </Text>{" "}
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
          <Text fontSize={" xl"} fontWeight={"bold"} mt={10}>
            {product.consist}
          </Text>{" "}
          <Flex mt={10}>
            {" "}
            <Text fontWeight={"bold"} fontSize={"2xl"}>
              {product.cost}
            </Text>
            <Flex h={"30px"} border={"1px solid black"} mx={2}></Flex>
            <Text fontSize={"2xl"}>{product.weight}</Text>
          </Flex>
          <Button
            mt={10}
            key={product.id}
            backgroundColor={"#decb6a"}
            onClick={() => addItemInCart(product)}
            w={"150px"}
          >
            <Text fontWeight={"bold"}>ЗАКАЗАТЬ</Text>
          </Button>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default FullProductPage;

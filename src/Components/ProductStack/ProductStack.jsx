import { Container, Icon, Flex, Image, Text, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import networkError from "../../Assets/Image/networkError.png";
import { FaStar } from "react-icons/fa";
import SkeletonProduct from "../Skeleton/SkeletonProduct";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../../Redux/CartSlice";
import { useToast } from "@chakra-ui/react";
import { fetchData } from "../../Redux/DataSlice";
const ProductStack = ({ title, type }) => {
  const toast = useToast();
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.CartSlice);
  const { dataFromServer, status } = useSelector((state) => state.DataSlice);
  const countChecker = (itemId) => {
    const itemInCart = cart.find((item) => item.id === itemId);
    return itemInCart ? itemInCart.count < 9 : true;
  };
  const showToast = (isSuccess, item) => {
    const toastSettings = {
      position: "top",
      duration: 2000,
      isClosable: true,
    };

    if (isSuccess) {
      toast({
        ...toastSettings,
        title: "Товар добавлен",
        description: `Товар ${item.name} на сумму (${item.cost} грн.) добавлен в корзину!`,
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

  const [isHovered, setIsHovered] = useState(null);
  const addItemInCart = (item) => {
    dispatch(addItems(item));
    showToast(countChecker(item.id), item);
  };
  const fetchsData = async () => {
    dispatch(fetchData());
  };

  useEffect(() => {
    fetchsData();
    console.log("reloaded"); // eslint-disable-next-line
  }, []);

  return (
    <Flex flexDir={"column"}>
      <Flex flexDir={"column"} justify={"center"} alignItems={"center"}>
        {" "}
        <Text p={5} fontWeight={"bold"} fontSize={"4xl"}>
          {title}{" "}
        </Text>{" "}
        {status === "error" ? (
          <Flex>
            <Image src={networkError} />
          </Flex>
        ) : (
          <Container maxW={"7xl"} mt={2}>
            <Flex justify={"center"} flexWrap="wrap" gridGap={2}>
              {status === "loading"
                ? [...new Array(6)].map((_, index) => (
                    <SkeletonProduct key={index} />
                  ))
                : dataFromServer
                    .filter((item) => item.type === type)
                    .map((item) => (
                      <Flex
                        key={item.id}
                        w={"600px"}
                        border={"1px solid #ccc"}
                        borderRadius={"5px"}
                        p={4}
                        flexDir={"column"}
                        backgroundColor={"white"}
                        onMouseEnter={() => setIsHovered(item.id)}
                        onMouseLeave={() => setIsHovered(null)}
                        cursor={"pointer"}
                      >
                        <Text fontWeight={"bold"} fontSize={"2xl"}>
                          {item.name}
                        </Text>
                        <Flex>
                          {[...Array(5)].map((_, index) => (
                            <Icon
                              key={index}
                              as={FaStar}
                              color={
                                index < item.starCount ? "#c78500" : "gray"
                              } // Используйте серый цвет для незакрашенных звезд
                              h={6}
                              w={6}
                            />
                          ))}
                        </Flex>

                        {isHovered === item.id ? (
                          <Flex
                            flexDir={"column"}
                            justify={"center"}
                            alignItems={"center"}
                          >
                            <Image opacity={"20%"} src={item.imageURL} />
                            <Text
                              pos={"absolute"}
                              fontWeight={"bold"}
                              flexWrap={"wrap"}
                              w={"500px"}
                            >
                              {item.consist}
                            </Text>
                          </Flex>
                        ) : (
                          <Flex
                            transition={"ease-out 2s"}
                            flexDir={"column"}
                            justify={"center"}
                            alignItems={"center"}
                          >
                            <Image src={item.imageURL} loading="eager" />
                          </Flex>
                        )}
                        <Flex
                          flexDir={"row"}
                          alignItems={"center"}
                          justifyContent={"space-between"}
                          mt={5}
                        >
                          <Flex>
                            {" "}
                            <Text fontWeight={"bold"} fontSize={"2xl"}>
                              {item.cost}
                            </Text>
                            <Flex
                              h={"30px"}
                              border={"1px solid black"}
                              mx={2}
                            ></Flex>
                            <Text fontSize={"2xl"}>{item.weight}</Text>
                          </Flex>

                          <Button
                            key={item.id}
                            backgroundColor={"#decb6a"}
                            onClick={() => addItemInCart(item)}
                          >
                            <Text fontWeight={"bold"}>ЗАКАЗАТЬ</Text>
                          </Button>
                        </Flex>
                      </Flex>
                    ))}
            </Flex>
          </Container>
        )}
      </Flex>
    </Flex>
  );
};

export default ProductStack;

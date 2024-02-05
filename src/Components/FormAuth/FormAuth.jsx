import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Text, Button, Flex } from "@chakra-ui/react";
import { DeliverFormSchema } from "../../Utills/Schemas/DeliverySchema";
import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { clearCart } from "../../Redux/CartSlice";
import { useDispatch } from "react-redux";

const FormDeliver = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(DeliverFormSchema),
  });
  const dispatch = useDispatch();
  const toast = useToast();

  const { totalPrice, totalCount } = useSelector((state) => state.CartSlice);

  const onSubmit = (data) => {
    if (totalCount < 1) {
      toast({
        position: "top",
        duration: 8000,
        isClosable: true,
        title: "Добавьте товар!",
        description: `Ваша корзина пуста!`,
        status: "error",
      });
    } else {
      console.log(data);
      dispatch(clearCart());
      toast({
        position: "top",
        duration: 8000,
        isClosable: true,
        title: "Заказ принят!",
        description: `Мы свяжимся с Вами в течении 5 минут по номеру  ${data.phone}! 
       Сумма: ${totalPrice} грн.`,
        status: "success",
      });
      reset();
    }
  };

  return (
    <Flex flexDir={"column"} w={"100%"} p={5}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text mt={5}>Имя*</Text>
        <Input {...register("firstName")} />
        <Text color={"red"}>{errors.firstName?.message}</Text>
        <Text mt={5}>Фамилия*</Text>
        <Input {...register("lastName")} />
        <Text color={"red"}>{errors.lastName?.message}</Text>
        <Text mt={5}>Телефон*</Text>
        <Input {...register("phone")} />
        <Text color={"red"}>{errors.phone?.message}</Text>
        <Text mt={5}>Почта*</Text>
        <Input {...register("email")} />
        <Text color={"red"}>{errors.email?.message}</Text>
        <Button type="submit" mt={5}>
          <Text>Подтвердить</Text>
        </Button>
      </form>
    </Flex>
  );
};
export default FormDeliver;

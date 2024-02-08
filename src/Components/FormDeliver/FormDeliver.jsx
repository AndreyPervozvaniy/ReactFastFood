import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Text, Button, Flex, useToast, Spinner } from "@chakra-ui/react";
import { DeliverFormSchema } from "../../Utills/Schemas/DeliverySchema";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../Redux/CartSlice";
import { useEffect, useState } from "react";
import axios from "axios";
const FormDeliver = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    control,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(DeliverFormSchema),
  });
  const dispatch = useDispatch();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { totalPrice, cart, totalCount } = useSelector(
    (state) => state.CartSlice
  );
  useEffect(() => {
    setValue("products", cart);
    setValue("totalPrice", totalPrice);
  }, [cart, totalPrice, setValue]);
  const onSubmit = async (data) => {
    if (totalCount < 1) {
      toast({
        position: "top",
        duration: 8000,
        isClosable: true,
        title: "Корзина пуста!",
        description: `Добавьте товар в корзину! 
          Сумма: ${totalPrice} грн.`,
        status: "error",
      });
      return;
    } else {
      try {
        setIsLoading(true);
        const response = await axios.post(
          "https://65a93323219bfa371868c106.mockapi.io/Burger",
          data
        );
        console.log("Форма успешно отправлена!");
        dispatch(clearCart());
        toast({
          position: "top",
          duration: 8000,
          isClosable: true,
          title: "Заказ принят!",
          description: `Мы свяжемся с Вами в течении 5 минут по номеру ${data.phone}! 
              Сумма: ${totalPrice} грн.`,
          status: "success",
        });
        reset();
      } catch (error) {
        console.error("Ошибка при отправке формы на сервер:", error);
        toast({
          position: "top",
          duration: 8000,
          isClosable: true,
          title: "Ошибка при отправке формы на сервер",
          status: "error",
        });
      } finally {
        setIsLoading(false);
      }
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
        <Text color={"red"}>{errors.email?.message}</Text>{" "}
        <Controller
          name="products"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <Flex display="none">
              {field.value.map((product, index) => (
                <Flex key={index}>
                  <Text>{product.name}</Text>
                  <Text>{product.cost}</Text>
                </Flex>
              ))}
            </Flex>
          )}
        />
        <Button type="submit" mt={5} disabled={isLoading}>
          {isLoading ? (
            <Spinner color="white" size="md" />
          ) : (
            <Text>Подтвердить</Text>
          )}
        </Button>
      </form>
    </Flex>
  );
};
export default FormDeliver;

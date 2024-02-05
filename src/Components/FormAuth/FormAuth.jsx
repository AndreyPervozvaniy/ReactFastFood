import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Text, Button, Flex } from "@chakra-ui/react";
import { DeliverFormSchema } from "../../Utills/Schemas/DeliverySchema";
import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { clearCart } from "../../Redux/CartSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
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
  const { totalPrice, cart } = useSelector((state) => state.CartSlice);
  useEffect(() => {
    setValue("products", cart);
    setValue("totalPrice", totalPrice);
  }, [cart, totalPrice, setValue]);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true); // Устанавливаем состояние в true перед отправкой
      const response = await fetch(
        "https://65a93323219bfa371868c106.mockapi.io/Burger",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        console.log("Форма успешно отправлена на сервер");
        // Ваши дополнительные действия по успешной отправке
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
      } else {
        console.error("Ошибка при отправке формы на сервер");
        // Ваши действия в случае ошибки
      }
    } catch (error) {
      console.error("Ошибка при отправке формы на сервер:", error);
      // Ваши действия в случае ошибки
    } finally {
      setIsLoading(false); // В любом случае устанавливаем состояние в false
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
          defaultValue={[]} // Значение по умолчанию
          render={({ field }) => (
            <div>
              {/* Отображение данных о продуктах в корзине */}
              {field.value.map((product, index) => (
                <div key={index}>
                  <p>{product.name}</p>
                  <p>{product.cost}</p>
                  {/* Добавьте другие поля, если необходимо */}
                </div>
              ))}
            </div>
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

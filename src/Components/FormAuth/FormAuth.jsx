import { Flex, Input, Text, Button } from "@chakra-ui/react";
import React from "react";
import { useForm, Controller, useFormState } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const FormAuth = () => {
  const schema = z.object({
    name: z
      .string()
      .min(3, "Имя должно содержать минимум 3 символа")
      .refine((data) => /[А-Я]/.test(data), {
        message: "Имя должно содержать заглавную букву",
      })
      .refine((data) => data.trim() !== "", {
        message: "Поле Имя не должно быть пустым",
      }),
    lastName: z
      .string()
      .min(3, "Фамилия должна содержать минимум 3 символа")
      .refine((data) => /[А-Я]/.test(data), {
        message: "Фамилия должна содержать заглавную букву",
      })
      .refine((data) => data.trim() !== "", {
        message: "Поле Фамилия не должно быть пустым",
      }),
    paymentMethod: z
      .string()
      .refine((value) => ["cash", "card"].includes(value), {
        message: "Выберите корректный способ оплаты",
      }),
  });

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const paymentMethod = watch("paymentMethod");

  const onSubmit = (data) => {
    console.log(data);
    console.log("Selected payment method:", paymentMethod);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDir={"column"} w={"100%"} p={4}>
        <Flex flexDir={"column"} mt={2}>
          <Text fontWeight={"bold"}>Имя*</Text>
          <FormControl isInvalid={errors.name}>
            <Controller
              name="name"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <Input {...field} w={"full"} borderRadius={"0px"} />
              )}
            />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>
        </Flex>
        <Flex flexDir={"column"} mt={2}>
          <Text fontWeight={"bold"}>Фамилия*</Text>
          <FormControl isInvalid={errors.lastName}>
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input {...field} w={"full"} borderRadius={"0px"} />
              )}
            />
            <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
          </FormControl>
        </Flex>

        <FormControl>
          <FormLabel>Способ оплаты</FormLabel>
          <Controller
            name="paymentMethod"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select {...field}>
                <option value="cash">Наличными</option>
                <option value="card">Оплата картой на сайте</option>
              </Select>
            )}
          />
        </FormControl>
        <Button type="submit">Submit</Button>
      </Flex>
    </form>
  );
};

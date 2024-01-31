import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  firstName: z
    .string()
    .min(3, "Имя должно содержать не менее 3 символов")
    .refine((value) => value.trim() !== "", {
      message: "Имя обязательно для заполнения",
    }),
  lastName: z
    .string()
    .min(3, "Фамилия должна содержать не менее 3 символов")
    .refine((value) => value.trim() !== "", {
      message: "Фамилия обязательна для заполнения",
    }),
  phoneNumber: z
    .string()
    .refine((value) => /^\+380\d{9}$/.test(value), {
      message: "Неправильный формат номера телефона",
    })
    .refine((value) => value.trim() !== "", {
      message: "Номер телефона обязателен для заполнения",
    }),
});

const MyForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  // Устанавливаем значение по умолчанию для номера телефона
  useEffect(() => {
    setValue("phoneNumber", "+380");
  }, [setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Имя:</label>
        <input {...register("firstName")} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div>
        <label>Фамилия:</label>
        <input {...register("lastName")} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <label>Номер телефона:</label>
        <input {...register("phoneNumber")} />
        {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default MyForm;

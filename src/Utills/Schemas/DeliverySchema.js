import * as yup from "yup";

export const DeliverFormSchema = yup
  .object({
    firstName: yup
      .string()
      .min(3, "Минимум 3 символа")
      .required("Обязательное поле"),
    lastName: yup
      .string()
      .min(3, "Минимум 3 символа")
      .required("Обязательное поле"),
    email: yup.string().email().required("Обязательное поле"),
    phone: yup.string().required("Обязательное поле"),
  })
  .required();

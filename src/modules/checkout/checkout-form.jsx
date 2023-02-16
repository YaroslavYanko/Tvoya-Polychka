import { Button } from "@app/common/components/button/button.component";
import { Input } from "@app/common/components/input/input.component";
import { RadioGroup } from "@app/common/components/radio-group/radio-group";
import { TextArea } from "@app/common/components/textarea/text-area";
import { phoneRegexp } from "@app/common/untils/regex";
import { Payment_Types_Enum } from "@app/core/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

const validate = yup.object({
  name: yup.string().required("Обов'язкове поле !"),
  surname: yup.string().required("Обов'язкове поле !"),
  adress: yup.string().required("Обов'язкове поле !"),
  phoneNumber: yup
    .string()
    .trim()
    .matches(phoneRegexp, "Номер мобільного телефону неправильний")
    .required("Введіть номер телефону"),
  comment: yup.string().notRequired(),
  paymentType: yup
    .string()
    .oneOf([
      Payment_Types_Enum.Cash,
      Payment_Types_Enum.Online,
      Payment_Types_Enum.Card,
    ]),
});

const options = [
  { label: "Оплата при отриманні", value: Payment_Types_Enum.Cash },
  // { label: "Оплата через сайт", value:  Payment_Types_Enum.Online },
  { label: "Оплата по реквізитах", value:  Payment_Types_Enum.Card },
];

export const CheckoutForm = ({ submitCallback ,initialValues}) => {
  const { control, handleSubmit ,reset} = useForm({
    resolver: yupResolver(validate),
    defaultValues: {
      name: "",
      surname: "",
      adress: "",
      phoneNumber: "",
      comment: "",
      paymentType: Payment_Types_Enum.Cash ,
    },
  });

  useEffect(() => {
 console.log(initialValues)
      reset({
        name:initialValues?.customers[0].name ?? "",
        surname:initialValues?.customers[0].surname ?? "",
        adress: initialValues?.customers[0].address ?? "",
        phoneNumber: initialValues?.customers[0].phone?? "",
      });

  }, [initialValues]);


  const onSubmit = async (values) => {

    if (submitCallback) {
      try {
        await submitCallback(values);

        toast.success("Замовленя стоворене");
      } catch (e) {
        toast.error(e.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="phoneNumber"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            label="Номер телефону"
            placeholder="Введіть ваш номер телефону"
            error={fieldState.error?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            label="Ім'я"
            placeholder="Введіть ваше ім'я"
            error={fieldState.error?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="surname"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            label="Фамілія"
            placeholder="Введіть вашу фамілію"
            error={fieldState.error?.message}
            {...field}
          />
        )}
      />

      <Controller
        name="adress"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            label="Адреса"
            placeholder="Введіть вашу адресу"
            error={fieldState.error?.message}
            {...field}
          />
        )}
      />

      <Controller
        name="comment"
        control={control}
        render={({ field }) => (
          <TextArea
            label="Коментар до замовлення"
            placeholder="Введіть додаткову інформацію до замовлення"
            {...field}
          />
        )}
      />

      <Controller
        name="paymentType"
        control={control}
        render={({ field }) => <RadioGroup options={options} {...field} />}
      />
      <Button type="submit">Підтвердити замовлення</Button>
    </form>
  );
};

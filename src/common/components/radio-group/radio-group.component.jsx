import { RadioGroup } from "./radio-group";
import { Controller, useForm } from "react-hook-form";
import { Payment_Types_Enum } from "@app/core/types";


export const RadioGroupComponent = ({options}) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      paymentType: Payment_Types_Enum.Cash,
    },
  });

  const onSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="paymentType"
        control={control}
        render={({ field }) => <RadioGroup options={options} {...field} />}
      />
      <button type="submit">Чек</button>
    </form>
  );
};

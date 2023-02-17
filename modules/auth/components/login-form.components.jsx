import { Button } from "@app/common/components/button/button.component";
import { Input } from "@app/common/components/input/input.component";
import styles from "../page/login-form-page.module.css";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Counter } from "@app/common/components/counter/counter.component";
import { phoneRegexp } from "@app/common/untils/regex";
import { toast } from "react-toastify";

const generateValidationSchema = (step) => {
  if (step === "first") {
    return yup.object({
      phoneNumber: yup
        .string()
        .trim()
        .matches(phoneRegexp, "Номер мобільного телефону неправильний")
        .required("Введіть номер телефону"),
    });
  }
  if (step === "second") {
    return yup.object({
      code: yup.string().required("Введіть код з sms"),
    });
  }
};

export const LoginForm = ({ onFirstStepCallback, onSecondStepCallback }) => {
  const [step, setStep] = useState("first");

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    getValues,
  } = useForm({
    resolver: yupResolver(generateValidationSchema(step)),
    defaultValues: {
      phoneNumber: "",
      code: "",
    },
  });

  const submitForm = async (values) => {
    try {
      if (step === "first") {
        if (onFirstStepCallback !== undefined) {
          await onFirstStepCallback(values.phoneNumber);
        }
        setStep("second");
        return;
      }
      console.log(values);

      if (onSecondStepCallback !== undefined) {
        await onSecondStepCallback(values.phoneNumber, values.code);
      }
    } catch (e) {
      toast.error(e.message);
    }
  };

  const onResend = async () => {
    const phoneNumber = getValues("phoneNumber");

    if (onFirstStepCallback) {
      try {
        await onFirstStepCallback(phoneNumber);
      } catch (e) {
        toast.error(e.message);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              label="Введіть ваш номер мобільного телефону"
              placeHolder="+380"
              disabled={step === "second"}
              error={fieldState.error?.message}
              {...field}
            />
          )}
        />
        {step === "second" && (
          <Controller
            name="code"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                label="Код"
                placeHolder="Код з sms"
                disabled={isSubmitting}
                error={fieldState.error?.message}
                {...field}
              />
            )}
          />
        )}
        <div className={styles.form__button}>
          <Button type="submit">
            {step === "first" ? "Отримати код" : "Увійти"}
          </Button>
        </div>
        {step === "second" && (
          <>
            <Counter onRestart={onResend}>Відправити код ще раз</Counter>
          </>
        )}
      </form>
    </div>
  );
};

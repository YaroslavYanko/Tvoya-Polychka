import { useForm } from "react-hook-form";
import { phoneRegexp } from "@app/common/untils/regex";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { UserInputProfile } from "@app/common/components/user-profile/user-input-profile";
import { Input } from "@app/common/components/input/input.component";
import { Controller } from "react-hook-form";
import { Button } from "@app/common/components/button/button.component";

import styles from "../../pages/profile-page.module.css";
import { toast } from "react-toastify";
import { useEffect } from "react";

const validationSchema = yup.object({
  phoneNumber: yup
    .string()
    .trim()
    .matches(phoneRegexp, "Номер мобільного телефону неправильний")
    .required("Введіть номер телефону"),
  name: yup.string().matches(/.{3,}/, {
    excludeEmptyString: true,
    message: "Введіть мінімум 3 символи !",
  }),
  surname: yup.string().matches(/.{3,}/, {
    excludeEmptyString: true,
    message: "Введіть мінімум 3 символи !",
  }),
  address: yup.string().matches(/.{3,}/, {
    excludeEmptyString: true,
    message: "Введіть мінімум 3 символи !",
  }),
});

export const UpdateInfo = ({
  initialValues,
  onSubmitCallback,
  isProfileUpdating,
}) => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      phoneNumber: initialValues?.phone,
      name: initialValues?.name || "",
      surname: initialValues?.surname || "",
      address: initialValues?.address || "",
    },
  });
  useEffect(() => {
    if (!isProfileUpdating) {
      reset({
        phoneNumber: initialValues?.phone ?? "",
        name: initialValues?.name ?? "",
        surname: initialValues?.surname ?? "",
        address: initialValues?.address ?? "",
      });
    }
  }, [initialValues, isProfileUpdating]);

  const onSubmit = async (values) => {
    console.log(values);
    if (onSubmitCallback) {
      try {
        await onSubmitCallback(values);
        toast.success("Дані прийняті");
      } catch (e) {
        toast.error(e.message);
      }
    }
  };

  return (
    <UserInputProfile title="Персональні дані">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.update__info}>
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field, fieldState }) => (
              <Input
                {...field}
                error={fieldState.error?.message}
                label="Телефон"
                disabled
                placeholder="Введіть номер телефону"
              />
            )}
          />
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <Input
                {...field}
                error={fieldState.error?.message}
                label="Ім'я"
                placeholder="Введіть ім'я"
              />
            )}
          />
          <Controller
            control={control}
            name="surname"
            render={({ field, fieldState }) => (
              <Input
                {...field}
                error={fieldState.error?.message}
                label="Фамілія"
                placeholder="Введіть фамілію"
              />
            )}
          />
          <Controller
            control={control}
            name="address"
            render={({ field, fieldState }) => (
              <Input
                {...field}
                error={fieldState.error?.message}
                label="Адрес"
                placeholder="Введіть адресу"
              />
            )}
          />
        </div>

        <div className={styles.button__update_info}>
          <Button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting}
          >
            Зберегти
          </Button>
        </div>
      </form>
    </UserInputProfile>
  );
};

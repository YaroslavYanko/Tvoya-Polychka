import { useReactiveVar } from "@apollo/client";
import { LineImages } from "@app/common/components/line-images/line-images";
import {
  useCreateOrderMutation,
  useGetCustomerDataQuery,
} from "@app/core/types";
import { CartList } from "@app/modules/cart/components/cart-list/cart-list";
import { cartState, cleanCart } from "@app/modules/cart/store/cart-state";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckoutForm } from "../checkout-form";
import styles from "../checkout.module.css";

export const CheckoutPage = () => {
  const cart = useReactiveVar(cartState);

  const navigate = useNavigate();

  useEffect(() => {
    //Object.keys повертає ключі обєкта
    if (Object.keys(cart).length === 0) {
      navigate("/", { replace: true });
    }
  }, [cart]);

  const [createOrderMutatio] = useCreateOrderMutation();

  const handleCheckoutSubmit = async (values) => {
    const items = Object.keys(cart)
      .map((cartId) => {
        return `${cartId}_${cart[cartId]}`;
      })
      .join(",");

    await createOrderMutatio({
      variables: {
        client_adress: values.adress,
        client_name: values.name,
        client_phone: values.phoneNumber,
        client_surname: values.surname,
        items,
        payment_type: values.paymentType,
        comment: values.comment,
      },
    });

    cleanCart();

    navigate("/checkout/thakns-you", { replace: true });
  };

  //Дані залогіненого користувача
  const { data } = useGetCustomerDataQuery();

  return (
    <div>
      <LineImages />
      <div className={styles.container}>
        <div className={styles.wrapper__checkout_form}>
          <CheckoutForm
            submitCallback={handleCheckoutSubmit}
            initialValues={data}
          />
          <CartList />
        </div>
      </div>
    </div>
  );
};

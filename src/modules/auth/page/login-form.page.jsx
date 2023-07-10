import { validateApolloResponse } from "@app/common/untils/validate-apollo-response";
import {
  useCustomerLoginLazyQuery,
  useCustomerVerifyCodeLazyQuery,
} from "@app/core/types";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/login-form.components";
import { isLoggedInReactive } from "../store/reactive-vars";
import { Helmet } from "react-helmet";
import styles from "./login-form-page.module.css";
import { LineImages } from "@app/common/components/line-images/line-images";

export const LoginFormPage = () => {
  const navigate = useNavigate();

  const [sendPhoneNumber] = useCustomerLoginLazyQuery({
    fetchPolicy: "network-only",
  });
  const [sendPhoneWithCode] = useCustomerVerifyCodeLazyQuery({
    fetchPolicy: "network-only",
  });

  const onFirstStepCallback = async (phoneNumber) => {
    const queryResult = await sendPhoneNumber({ variables: { phoneNumber } });

    validateApolloResponse(queryResult);
  };

  const onSecondStepCallback = async (phoneNumber, code) => {
    const queryResult = await sendPhoneWithCode({
      variables: { phoneNumber, code },
    });

    validateApolloResponse(queryResult);

    if (queryResult.data?.customerVerifyCode?.accessToken) {
      localStorage.setItem(
        "jwt",
        queryResult.data?.customerVerifyCode?.accessToken
      );

      isLoggedInReactive(true);
      navigate("/");
    }
  };

  return (
    <>
      <LineImages />
      <Helmet>
        <title>Вхід</title>
      </Helmet>
      <div className={styles.container}>
        <div className={styles.form__page_login}>
          <LoginForm
            onFirstStepCallback={onFirstStepCallback}
            onSecondStepCallback={onSecondStepCallback}
          />
        </div>
      </div>
    </>
  );
};

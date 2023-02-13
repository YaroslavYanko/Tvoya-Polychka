import { forwardRef, useId } from "react";
import styles from "./input.module.css";

export const Input = forwardRef(
  ({ label, placeHolder, error, ...props }, ref) => {
    const inputId = useId();

    return (
      <div className={styles.input__login}>
        <label htmlFor={inputId}>{label}</label>
        <div>
          <input
            className={styles.input__phone}
            placeholder={placeHolder}
            ref={ref}
            id={inputId}
            {...props}
          />
        </div>
        <div className={styles.input__login_error}>
          <span
            dangerouslySetInnerHTML={{
              __html: error || "&nbsp;",
            }}
          />
        </div>
      </div>
    );
  }
);

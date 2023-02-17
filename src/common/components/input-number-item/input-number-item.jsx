import { forwardRef, useId } from "react";
import { CiSquarePlus , CiSquareMinus } from "react-icons/ci";

import styles from "./input-number.module.css";

export const InputNumber = forwardRef(
  (
    {
      handleChangeAmount,
      label,
      placeHolder,
      setValue,
      value,
      error,
      size,
      ...props
    },
    ref
  ) => {
    const inputId = useId();

    const onHandlerDecrement = () => {
      if (setValue && value) {
        setValue(value - 1);
      }
    };
    const onHandlerIncrement = () => {
      if (setValue && value) {
        setValue(value + 1);
      }
    };

    return (
      <div className={styles.input__login}>
        <label htmlFor={inputId}>Кількість</label>

        <div className={styles.input__login_value}>
          <button
             style={{marginRight: '5px'}}
            className={styles.input__number_btn}
            onClick={onHandlerDecrement}
          >
           <CiSquareMinus/>
          </button>
          <input
            className={styles.input__phone}
            ref={ref}
            type="number"
            value={value ?? 0}
            id={inputId}
            readOnly
            {...props}
          />
          <button
            className={`${styles.input__number_btn} ${styles.btn__plus}`}
            onClick={onHandlerIncrement}
          >
            <CiSquarePlus/>
          </button>
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

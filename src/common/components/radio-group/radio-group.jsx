import { RadioInput } from "../radio-input/radio-input";
import { forwardRef } from "react";
import styles from "./radio-input.module.css";

export const RadioGroup = forwardRef(
  ({ options, name, onChange, value, label }, ref) => {
    return (
      <div ref={ref} className={styles.wrapper__radio_btn}>
      
        {options.map((option) => (
          <RadioInput
            {...option}
            name={name}
            key={`radio-input-${name}-${option.value}`}
            onChange={onChange}
            defaultChecked={option.value === value}
          />
        ))}
      </div>
    );
  }
);

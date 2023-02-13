import React, { useId } from "react";
import styles from "../radio-group/radio-input.module.css";

export const RadioInput = ({label,...props}) => {
    const radioId = useId()

  return (
    <div className={styles.input__radio_wrapper}>
        <input type="radio" id={radioId}  {...props}/>
         <label className={styles.input__radio_label} htmlFor={radioId}>{label}</label>
    </div>
  );
};
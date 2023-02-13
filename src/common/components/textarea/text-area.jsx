import { forwardRef, useId } from "react";
import styles from "./text-area.module.css";

export const TextArea = forwardRef(
  ({ label, placeholder, error, ...props }, ref) => {
    const inputId = useId();

  return (
    <div className={styles.wrapper__textarea}>
      <label htmlFor={inputId}>{label}</label>
      <textarea
        id={inputId}
        ref={ref}
        rows={8}
        placeholder={placeholder}
     
        {...props}
      ></textarea>
    </div>
  );
  }
);

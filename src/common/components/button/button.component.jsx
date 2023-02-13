import styles from "./button.module.css";

export const Button = ({ children,disabled }) => {
  return <button className={styles.btn__form_in} disabled={disabled}>{children}</button>;
};

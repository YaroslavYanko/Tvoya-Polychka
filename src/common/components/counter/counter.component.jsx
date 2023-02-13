import { useEffect, useRef, useState } from "react";
import styles from "./counter.module.css";

export const Counter = ({ onRestart, children }) => {
  const [counter, setCounter] = useState(15);
  const [isDisabled, setIsDisabled] = useState(false);
  const counterRef = useRef(null);

  const startCounter = (event) => {
    if (event) {
      onRestart();
    }

    setCounter(15);
    setIsDisabled(true);
    counterRef.current = setInterval(() => {
      setCounter((counter) => counter - 1);
    }, 1000);
  };

  useEffect(() => {
    startCounter();
  }, []);

  useEffect(() => {
    if (counter === 0) {
      clearInterval(counterRef.current);
      setIsDisabled(false);
    }
  }, [counter]);

  return (
    <div className={styles.sms__counter}>
      <button
        className={`${styles.sms__counter_button} ${isDisabled && styles.sms__counter_wait} ${!isDisabled && styles.sms__counter_hover}`}
        disabled={isDisabled}
        onClick={startCounter}
      >
        {children} {isDisabled && `(${counter} сек)`}
      </button>
    </div>
  );
};

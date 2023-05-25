import { LineImages } from "@app/common/components/line-images/line-images";
import styles from "./blog.module.css";
import { useEffect } from "react";

export const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <LineImages />
      <div className={styles.blog__wrapper}>
        <h1> В процесі розробки</h1>
      </div>
    </>
  );
};

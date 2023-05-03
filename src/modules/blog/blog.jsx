import { LineImages } from "@app/common/components/line-images/line-images";
import styles from "./blog.module.css";

export const Blog = () => {
  return (
    <>
      <LineImages />
      <div className={styles.blog__wrapper}>
        <h1> В процесі розробки</h1>
      </div>
    </>
  );
};

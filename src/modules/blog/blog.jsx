import { LineImages } from "@app/common/components/line-images/line-images";
import styles from "./blog.module.css";
import { useEffect } from "react";

import artwork4 from "../../images/artwork4.jpg";

export const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <LineImages />
      <div className={styles.blog__wrapper}>
        {/* <div className={styles.blog__box}>
          <img src={artwork4} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            atque, excepturi mollitia fugit facilis consequuntur molestias
            adipisci ex fuga expedita quae temporibus ipsam rerum quis non,
            repudiandae in. Corporis, optio.
          </p>
        </div> */}
        <h1>В процесі розробки</h1>
      </div>
    </>
  );
};

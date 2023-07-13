import { useLocation } from "react-router-dom";
import styles from "./infoBlog.module.css";

import { LineImages } from "@app/common/components/line-images/line-images";

export function InfoBlog() {
  const location = useLocation();
  const blogData = location.state && location.state.blogData;

  return (
    <>
      <LineImages />

      <div className={styles.box_wrapper}>
        <div className={styles.first__line}>
          <img src={blogData.mainImg} alt="" />
          <h3>{blogData.name}</h3>
          <br />
          {blogData.description}
          <br />
          <br />
          {blogData.textOne}
        </div>
        <br />
        <div className={styles.secondImg}>
        <img src={blogData.secondImg} alt="" />
          {blogData.textTwo}
          <br />
          <br />
          {blogData.textThree}
      
        </div>

        <br />
        <div>
        <ul className={styles.blog__rules}>
          <li>{blogData.pointOne}</li>
          <li>{blogData.pointTwo}</li>
          <li>{blogData.pointThree}</li>
          <li>{blogData.pointFour}</li>
        </ul>
        </div>

      </div>
    </>
  );
}

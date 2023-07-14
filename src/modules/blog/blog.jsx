import { LineImages } from "@app/common/components/line-images/line-images";
import styles from "./blog.module.css";
import { useEffect } from "react";

import { blogInfo } from "./blogData";

import { Link } from "react-router-dom";



export const Blog = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <LineImages />

      <div className={styles.blog__wrapper}>
        {blogInfo.map((blog) => (
          <div className={styles.blog__box} key={`Cosmetic-blog-${blog.id}`}>
            <img src={blog.mainImg} alt="" />
            <div className={styles.blog__description}>
              <h4>{blog.name}</h4>
              <p>{blog.description.split(" ").splice(0, 30).join(" ")}...</p>
              <Link
                to={`/blog/${blog.id}`}
                className={styles.blog__link}
              
              >
                Читати більше
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

import React, { useState } from "react";
import styles from "../../../product-info-page.module.css";

const Description = ({ description, ingredients }) => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const lines = ingredients.split("\n");

  const newСharacter = lines.map((line, index) => {
    if (line.includes("-")) {
      const index = line.indexOf("-");
      return (
        <li key={`${line}-ingredients-${index}`}>
          <b> {line.substring(0, index)}-</b> {line.substring(index + 1)}
        </li>
      );
    } else {
      return <li key={`${line}-ingredients-${index}`}>{line}</li>;
    }
  });

  return (
    <div className={styles["description-block"]}>
      <div className={styles.tabs}>
        <span
          className={`${styles.tab} ${
            activeTab === "description" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("description")}
        >
          Опис
        </span>

        <span
          className={`${styles.tab} ${
            activeTab === "characteristics" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("characteristics")}
        >
          Складові
        </span>
      </div>
      <div className={styles.content}>

        {activeTab === "description" && <p>{description}</p>}

    
        {activeTab === "characteristics" && <ul>{newСharacter}</ul>}
      </div>
    </div>
  );
};

export default Description;

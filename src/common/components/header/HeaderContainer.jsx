import { useState } from "react";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import DropDownList from "./DropDownList/DropDownList";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInReactive } from "@app/modules/auth/store/reactive-vars";
import { useLocation } from "react-router-dom";
import styles from "./header.module.css";
// import video from "../../../video/subtil.mp4";
import { UsefulInformation } from "./useful-information/useful-information";

const HeaderContainer = ({ showAllProducts }) => {
  const [useCategory, setCategory] = useState(false);
  let isLoggedIn = useReactiveVar(isLoggedInReactive);

  const location = useLocation();
  const mainHeader = location.pathname === "/";


  const showCategory = (e) => {
    setCategory(true);
  };
  const hideCategory = (e) => {
    if (e.target.dataset.dropList === "drop-list") {
      return;
    } else {
      setCategory(false);
    }
  };

  return (
    <div
      className={`${
        mainHeader ? styles.header__video : styles.header__video_hide
      }`}
    >
      {/* {mainHeader && <video src={video} autoPlay loop muted />} */}
      <div>
        <HeaderMenu
          hideCategory={hideCategory}
          showCategory={showCategory}
          isLoggedIn={isLoggedIn}
        />
        {useCategory ? (
          <DropDownList
            showAllProducts={showAllProducts}
            hideCategory={hideCategory}
          />
        ) : null}
      </div>
      {mainHeader && <UsefulInformation/>}
       
    </div>
  );
};

export default HeaderContainer;

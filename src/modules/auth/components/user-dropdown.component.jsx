import styles from "../page/login-form-page.module.css";
import accaunt from "../../../images/accaunt.svg";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useOnClickOutside } from "@app/common/hooks/use-on-click-outside.hook";
import { isLoggedInReactive } from "../store/reactive-vars";

import { HiOutlineUserCircle } from "react-icons/hi";

export const UserDropdown = ({mainPage}) => {
  const [isDropDownOpen, setDropDownOpen] = useState(false);

  const toggleDropDownState = () => setDropDownOpen((drop) => !drop);
  
  const ref =useRef(null)

  useOnClickOutside(ref,()=>{
    if(!isDropDownOpen)return
    toggleDropDownState()
  })

 const logout = ()=>{
    toggleDropDownState()
    localStorage.removeItem('jwt')
    isLoggedInReactive(false)
 }

  return (
    <div className={styles.user__drop} ref={ref}>
      <button onClick={toggleDropDownState} className={styles.user__drop_icon}  style={{ color: mainPage ? '#444444' : "white" }}>
     <HiOutlineUserCircle/>
      </button>
      {isDropDownOpen && (
        <div className={styles.user__drop_menu}>
          <Link to="/profile" onClick={toggleDropDownState}>Ваш профіль</Link>
          <Link to="" onClick={logout}>Вийти</Link>
        </div>
      )}
    </div>
  );
};

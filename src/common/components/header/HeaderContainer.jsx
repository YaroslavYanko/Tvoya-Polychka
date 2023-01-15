import { useState } from "react";

import HeaderMenu from "./HeaderMenu/HeaderMenu";
import DropDownList from "./DropDownList/DropDownList";

const HeaderContainer = ({showAllProducts}) => {
  const [useCategory, setCategory] = useState(false);
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
    <>
      <HeaderMenu hideCategory={hideCategory} showCategory={showCategory} />
      {useCategory ? <DropDownList showAllProducts={showAllProducts} hideCategory={hideCategory} /> : null}
    </>
  );
};

export default HeaderContainer;

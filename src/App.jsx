import HeaderContainer from "./common/components/header/HeaderContainer";
import MobileMenu from "./common/components/header/MobileMenu/MobileMenu";
import Footer from "./modules/main-page/components/Footer/Footer";
import { MainPage } from "./modules/main-page/pages/main.page";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import { ProductsPage } from "./modules/products-page/pages/products.page";
import { useGetCategoriesQuery } from "./core/types";



function App() {
  const { data } = useGetCategoriesQuery
    const showAllProducts=(categori)=>{
      //  if(categori==="Сlothes")return data
    }
  return (
    <BrowserRouter>
      <HeaderContainer showAllProducts={showAllProducts}/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" showAllProducts={showAllProducts} element={<ProductsPage/>} />
      </Routes>
      <Footer />
      <MobileMenu />
    </BrowserRouter>
  );
}

export default App;

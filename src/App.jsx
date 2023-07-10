// import MobileMenu from "./common/components/header/MobileMenu/MobileMenu";
import Footer from "./modules/main-page/components/Footer/Footer";
import { MainPage } from "./modules/main-page/pages/main.page";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import { ProductsPage } from "./modules/products-page/pages/products.page";
import { LoginFormPage } from "./modules/auth/page/login-form.page";
import { Helmet } from "react-helmet";
import { createContext, useEffect, useState } from "react";
import { isLoggedInReactive } from "./modules/auth/store/reactive-vars";
import { ProfilePage } from "./modules/user/pages/profile-page";
import { PrivateRoute } from "./common/components/private-route/private-route.component";
import { CheckoutPage } from "./modules/checkout/pages/checkout.page";
import ThankYouPage from "./modules/checkout/pages/thank-you.page";
import { ProductInfoPage } from "./modules/product-info-page/page/product-info-page";
import HeaderContainer from "./modules/header/HeaderContainer";
import { Delivery } from "./modules/delivery/delivery";
import { Rules } from "./modules/rules/rules";
import { Blog } from "./modules/blog/blog";

export const TotalQuantityContext = createContext();

function App() {

  const [totalQuantity, setTotalQuantity] = useState(0);


    const updateTotalQuantity = () => {
      const state = localStorage.getItem("cart_state");
      const stateObj = JSON.parse(state);
      let newTotalQuantity = 0;
  
      for (const key in stateObj) {
        if (stateObj.hasOwnProperty(key)) {
          newTotalQuantity += stateObj[key];
        }
      }
  
      setTotalQuantity(newTotalQuantity);
    }
  


  const handleUpdateToCart = () => {
    updateTotalQuantity()
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    isLoggedInReactive(Boolean(token));
   
    window.scrollTo(0, 0);
  }, []);

    // Підписуємося на зміну totalQuantity
    useEffect(() => {
      updateTotalQuantity();
    }, []);

    

  return (
    <BrowserRouter>
      <Helmet titleTemplate="Твоя поличка - %s" defaultTitle="Твоя поличка" />

      <div className="wrapper__page">
      <TotalQuantityContext.Provider value={totalQuantity}>
      {/* Передаємо totalQuantity до компонента HeaderMenu */}
      <HeaderContainer handleUpdateToCart={handleUpdateToCart}/>
    </TotalQuantityContext.Provider>
   

        <Routes>
          <Route path="/login" element={<LoginFormPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductsPage  handleUpdateToCart={handleUpdateToCart} />} />
          <Route path="/products/:id" element={<ProductInfoPage handleUpdateToCart ={handleUpdateToCart} />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/checkout/thakns-you" element={<ThankYouPage />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

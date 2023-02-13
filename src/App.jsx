import HeaderContainer from "./common/components/header/HeaderContainer";
import MobileMenu from "./common/components/header/MobileMenu/MobileMenu";
import Footer from "./modules/main-page/components/Footer/Footer";
import { MainPage } from "./modules/main-page/pages/main.page";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import { ProductsPage } from "./modules/products-page/pages/products.page";
import { useGetCategoriesQuery } from "./core/types";
import { LoginFormPage } from "./modules/auth/page/login-form.page";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { isLoggedInReactive } from "./modules/auth/store/reactive-vars";
import { ProfilePage } from "./modules/user/pages/profile-page";
import { PrivateRoute } from "./common/components/private-route/private-route.component";
import { CheckoutPage } from "./modules/checkout/pages/checkout.page";
import ThankYouPage from "./modules/checkout/pages/thank-you.page";
import { ProductInfoPage } from "./modules/product-info-page/page/product-info-page";

function App() {
  const { data, loading } = useGetCategoriesQuery();
  const showAllProducts = null;

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    isLoggedInReactive(Boolean(token));
  }, []);

  return (
    <BrowserRouter>
      <Helmet titleTemplate="Твоя поличка - %s" defaultTitle="Твоя поличка" />
      <div className="wrapper__page">
        <HeaderContainer />

        <Routes>
          <Route path="/login" element={<LoginFormPage />} />
          <Route path="/" element={<MainPage />} />
          <Route
            path="/products"
            showAllProducts={showAllProducts}
            element={<ProductsPage />}
          />
          <Route path="/products/:id" element={<ProductInfoPage />} />
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
        </Routes>
        <Footer />
        <MobileMenu />
      </div>
    </BrowserRouter>
  );
}

export default App;

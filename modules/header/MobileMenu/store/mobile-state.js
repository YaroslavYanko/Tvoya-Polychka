import { makeVar } from "@apollo/client";

export const mobileMenuOpenedState = makeVar(false);

//Закрити і відкрити корзину 
export const openMobileMenu= () => {
    mobileMenuOpenedState(true);
};

export const closeMobileMenu = () => {
    mobileMenuOpenedState(false);
};


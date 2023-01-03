import HeaderContainer from "./common/components/header/HeaderContainer";
import MobileMenu from "./common/components/header/MobileMenu/MobileMenu";
import Footer from "./modules/goods/components/Footer/Footer";
import { GoodsPage } from "./modules/goods/pages/goods.page";



function App() {
  return (
    <div className="App">
       <HeaderContainer/>
        <GoodsPage/>
       <Footer/>
       <MobileMenu/>
    </div>
  );
}

export default App;

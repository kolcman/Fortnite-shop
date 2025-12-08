import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Shop />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;

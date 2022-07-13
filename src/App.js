import React, { useState } from "react";
import Header from "./components/Layout/Header";

import "./App.css";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const showCartHandler = () => {
    setCartIsVisible(true);
  };
  const hideCartHandler = () => {
    setCartIsVisible(false);
  };
  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <Meals></Meals>
      {cartIsVisible && <Cart onClose={hideCartHandler} />}
    </CartProvider>
  );
}

export default App;

import React, { useState } from 'react';
import Header from './compoenets/Layout/Header';
import Meals from './compoenets/Meals/Meals';
import Cart from './compoenets/Cart/Cart';
import CartProvider from './store/CartProvider';
function App() {
  const [isCartClicked, setCartClicked] = useState(false);

  const onCartCloseHandler = () => {
    setCartClicked(false);
  };

  const onCartOpenHandler = () => {
    setCartClicked(true);
  };

  return (
    <CartProvider>
      {isCartClicked && <Cart onCartCloseHandler={onCartCloseHandler}></Cart>}
      <Header onCartOpenHandler={onCartOpenHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;

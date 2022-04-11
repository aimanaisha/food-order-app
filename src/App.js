import Header from './Components/Header.js'
import { useState } from 'react';
import './App.css';
import Meals from './Components/Meals.js';
import Cart from './Components/Cart.js';
import CartProvider from './store/cart-provider.js';

function App() {

  const [showCard, setShowCard] = useState(false)

  const showCardHandler = () => {
    setShowCard(true)
  }

  const hideCardHandler = () => {
    setShowCard(false)
  }

  return (
    <CartProvider>
      {showCard && <Cart onHideCart={hideCardHandler}/>}
      <Header onShowCart={showCardHandler}/>
      <Meals/>
    </CartProvider>
  );
}

export default App;

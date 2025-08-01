import React from 'react';
import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Briyani from './pages/Briyani';
import Appam from './pages/Appam';
import Parotta from './pages/Parotta';
import Burgers from './pages/Burgers';
import Idli from './pages/Idli';
import Noodles from './pages/Noodles';
import Rest1 from './pages/Rest1';
import Cart from './Cart';
import MenuList from './MenuList';
import Payment from './Payment';
import OrderSuccess from './OrderSuccess';
import FoodItemCard from './FoodItemCard';
import { CartProvider } from './CartContext';

function App() {

  return (
    <div>
      <CartProvider>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Briyani" element={<Briyani />}/>
        <Route path="Appam" element={<Appam />}/>
        <Route path="Parotta" element={<Parotta />}/>
        <Route path="Burgers" element={<Burgers />}/>
        <Route path="Idli" element={<Idli />}/>
        <Route path="Noodles" element={<Noodles />}/>
        <Route path="Rest1" element={<Rest1 />}/>
        <Route path="Cart" element={<Cart />}/>
        <Route path="MenuList" element={<MenuList />}/>
        <Route path="/Payment" element={<Payment />}/>
        <Route path="/Order-Success" element={<OrderSuccess />}/>
        <Route path="/FoodItemCard" element={<FoodItemCard/>}/>
      </Routes>
      </CartProvider>
    </div>
  )
}

export default App

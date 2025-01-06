import React, {useState} from "react";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import SearchItem from "./Components/SearchItem";
import Cart from "./Components/Cart";
import {items} from './Components/Data'


const App = () => {
    const [data, setData] = useState([...items])
    const [cart, setCart] = useState([])
  return (
    <>
      <Router>
        <Navbar cart = {cart} setD={setData} />
        <Routes>
          <Route path="/" element={<Product items={data} cart ={cart} setCart={setCart} />} />
          <Route path="/product/:id" element={<ProductDetails cart ={cart} setCart={setCart} />}/>
            <Route path="/search/:term" element={<SearchItem cart ={cart} setCart={setCart} />} />
            <Route path="/cart" element={<Cart cart={cart}  setCart={setCart} />}  />
        </Routes>
      </Router>
    </>
  )
}

export default App;

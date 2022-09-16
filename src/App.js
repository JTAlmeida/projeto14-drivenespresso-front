import GlobalStyle from '../src/css/GlobalStyle'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/Home/Home";
import Signin from './Components/Signin/Signin'
import Signup from "./Components/Signin/Signin";
import Checkout from "./Components/checkout/Checkout";
import UserContext from './context/UserContext';

function App() {

  const [cartItems, setCartItems]=useState([]);
  const [products, setProducts]= useState([]);
  const [productsWihtNewQuantity, setproductsWihtNewQuantity]=useState([]);
  const [total,setTotal]=useState("");

  return (
    <>
    <UserContext.Provider value={{setProducts,products,cartItems,setCartItems,productsWihtNewQuantity,setproductsWihtNewQuantity,total,setTotal}}>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/sign-up" element={<Signup/>}></Route>
          <Route path="/sign-in" element={<Signin/>}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    </>
  );
}

export default App;
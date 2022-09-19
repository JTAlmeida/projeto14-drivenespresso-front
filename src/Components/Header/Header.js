import { Wrapper, ItemCount } from "./Header.style";
import logo from "../../assets/logo.png";
import cartIcon from "../../assets/iconfinder_cart_353403.svg";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ProductsContext from "../../context/ProductsContext";

export default function Header() {
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(ProductsContext);

  return (
    <Wrapper>
      <Sidebar />
      <img
        src={logo}
        alt="logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <img
        src={cartIcon}
        alt="cartIcon"
        className="svg"
        onClick={() => {
          navigate("/checkout");
        }}
      />
<<<<<<< HEAD
      {cartItems.length > 0 ? <ItemCount>{cartItems.length}</ItemCount> : <></>}
=======
      {cartItems === 'null'? <ItemCount>{cartItems.length}</ItemCount> : <></>}
>>>>>>> 2d581e03e190a4e573b1806b2ca39ed21aa0c5da
    </Wrapper>
  );
}

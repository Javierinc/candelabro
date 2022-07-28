
import { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { CartContext } from "../context/CartContext";
import { CartWidgetLink, CartWidgetTotal } from "./CartWidget.elements";


const CartWidget = () => {
  
  const {cart, quantityInCart} = useContext(CartContext)

  return (
    <CartWidgetLink to='/cart' >
        <HiShoppingCart size={"1.2em"}/>
        <CartWidgetTotal style={{display: cart.length === 0 ? "none" : "inline" }}>{quantityInCart()}</CartWidgetTotal>
    </CartWidgetLink>
  )
}

export default CartWidget
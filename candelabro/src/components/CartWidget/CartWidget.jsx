
import { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { CartContext } from "../context/CartContext";
import { CartWidgetLink, CartWidgetTotal } from "./CartWidget.elements";


const CartWidget = () => {
  
  const {carrito, cantidadEnCarrito} = useContext(CartContext)

  return (
    <CartWidgetLink to='/carrito' >
        <HiShoppingCart size={"1.2em"}/>
        <CartWidgetTotal style={{display: carrito.length === 0 ? "none" : "inline" }}>{cantidadEnCarrito()}</CartWidgetTotal>
    </CartWidgetLink>
  )
}

export default CartWidget
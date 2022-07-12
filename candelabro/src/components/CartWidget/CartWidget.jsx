
import { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { CartContext } from "../context/CartContext";
import { CartWidgetLink, CartWidgetTotal } from "./CartWidget.elements";


const CartWidget = () => {

  const {cantidadEnCarrito} = useContext(CartContext)
  return (
    <CartWidgetLink to='/carrito'>
        <HiShoppingCart/>
        <CartWidgetTotal>{cantidadEnCarrito()}</CartWidgetTotal>
    </CartWidgetLink>
  )
}

export default CartWidget
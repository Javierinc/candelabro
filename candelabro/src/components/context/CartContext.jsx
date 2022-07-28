import { createContext, useState } from "react"

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const addToCart = (item)=>{
      const itemIndex = cart.findIndex(prod => prod.id === item.id)
      if(itemIndex === -1){
        setCart([...cart, item])
      }else{
        const previousQuantity = cart[itemIndex].quantity
        cart[itemIndex].quantity = previousQuantity + item.quantity
        setCart([...cart])
      }
    }

    const [quantity, setQuantity] = useState(1)
    
    const isInCart = (id) => {
      return cart.some((product) => product.id === id)
    }
  
    const quantityInCart = () =>{
      return cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }
    
    const totalPurchase = () => {
      return cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0)
    }
    const deleteProduct = (id) => {
      setCart( cart.filter((prod) => prod.id != id))
    }
    const cleanCart = () => {
      setCart([])
    }
    

    return (
        <CartContext.Provider value={ {cart, addToCart, isInCart, quantityInCart, totalPurchase, cleanCart, deleteProduct, quantity, setQuantity}}>
          {children}
        </CartContext.Provider>
    )
}
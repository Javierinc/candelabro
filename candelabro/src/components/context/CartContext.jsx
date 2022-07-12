import { createContext, useState, useContext } from "react"

export const CartContext = createContext();

export const CarritoProvider = ({children}) =>{
    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (item)=>{
      setCarrito([...carrito, item])
    }
  
    const estaEnElCarrito = (id) => {
      return carrito.some((producto) => producto.id === id)
    }
  
    const cantidadEnCarrito = () =>{
      return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }
    
    const totalCompra = () => {
      return carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    }
    const eliminarProducto = (id) => {
      setCarrito( carrito.filter((prod) => prod.id != id))
    }
    const limpiarCarrito = () => {
      setCarrito([])
    }
    return (
        <CartContext.Provider value={ {carrito, agregarAlCarrito, estaEnElCarrito, cantidadEnCarrito, totalCompra, limpiarCarrito, eliminarProducto}}>
          {children}
        </CartContext.Provider>
    )
}
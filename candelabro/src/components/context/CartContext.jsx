import { createContext, useState } from "react"

export const CartContext = createContext();

export const CarritoProvider = ({children}) =>{
    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (item)=>{
      const indiceItem = carrito.findIndex(prod => prod.id === item.id)
      if(indiceItem === -1){
        setCarrito([...carrito, item])
      }else{
        const cantidadAnterior = carrito[indiceItem].cantidad
        carrito[indiceItem].cantidad = cantidadAnterior + item.cantidad
        setCarrito([...carrito])
      }
    }

    const [cantidad, setCantidad] = useState(1)
    
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
        <CartContext.Provider value={ {carrito, agregarAlCarrito, estaEnElCarrito, cantidadEnCarrito, totalCompra, limpiarCarrito, eliminarProducto, cantidad, setCantidad}}>
          {children}
        </CartContext.Provider>
    )
}
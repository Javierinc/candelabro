import { useContext, useState, } from "react"
import { CartContext } from "../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { DetailContainer, DetailDesc, DetailDescWrap, DetailHeading, DetailImg, DetailImgWrap, DetailPrice, DetailSection, DetailProductHeading, DetailStock, DetailWrap, ButtonAddCart, ButtonBuy, ButtonContinue } from "./ItemDetail.elements"

const ItemDetail = ({id, nombre, img, desc, precio, stock}) => {
  const [cantidad, setCantidad] = useState(0)

  const { carrito, agregarAlCarrito, estaEnElCarrito } = useContext(CartContext)

  const handleAgregarCarrito = () => {
    if(cantidad === 0) return
    if(!estaEnElCarrito(id)){
      const agregarItem = {id, nombre, precio, stock, cantidad}
      agregarAlCarrito(agregarItem)
    }
  }

    return (
      <DetailSection>
        <DetailHeading>Detalles del Producto</DetailHeading>
          <DetailWrap>
          <DetailContainer>
            <DetailImgWrap>
              <DetailImg src={img} alt={nombre}/>
            </DetailImgWrap>
            <DetailDescWrap>
              <DetailProductHeading>{nombre}</DetailProductHeading>
              <DetailPrice>${precio}</DetailPrice>
              <DetailStock>Stock del producto: {stock} unidades.</DetailStock>
              <DetailDesc>{desc}</DetailDesc>
            </DetailDescWrap>
          </DetailContainer>
          { estaEnElCarrito(id) 
            ? <>
              <ButtonBuy to='/carrito'>Ver mi carrito</ButtonBuy>
              <ButtonContinue to='/'>Continuar vitrineando</ButtonContinue>

              </>
            :
            <>
              <ItemCount max={stock} counter={cantidad} setCounter={setCantidad}/>
              <ButtonAddCart onClick={handleAgregarCarrito}>Agregar al carrito</ButtonAddCart>
            </>}

          </DetailWrap>
      </DetailSection>
      
      // <div>
      //     <h3>{nombre}</h3>
      //     <img src={img}/>
      //     <p>{desc}</p>
      //     <h4>Precio: ${precio}</h4>
      // </div>
    )
  }
  
  export default ItemDetail
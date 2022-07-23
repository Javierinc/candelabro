import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { DetailContainer, DetailDesc, DetailDescWrap, DetailHeading, DetailImg, DetailImgWrap, DetailPrice, DetailSection, DetailProductHeading, DetailStock, DetailWrap, ButtonAddCart, ButtonBuy, ButtonContinue } from "./ItemDetail.elements"

const ItemDetail = ({id, nombre, img, desc, precio, stock}) => {
  
  

  const { agregarAlCarrito, estaEnElCarrito, cantidad, setCantidad } = useContext(CartContext)

  const handleAgregarCarrito = () => {
      const agregarItem = {id, nombre, precio, stock, cantidad}
      agregarAlCarrito(agregarItem)
      setCantidad(1)
  }
   
    return (
      <DetailSection>
        <DetailHeading>DETALLES DEL PRODUCTO</DetailHeading>
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
                <ItemCount max={stock} counter={cantidad} setCounter={setCantidad}/>
                <ButtonAddCart onClick={handleAgregarCarrito}>Agregar al carrito</ButtonAddCart>
                <ButtonBuy to='/carrito'>Ver mi carrito</ButtonBuy>
              </>
            :
            <>
              <ItemCount max={stock} counter={cantidad} setCounter={setCantidad}/>
              <ButtonAddCart onClick={handleAgregarCarrito}>Agregar al carrito</ButtonAddCart>
            </>}

          </DetailWrap>
      </DetailSection>
    )
  }
  
  export default ItemDetail
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { DetailContainer, DetailDesc, DetailDescWrap, DetailHeading, DetailImg, DetailImgWrap, DetailPrice, DetailSection, DetailProductHeading, DetailStock, DetailWrap, ButtonAddCart, ButtonBuy, ButtonContinue } from "./ItemDetail.elements"

const ItemDetail = ({id, name, image, description, price, stock}) => {
  
  

  const { addToCart, isInCart, quantity, setQuantity } = useContext(CartContext)

  const handleAddToCart = () => {
      const addItem = {id, name, price, stock, quantity}
      addToCart(addItem)
      setQuantity(1)
  }
   
    return (
      <DetailSection>
        <DetailHeading>DETALLES DEL PRODUCTO</DetailHeading>
          <DetailWrap>
          <DetailContainer>
            <DetailImgWrap>
              <DetailImg src={image} alt={name}/>
            </DetailImgWrap>
            <DetailDescWrap>
              <DetailProductHeading>{name}</DetailProductHeading>
              <DetailPrice>${price}</DetailPrice>
              <DetailStock>Stock del producto: {stock} unidades.</DetailStock>
              <DetailDesc>{description}</DetailDesc>
            </DetailDescWrap>
          </DetailContainer>
          { isInCart(id) 
            ? <> 
                <ItemCount max={stock} counter={quantity} setCounter={setQuantity}/>
                <ButtonAddCart onClick={handleAddToCart}>Agregar al carrito</ButtonAddCart>
                <ButtonBuy to='/cart'>Ver mi carrito</ButtonBuy>
              </>
            :
            <>
              <ItemCount max={stock} counter={quantity} setCounter={setQuantity}/>
              <ButtonAddCart onClick={handleAddToCart}>Agregar al carrito</ButtonAddCart>
            </>}

          </DetailWrap>
      </DetailSection>
    )
  }
  
  export default ItemDetail
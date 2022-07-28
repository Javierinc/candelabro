import { CardContainer, ProductDesc, ProductImage, ProductName, ProductPrice } from "./Item.elements";



const Item = ({ id, name, price, shortDesc, image }) => {
  return (
    <CardContainer to={`/detalle/${id}`}>
        <ProductImage src={image} alt={name}/>
        <ProductPrice>${price}</ProductPrice>
        <ProductName>{name}</ProductName>
        <ProductDesc>
            {shortDesc}
        </ProductDesc>
    </CardContainer>
  )
}

export default Item

import { CardContainer, ProductDesc, ProductImage, ProductName, ProductPrice } from "./Item.elements";



const Item = ({ id, nombre, precio, resumen, img }) => {
  return (
    <CardContainer to={`/detalle/${id}`}>
        <ProductImage src={img} alt={nombre}/>
        <ProductPrice>${precio}</ProductPrice>
        <ProductName>{nombre}</ProductName>
        <ProductDesc>
            {resumen}
        </ProductDesc>
    </CardContainer>
  )
}

export default Item

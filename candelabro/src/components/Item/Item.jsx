import { Link } from 'react-router-dom'

import { CardContainer, ProductButton, ProductDesc, ProductImage, ProductName, ProductPrice } from "./Item.elements";



const Item = ({ id, nombre, precio, resumen, img }) => {
  return (
    <CardContainer>
        <ProductImage src={img} alt={nombre}/>
        <ProductPrice>${precio}</ProductPrice>
        <ProductName>{nombre}</ProductName>
        <ProductDesc>
            {resumen}
        </ProductDesc>
        <Link to={`/detalle/${id}`}>
            <ProductButton>Descripción</ProductButton>
        </Link>
    </CardContainer>
  )
}

export default Item

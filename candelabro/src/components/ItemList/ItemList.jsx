import Item from "../Item/Item"
import {useParams} from "react-router-dom"
import { CardContainer, SectionContainer, SectionHeading } from "./ItemList.elements"

const ItemList = ( {productos}) => {
  const { categoriaId } = useParams();  
  return (
    <SectionContainer>
      <SectionHeading>CATALOGO {categoriaId ? categoriaId.toUpperCase() : categoriaId}</SectionHeading>
        <CardContainer>
        {productos.map( (prod) => <Item key={prod.id} {...prod}/>)}
        </CardContainer>
    </SectionContainer>

  )
}

export default ItemList
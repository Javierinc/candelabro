import Item from "../Item/Item"
import { CardContainer, SectionContainer, SectionHeading } from "./ItemList.elements"

const ItemList = ( {productos}) => {
    
  return (
    <SectionContainer>
      <SectionHeading>Catálogo</SectionHeading>
        <CardContainer>
        {productos.map( (prod) => <Item key={prod.id} {...prod}/>)}
        </CardContainer>
    </SectionContainer>

  )
}

export default ItemList
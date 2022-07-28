import Item from "../Item/Item"
import {useParams} from "react-router-dom"
import { CardContainer, SectionContainer, SectionHeading } from "./ItemList.elements"
import { generateTitle } from "../../utils/generalFunctions";

const ItemList = ( {products}) => {
  const { categoryId } = useParams();
  generateTitle(`CANDELABRO - ${categoryId ? categoryId.toUpperCase() : "FIND PEACE"}`)  
  return (
    <SectionContainer>
      <SectionHeading>CATALOGO {categoryId ? categoryId.toUpperCase() : categoryId}</SectionHeading>
        <CardContainer>
        {products.map( (prod) => <Item key={prod.id} {...prod}/>)}
        </CardContainer>
    </SectionContainer>

  )
}

export default ItemList
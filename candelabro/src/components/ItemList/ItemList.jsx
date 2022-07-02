import Item from "../Item/Item"

const ItemList = ( {productos} ) => {
    
  return (
    <div>
        <h2>Catálogo de productos</h2>
        <div className='row'>
            {productos.map( (prod) => <Item key={prod.id} {...prod}/>)}
        </div>
    </div>
  )
}

export default ItemList
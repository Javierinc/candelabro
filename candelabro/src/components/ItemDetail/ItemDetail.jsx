const ItemDetail = ({id, nombre, img, desc, precio}) => {
  return (
    <div>
        <h3>{nombre}</h3>
        <img src={img}/>
        <p>{desc}</p>
        <h4>Precio: ${precio}</h4>
    </div>
  )
}

export default ItemDetail
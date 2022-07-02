import { useState, useEffect } from "react"

import ItemList from "../ItemList/ItemList"
import { gFetch } from "../../helpers/getFetch"
import { Spinner } from "react-bootstrap"


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(()=>{
    gFetch
    .then(data => setProductos(data))
    .catch(err => console.log(err))
    .finally(() => setCargando(false))
  }, [])

  return (
    <>  
      
      {cargando ? <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        :
        <ItemList productos ={productos}/>}
    </>
  )
}

export default ItemListContainer
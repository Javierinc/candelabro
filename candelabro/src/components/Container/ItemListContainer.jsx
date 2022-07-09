import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import ItemList from "../ItemList/ItemList"
import { gFetch } from "../../helpers/getFetch"
import { Spinner } from "react-bootstrap"


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { categoriaId } = useParams();
  

  useEffect(()=>{
    gFetch
    .then(data => {
      if(categoriaId) {
        setProductos( data.filter((el)=> el.categoria === categoriaId))
      } else {
        setProductos(data)
      }

    })
    .catch(err => console.log(err))
    .finally(() => setCargando(false))
  }, [categoriaId])

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
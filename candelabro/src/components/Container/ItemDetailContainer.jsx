import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'

import ItemDetail from "../ItemDetail/ItemDetail"
import { gFetch } from "../../helpers/getFetch"




const ItemDetailContainer = () => {
    
    const [cargando, setCargando] = useState(false);
    const [item, setItem] = useState(null);
  
    const { itemId } = useParams()
    
    useEffect(()=>{
        setCargando(true)
      gFetch
      .then(data => {
        setItem( data.find((el) => el.id === itemId))
        
      })
      .catch(err => console.log(err))
      .finally(() => setCargando(false))
    }, [])


  return (
    <>  
        {cargando ? <h1>Cargando...</h1>
        :
        <ItemDetail {...item}/>}
    </>
  )
}

export default ItemDetailContainer
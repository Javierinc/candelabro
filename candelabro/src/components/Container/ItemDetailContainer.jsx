import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'

import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Spinner/Loading"
import { db } from "../../firebase/config"
import { doc, getDoc } from "firebase/firestore"


const ItemDetailContainer = () => {
    
    const [cargando, setCargando] = useState(false);
    const [item, setItem] = useState(null);
  
    const { itemId } = useParams()

    useEffect(()=>{
      const productoReferencia = doc(db, 'productos', itemId)
      getDoc(productoReferencia)
        .then((doc)=>{
          setItem({id: doc.id, ...doc.data()})
        })
        .catch(err => console.log(err))
        .finally(()=> setCargando(false))
        
    }, [])   
  return (
    <>  
        {cargando ? <Loading/>
        :
        <ItemDetail {...item}/>}
    </>
  )
}

export default ItemDetailContainer
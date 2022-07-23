import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import ItemList from "../ItemList/ItemList"
import {collection, getDocs, query, where} from 'firebase/firestore'
import Loading from "../Spinner/Loading"
import { db } from "../../firebase/config"



const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
 
  const { categoriaId } = useParams();

  useEffect(()=>{
    const productosReferencia = collection(db, 'productos')
    const queryProductos = categoriaId ? query(productosReferencia, where("categoria", "==", categoriaId)) : productosReferencia
    getDocs(queryProductos)
      .then((resp) => {
        setProductos(resp.docs.map((doc)=> { 
          return {
            id: doc.id, 
            ...doc.data()
          }
        }))
        
      })
      .catch(err => console.log(err))
      .finally(()=>setCargando(false))
  }, [categoriaId])

  return (
    <>  
      
      {cargando ? <Loading/>
        :
        <ItemList productos ={productos}/>}
    </>
  )
}

export default ItemListContainer
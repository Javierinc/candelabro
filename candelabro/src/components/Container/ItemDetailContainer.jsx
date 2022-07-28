import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Spinner/Loading"
import { getFetchFirestore } from "../../firebase/fetchFirestore"

const ItemDetailContainer = () => {  
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState(null)
    const { itemId } = useParams()
    useEffect(()=>{
      getFetchFirestore(itemId, setItem, setLoading) 
    }, [])   
  return (
    <>  
        {loading ? <Loading/>
        :
        <ItemDetail {...item}/>}
    </>
  )
}

export default ItemDetailContainer
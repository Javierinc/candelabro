import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import ItemList from "../ItemList/ItemList"
import Loading from "../Spinner/Loading"
import { getFetchsFirestore } from "../../firebase/fetchFirestore"

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
  useEffect(()=>{
    getFetchsFirestore(categoryId, setProducts, setLoading)
  }, [categoryId])

  return (
    <>  
      
      {loading ? <Loading/>
        :
        <ItemList products ={products}/>}
    </>
  )
}

export default ItemListContainer
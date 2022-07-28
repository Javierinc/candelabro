import { db } from "./config";
import { doc, getDoc, collection, getDocs, query, where, addDoc} from 'firebase/firestore'

export const getFetchsFirestore = (categoryId, setProducts, setLoading)=>{

    const dbProducts = collection(db, 'products');
    const productsQuery = categoryId ? query(dbProducts, where("category", "==", categoryId)) : dbProducts;
    getDocs(productsQuery)
      .then((resp) => {
        setProducts(resp.docs.map((doc)=> { 
          return {
            id: doc.id, 
            ...doc.data()
          }
        }))  
      })
      .catch(err => err)
      .finally(()=>setLoading(false))  
}

export const getFetchFirestore = (itemId, setItem, setLoading)=>{

    const dbProduct = doc(db, 'products', itemId)
    getDoc(dbProduct)
        .then((doc)=>{
          setItem({id: doc.id, ...doc.data()})
        })
        .catch(err => err)
        .finally(()=> setLoading(false))  
}

export const generateOrder = (order, setOrderId, cleanCart)=>{
  const orderRef = collection(db, 'orders')
  addDoc(orderRef, order)
      .then((doc)=>{
          setOrderId(doc.id)
      })
      cleanCart()
}
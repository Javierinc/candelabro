import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/Container/ItemListContainer'
import ItemDetailContainer from './components/Container/ItemDetailContainer'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import  {CartProvider}  from './components/context/CartContext'
import  Cart  from './components/Cart/Cart'
import CheckOut from './components/CheckOut/CheckOut'
function App() {



  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> }/>
          <Route path='/productos/:categoryId' element={ <ItemListContainer/> }/>
          <Route path='/detalle/:itemId' element={ <ItemDetailContainer/> }/>
          <Route path='/cart' element={ <Cart/> }/>
          <Route path='/checkout' element={<CheckOut/>}/>
          <Route path='*' element={ <Navigate to='/'/> }/>       
        </Routes>
      </BrowserRouter>
    </CartProvider>

   

    
  )
}

export default App

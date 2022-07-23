import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/Container/ItemListContainer'
import ItemDetailContainer from './components/Container/ItemDetailContainer'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import  {CarritoProvider}  from './components/context/CartContext'
import  Cart  from './components/Cart/Cart'
function App() {



  return (
    <CarritoProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> }/>
          <Route path='/productos/:categoriaId' element={ <ItemListContainer/> }/>
          <Route path='/detalle/:itemId' element={ <ItemDetailContainer/> }/>
          <Route path='/carrito' element={ <Cart/> }/>
          <Route path='*' element={ <Navigate to='/'/> }/>
        </Routes>
      </BrowserRouter>
    </CarritoProvider>
   

    
  )
}

export default App

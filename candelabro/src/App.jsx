import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ItemListContainer from "./components/Container/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"

import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/Container/ItemDetailContainer";


function App() {


  return (
    <BrowserRouter> 
    
      <NavBar/>
        <Routes>
          <Route path='/' element= {<ItemListContainer/>}/>
          <Route path='/productos/:categoriaId' element= {<ItemListContainer/>}/>
          <Route path='/detalle/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element= {<Navigate to='/'/>}/>

        </Routes>
    
    </BrowserRouter>
    
 
  )
}

export default App

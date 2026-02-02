import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import CartView from './Componentes/CartView/CartView';

function App() { 
  return ( 
    <div>
       <NavBar /> 
       <Routes>
         <Route path="/" element={<CartView />} /> 
         <Route path="/catalogo" element={<ItemListContainer greeting="Catálogo de productos" />} />
         <Route path="/category/:categoryId" element={<ItemListContainer />} /> 
         <Route path="/item/:itemId" element={<ItemDetailContainer />} /> 
         <Route path="*" element={<h2>404 - Página no encontrada</h2>} /> 
        </Routes> 
    </div> 
  );
}

export default App;
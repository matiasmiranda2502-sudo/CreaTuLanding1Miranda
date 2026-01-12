import React from 'react';
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Binvenido a nuestra tienda de ropa." />
    </div>
  );
}

export default App;

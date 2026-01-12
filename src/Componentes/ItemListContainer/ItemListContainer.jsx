import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>{greeting}</h2>
      <p>Pronto verás aquí nuestro catálogo de ropa</p>
    </div>
  );
};

export default ItemListContainer;

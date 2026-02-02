import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, name, price, description, image }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div style={{ border: '1px solid #aaa', padding: '20px' }}>
      <img src={image} alt={name} style={{ width: '250px', height: '250px', objectFit: 'cover' }} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Precio: ${price}</p>
      <button onClick={() => addToCart({ id, name, price, image })}>Agregar al carrito</button>
      <button onClick={() => removeFromCart(id)}>Quitar del carrito</button>
    </div>
  );
};

export default ItemDetail;

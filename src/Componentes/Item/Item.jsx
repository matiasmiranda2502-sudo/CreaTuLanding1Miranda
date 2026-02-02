import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, name, price, image }) => (
  <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
    <img src={image} alt={name} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
    <h3>{name}</h3>
    <p>Precio: ${price}</p>
    <Link to={`/item/${id}`}>Ver detalle</Link>
  </div>
);

export default Item;

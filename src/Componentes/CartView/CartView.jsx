import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';

const CartView = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Tu carrito está vacío 🛒</h2>
        <p>Explora nuestro catálogo y encontrá lo que más te guste.</p>
        <Link to="/catalogo">
          <button style={{ marginTop: '10px' }}>Ir al catálogo</button>
        </Link>
        <FeaturedProducts /> 
      </div>
    );
  }

  // calcular total
  const total = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

  return (
    <div>
      <h2>Productos en tu carrito</h2>
      {cart.map(prod => (
        <div 
          key={prod.id} 
          style={{ 
            border: '1px solid #ccc', 
            margin: '10px', 
            padding: '10px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '15px' 
          }}
        >
          <img 
            src={prod.image} 
            alt={prod.name} 
            style={{ width: '80px', height: '80px', objectFit: 'cover' }} 
          />
          <div>
            <h3>{prod.name}</h3>
            <p>Precio: ${prod.price}</p>
            <p>Cantidad: {prod.quantity}</p>
            <button onClick={() => removeFromCart(prod.id)}>Quitar</button>
          </div>
        </div>
      ))}
      <h3>Total a pagar: ${total}</h3>
    </div>
  );
};

export default CartView;

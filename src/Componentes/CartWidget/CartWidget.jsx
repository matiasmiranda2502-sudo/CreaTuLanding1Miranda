import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import carritoImg from '../../assets/carrito.jpg';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, prod) => acc + prod.quantity, 0);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      <img src={carritoImg} alt="Carrito" style={{ width: '30px', height: '30px' }} />
      <span>{totalItems}</span>
    </div>
  );
};

export default CartWidget;


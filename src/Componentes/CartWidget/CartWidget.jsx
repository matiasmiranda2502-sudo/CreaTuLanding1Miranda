import React from 'react';
import carritoImg from '../../assets/carrito.jpg';  // ajustá la ruta según tu estructura

const CartWidget = () => {
  return (
    <div>
      <img 
        src={carritoImg} 
        alt="Imagen de un carrito de compras" 
        style={{ width: '100px', height: '100px' }} 
      />
    </div>
  );
};

export default CartWidget;


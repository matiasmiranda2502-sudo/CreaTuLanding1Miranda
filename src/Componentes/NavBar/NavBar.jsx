import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Mi Tienda de Ropa</h1>
      <ul style={styles.links}>
        <li><Link to="/">Inicio</Link></li>               {/* Carrito */}
        <li><Link to="/catalogo">Catálogo</Link></li>     {/* Todos los productos */}
        <li><Link to="/category/remeras">Remeras</Link></li>
        <li><Link to="/category/pantalones">Pantalones</Link></li>
        <li><Link to="/category/camperas">Camperas</Link></li>
        <li><Link to="/category/zapatos">Zapatos</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

const styles = {
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: '#eee' },
  logo: { fontSize: '1.5rem', fontWeight: 'bold' },
  links: { listStyle: 'none', display: 'flex', gap: '15px' }
};

export default NavBar;

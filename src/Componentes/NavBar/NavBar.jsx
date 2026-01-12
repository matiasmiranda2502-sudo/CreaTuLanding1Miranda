import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Mi Tienda de Ropa</h1>
      <ul style={styles.links}>
        <li><a href="/">Inicio</a></li>
        <li><a href="/catalogo">Catálogo</a></li>
        <li><a href="/contacto">Contacto</a></li>
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

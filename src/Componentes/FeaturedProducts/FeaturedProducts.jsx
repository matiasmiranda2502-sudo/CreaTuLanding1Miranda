import React, { useEffect, useState } from 'react';
import { getProducts } from '../../data/products';
import Item from '../Item/Item';

const FeaturedProducts = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    // Simulamos traer productos y elegir algunos destacados
    getProducts().then(data => {
      // Tomamos los primeros 2 o 3 como destacados
      setFeatured(data.slice(0, 3));
    });
  }, []);

  return (
    <div>
        <h2 style={{ textAlign: 'center' }}>Productos destacados</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {featured.map(prod => (
            <Item key={prod.id} {...prod} />
        ))}
        </div>
    </div>
  );
};

export default FeaturedProducts;

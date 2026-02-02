import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../data/products';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts().then(data => {
      setProducts(categoryId ? data.filter(p => p.category === categoryId) : data);
    });
  }, [categoryId]);

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

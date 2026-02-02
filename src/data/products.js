import remeraAzulImg from '../assets/remera-azul.jpg';
import camperaRojaImg from '../assets/campera-roja.jpg';
import zapatillasBlancasImg from '../assets/zapatillas-blancas.jpg';
import pantalonNegroImg from '../assets/pantalon-negro.jpg';

const products = [
  { id: '1', name: 'Remera Azul', price: 1200, category: 'remeras', description: 'Remera de algodón azul', image: remeraAzulImg },
  { id: '2', name: 'Pantalón Negro', price: 2500, category: 'pantalones', description: 'Pantalón clásico negro', image: pantalonNegroImg },
  { id: '3', name: 'Campera Roja', price: 3500, category: 'camperas', description: 'Campera abrigada roja', image: camperaRojaImg },
  { id: '4', name: 'Zapatillas Blancas', price: 4000, category: 'zapatos', description: 'Zapatillas deportivas blancas', image: zapatillasBlancasImg },
];

export const getProducts = () => new Promise(resolve => setTimeout(() => resolve(products), 1000));
export const getProductById = (id) => new Promise(resolve => setTimeout(() => resolve(products.find(p => p.id === id)), 1000));

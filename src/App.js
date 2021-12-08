import { useEffect, useState } from 'react';
import './App.css';
import './SearchBar/SearchBar'
import SearchBar from './SearchBar/SearchBar';

function App() {

  const [products, setProducts] = useState();

useEffect(() => {
  fetch('https://fakestoreapi.com/products')
  .then((res) => res.json())
  .then((productsArray) => {
    const products = productsArray.map((product) => product.title);
    setProducts(products);
  });
}, []);

  return (
    <SearchBar products={products}/>
  );
}

export default App;

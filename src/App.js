import { useEffect, useState } from 'react';
import './App.css';
import './SearchBar/components/SearchBar'
import SearchBar from './SearchBar/components/SearchBar';

function App() {

  const [items, setItems] = useState();
  const [loading, setLoading] = useState(false);

// fetch data
useEffect(() => {
  fetch('https://fakestoreapi.com/users')
  .then((res) => res.json())
  .then((data) => {
    setItems(data);
  });
  setLoading(false);
}, []);

  return (
    <SearchBar items={items} loading={loading}/>
  );
}

export default App;

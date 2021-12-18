import { useEffect, useState } from 'react';
import './App.css';
import './SearchBar/components/SearchBar'
import SearchBar from './SearchBar/components/SearchBar';

function App() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

// fetch data
useEffect(() => {
  getMovieData(searchValue);
}, [searchValue]);

const getMovieData = async (searchValue) => {
  setLoading(true);
  const response = await fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`);
  const responseJson = await response.json();
  if (responseJson.Search) {
    setItems(responseJson.Search);
    }
  setLoading(false);
}
  return (
    <SearchBar
     searchValue={searchValue}
     setSearchValue={setSearchValue}
     items={items}
     setItems={setItems}
     loading={loading}/>
  );
}

export default App;

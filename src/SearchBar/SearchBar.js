import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = () => {

    const [searchValue, setSearchValue] = useState('');

    const products = [
        'Apple',
        'Banana',
        'Orange',
        'Fig',
        'Kiwi',
        'Berries',
    ];
    const inputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const filteredProducts = products.filter((product) => {
        return product.includes(searchValue);
    });

    const allProducts = filteredProducts.map((product) => {
        return <li key={product}>{product}</li>;
    });

    const clearSearchBar = () => {
        setSearchValue('');
    };

    return (
        <div className="">
            <input type="text" value={searchValue} placeholder="Search" onChange={inputChange}/>
            <button onClick={clearSearchBar}>Clear</button>
            <ul>
            {allProducts}
            </ul>
        </div>

    )
};

export default SearchBar;
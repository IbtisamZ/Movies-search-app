import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = (props) => {
    const {
        products
    } = props;

    const [searchValue, setSearchValue] = useState('');

    const inputChange = (event) => {
        setSearchValue(event.target.value.toLowerCase());
    };

    const filteredProducts = products && products.filter((product) => {
        return product.toLowerCase().includes(searchValue);
    });

    const allProducts = filteredProducts && filteredProducts.map((product) => {
        return (
        <>
        <div className="products" key={product}>{product}</div>
        <div className="elm-container"/>
        </>);
    });

    const clearSearchBar = () => {
        setSearchValue('');
    };

    return (
        <>
        <div className="search-container">
        <p className="">You can search whatever you want!</p>
        <div className="search-bar">
        <input className="search-bar-style" type="text" value={searchValue} placeholder="Search..." onChange={inputChange}/>
        <button className="button-style" onClick={clearSearchBar}>Clear</button>
        </div>
        <div>
        <ul>
            {allProducts}
        </ul>
        </div>
        </div>
        </>

    )
};

export default SearchBar;
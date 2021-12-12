import React, { useState } from 'react';
import './SearchBar.css'
import Loader from "react-loader-spinner";

const SearchBar = (props) => {
    const {
        items,
        loading,
    } = props;

    // declate states
    const [searchValue, setSearchValue] = useState('');

    const inputChange = (event) => {
        setSearchValue(event.target.value);
    };

    // filter data
    const filteredItems = items && items.filter((i) => {
        return (
             i.name.firstname.toLowerCase().includes(searchValue.toLowerCase()) ||
             i.name.lastname.toLowerCase().includes(searchValue.toLowerCase()));
    });

    // display data
    const allItems = filteredItems && filteredItems.map((item) => {
        return (
        <>
        <div className="items" key={item.id}>{item.name.firstname} {item.name.lastname}</div>
        <div className="elm-container"/>
        </>);
    });

    const clearSearchBar = () => {
        setSearchValue('');
    };

    return (
        <>
        <div className="search-container ">
            <div className="header-background">
                <p>Hello there, <br/>
                Go ahead and search for names down below!</p>
            </div>
            <div className="search-bar">
            <input className="search-bar-style" type="text" value={searchValue} placeholder="Search..." onChange={inputChange}/>
            <button className="button-style" onClick={clearSearchBar}>Clear</button>
            </div>
            <div>
                {loading ? (<Loader type="Oval" color="#136a8a" height={50} width={50} />) :
                allItems}
            </div>
        </div>
        </>

    )
};

export default SearchBar;
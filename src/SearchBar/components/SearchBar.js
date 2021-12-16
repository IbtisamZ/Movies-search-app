import React from 'react';
import './SearchBar.css'
import Loader from "react-loader-spinner";
import PlaceHolderMovies from './PlaceHolderMovies';

const SearchBar = (props) => {
    const {
        items,
        loading,
        setItems,
        searchValue,
        setSearchValue
    } = props;

    const inputChange = (event) => {
        setSearchValue(event.target.value);
    };

    console.log('sdfdsadfsa', PlaceHolderMovies);
    // const filteredItems = items && items.filter((i) => {
    //     return (
    //          i.Title.toLowerCase().includes(searchValue.toLowerCase()));
    // });

    // display data
    const allItems =  items && items.map((item) => {
        return (
        <>
        <div className="items" key={item.id}>
        <img className="" alt ="Img not found" height="400" width="300" src={item.Poster}></img>
        <div  className="movie-title">{item.Title} {item.Year}</div>
        <div  className="movie-title">{item.Type}</div>
        </div>
        </>);
    });

    const dummyData =  PlaceHolderMovies && PlaceHolderMovies.map((item) => {
        return (
        <>
        <div className="items">
        <img className="" alt ="Img not found" height="400" width="300" src={item.Poster}></img>
        <div  className="movie-title">{item.Title} {item.Year}</div>
        <div  className="movie-title">{item.Type}</div>
        </div>
        </>);
    });

    const clearSearchBar = () => {
        setSearchValue('');
        setItems([]);
    };

    return (
        <>
        <div className="search-container ">
            <div className="header-background">
                <p>Hello there, <br/>
                 Go ahead and search for your favorite movies. </p>
            </div>
            <div className="search-bar">
            <input className="search-bar-style" type="text" value={searchValue} placeholder="Search..." onChange={inputChange}/>
            <button className="button-style" onClick={clearSearchBar}>Clear</button>
            </div>
            <div className="all-items">
                {items.length === 0 ? 
                dummyData :
                <>
                {loading ? (<Loader type="Oval" color="#fff" height={50} width={50} />) :
                allItems}
                </>
                
            }
            </div>
        </div>
        </>

    )
};

export default SearchBar;
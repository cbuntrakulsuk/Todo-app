import './Header.css';
import React from "react";

function Search() {

    return(
        <div className='search-bar'>
            <form>
                <input type="text" placeholder='Enter Note'></input>
            </form>
        </div>
    );
}

export default Search;
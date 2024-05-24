import React, {useState} from 'react';

const Nav = ({showSearch, setShowSearch, }) => {

    const handleSearchOnClick = () => {
        setShowSearch(!showSearch);
    }


    
    return(
        <>
            <nav>
                <ul>
                    <button ><a href='#home'>Garden</a></button>
                    <button><a href='#create'>Plant Seed</a></button>
                    <button id="search" onClick={handleSearchOnClick}>Search</button>
                </ul>
            </nav>        
        </>
    )
}

export default Nav;
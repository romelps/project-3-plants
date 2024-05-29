import './navbar.css'
import React, {useState} from 'react';

const Nav = ({showSearch, setShowSearch, isCreateOpen, setIsCreateOpen, showIndex, setShowIndex}) => {

    const handleSearchOnClick = () => {
        setShowSearch(!showSearch);
    }

    //toggles the create view to be visible
    const handleCreateView = () => {
        setIsCreateOpen(!isCreateOpen);
    }

    
    
    //toggles the create view to be visible
    const handleIndexView = () => {
        setShowIndex(!showIndex);
    }


    return(
        <>
            <nav>
                <ul>

                    {/* buttons changing when component used */}
                    <button onClick={handleCreateView}><a href='#create'>
                        {isCreateOpen ? 'Dig Up Seed' : 'Plant Seed'}
                    </a></button>
                      
                    <button onClick={handleIndexView}><a href="#index">
                        {showIndex ? 'Exit Greenhouse':'Greenhouse'}    
                    </a></button>

                    <button id="search" onClick={handleSearchOnClick}>Search</button>

                    
                </ul>
            </nav>        
        </>
    )
}
export default Nav;
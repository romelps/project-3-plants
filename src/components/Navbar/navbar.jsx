
import React, {useState} from 'react';

const Nav = ({showSearch, setShowSearch, isCreateOpen, setIsCreateOpen}) => {

    const handleSearchOnClick = () => {
        setShowSearch(!showSearch);
    }

  //toggles the create view to be visible
  const handleCreateView = () => {
    setIsCreateOpen(!isCreateOpen);
  }
    

    return(
        <>
            <nav>
                <ul>

                    <button><a href='#home'>Garden</a></button>
                    <button onClick={props.handleCreateView}><a href='#create'>
                        {props.isCreateOpen ? 'Dig Up Seed' : 'Plant Seed'}
                    </a></button>
        
                    <button id="search" onClick={handleSearchOnClick}>Search</button>

                </ul>
            </nav>        
        </>
    )
}
export default Nav;
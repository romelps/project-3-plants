import {useState} from 'react';


const Show = ({plant}) => {
    return(
       <>
       <ul>
        <h2>Name: {plant.name}</h2>
        <p>Size: {plant.size}</p>
        <p>Health: {plant.health}</p>
        <p>Family: {plant.family}</p>
       </ul>
       </>
    )
}

export default Show;
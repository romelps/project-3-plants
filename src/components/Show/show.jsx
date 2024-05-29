import {useState} from 'react';


const Show = ({plant}) => {


    return(
       
       <li>
        <h3>Size: {plant.size}</h3>
        <h3>Health: {plant.health}</h3>
        <h3>Family: {plant.family}</h3>
       
       </li>
       
    )
}

export default Show;
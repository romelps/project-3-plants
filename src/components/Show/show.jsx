import {useState} from 'react';


const Show = ({plant, plantList}) => {

   

    return(
       <>
       <li>
        <h3>Size: {plant.size}</h3>
        <h3>Health: {plant.health}</h3>
        <h3>Family: {plant.family}</h3>
        {/* <button onClick={() => props.handleUpdateView(props.selected)}>Repot</button>
        <button onClick={() => props.handleDelete(props.selected)}>Euthanize</button> */}
       </li>
       </>
    )
}

export default Show;
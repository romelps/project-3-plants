import {useState} from 'react';


const Show = ({plant}) => {

    

    return(
       <>
       <ul>
        <h2>Name: {plant.name}</h2>
        <p>Size: {plant.size}</p>
        <p>Health: {plant.health}</p>
        <p>Family: {plant.family}</p>
        {/* <button onClick={() => props.handleUpdateView(props.selected)}>Repot</button>
        <button onClick={() => props.handleDelete(props.selected)}>Euthanize</button> */}
       </ul>
       </>
    )
}

export default Show;
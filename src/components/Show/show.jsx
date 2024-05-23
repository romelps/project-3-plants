import {useState} from 'react';


const Show = (props) => {
    const {plant} = props;
    
    return(
       <>
       <div key={plant.id}>
       <h2>{plant.name}</h2>
       <p>{plant.family}</p>
       <p>{plant.size}</p>
       <p>{plant.health}</p>

       </div>
       </>
    )
}

export default Show;
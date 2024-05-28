import { useState } from 'react';
import Show from '../Show/show'
const Home = ( props ) => {

    const { handleAddPlant, showUpdate, setShowUpdate, handleUpdateView, show, setShow, plant, setPlant } = props
    // const [show, setShow] = useState(false)

    const handleDetails = (id) => {
        setShow(!show)
        console.log (id)
        }
        



    return(
        <>
    
        <li id={plant._id}>
            
            <h3>{plant.name}<br/><button onClick={()=> {handleDetails(plant._id)}}>View Details</button></h3>
            {show ?
            <Show 
            id='show' 
            plant = {plant}
            name= {plant.name}
            size= {plant.size}
            health= {plant.health}
            family= {plant.family}
            />: null}

            <button onClick={() => {handleUpdateView(plant._id)}}>Repot</button>
            {/* <p>Health: {plant.health}</p>
            <p>Size: {plant.size}</p>
            <p>Family: {plant.family}</p> */}

        </li>
        {/* <ul>
            {plantList.map((plant, i) =>(
                <li key={i}>
                    { plant.name }
                </li>
            ))}
        </ul>           */}
        </>
    );
};

export default Home;
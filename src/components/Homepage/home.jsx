import { useState } from 'react';
import Show from '../Show/show'
import './home.css'
// import handleDelete from '../../Services/plantService.js'
const Home = (props) => {

    const {plant, handleDelete, handleAddPlant, showUpdate, setShowUpdate, handleUpdateView, show, setShow} = props

    const handleDetails = (id) => {
        setShow(!show)
        console.log (id)
        }
        

//     const deletePlant = async (id) => {
//     try {
//         const deletedPlant = await fetch(`http://3.141.46.99:3015/plants/${id}`, {
//             method: 'DELETE',
//         });
        
//         return deletedPlant.json();
//     } catch(err) {
//         console.log(err)
//     }
// }

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

            <button onClick={() => {handleDelete(plant._id)}}>Euthanize</button>
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
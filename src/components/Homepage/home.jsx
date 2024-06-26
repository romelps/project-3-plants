import { useState } from 'react';

import Show from '../Show/show';
import Update from '../Update/update';

import './home.css'


// import handleDelete from '../../Services/plantService.js'

const Home = ( props ) => {

    const { plant, setPlant, plantList, handleDelete, handleUpdate } = props

    //show and set show should not be brought in as props bc now it's on the compontent level, affects one at a time
    const [show, setShow] = useState(false)
    const [showUpdate, setShowUpdate] = useState(false);
    

    const handleDetails = (id) => {
        setShow(!show)
        console.log (id)
    }
    

    const handleUpdateView = () => {
        // if(!plant.name) setShow(null);
        setShowUpdate(!showUpdate);
      }

const deletePlant = async (id) => {
    try {
        const deletedPlant = await fetch(`http://3.141.46.99:3015/plants//${id}`, {
            method: 'DELETE',
        });
        
        return deletedPlant.json();
    } catch(err) {
        console.log(err)
    }
}

    return (
        
    <div class='home'>
        <li class='cards' id={plant._id}>
            
            <h2>{plant.name}</h2>

            {show ?
            <Show 
            id='show' 
            plant = {plant}
            plantList={plantList}
            name= {plant.name}
            size= {plant.size}
            health= {plant.health}
            family= {plant.family}
            />: null}
            

            <button id='buttonmod' onClick={()=> {handleDetails(plant._id)}}>View Details</button>
            <button id='buttonmod' onClick={() => {handleDelete(plant._id)}}>Euthanize</button>
            <button id='buttonmod' onClick={() => {handleUpdateView(plant._id)}}>Repot</button>

            {showUpdate ? (
                <Update
                id='update'
                plant={plant}
                setPlant={setPlant}
                
                handleUpdate={handleUpdate}
               
                />
            ): null}
            
          

        </li>
       
            
      
        </div>

        
    );
};

export default Home;
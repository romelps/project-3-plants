import { useState } from 'react'
// import { update } from './Services/plantService.js'
// src/Services/plantService.js
import './update.css'

const Update = (props) => {

    const {handleUpdateView, handleAddPlant, handleUpdate, show, setShow, plant, setPlant} = props

    const [updatedPlant, setUpdatedPlant] = useState({
        name: '',
        size: '',
        health: '',
        family: '',
    })

    // const [plant, setPlant] = useState(show ? show : initialState)

    const handleUpdateForm = (event) => {
        event.preventDefault();
        console.log(updatedPlant)
        handleUpdate(updatedPlant, plant._id);
       
       // setPlant({ ...plant, [event.target.name]: event.target.value});
    };

    const handleChange = (event) => {
       setUpdatedPlant({ ...updatedPlant, [event.target.name]: event.target.value});
    }

    return(
        <fieldset id='updateSheet'>
        <form onSubmit={ () => handleUpdate(plant._id)}>
            <label htmlFor="name">Name: </label>
            <input
                type="text"
                name="name"
                id="name"
                defaultValue={plant.name} //leaves the value in the input
                onChange={handleChange}
            />

            <br></br>

            <label htmlFor="Size">Size: </label>
            <input
                type="text"
                name="size"
                id="size"
                defaultValue={plant.size}
                onChange={handleChange}
            />

            <br></br>

            <label htmlFor="health">Health: </label>
            <input
                type="text"
                name="health"
                id="health"
                defaultValue={plant.health}
                onChange={handleChange}
            />

            <br></br>

            <label htmlFor="family">Plant Family: </label>
            <input
                type="text"
                name="family"
                id="family"
                defaultValue={plant.family}
                onChange={handleChange}
            />

        <br></br>

            <button id='repot-seed' type="submit" onClick={handleUpdateForm}>Repot plant</button>
        </form>
        </fieldset>
    )
}

export default Update;
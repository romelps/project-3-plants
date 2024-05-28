import { useState } from 'react'
// import { update } from './Services/plantService.js'
// src/Services/plantService.js

const Update = (props) => {

    const {handleUpdateView, handleAddPlant, handleUpdate, show, setShow} = props

    const [plant, setPlant] = useState({
        name: '',
        size: '',
        health: '',
        family: '',
    })

    // const [plant, setPlant] = useState(show ? show : initialState)

    const handleUpdateForm = (event) => {
        event.preventDefault();
        if (show) {
            handleUpdate(plant, show._id);
        } else {
            handleAddPlant(plant);
        }
       // setPlant({ ...plant, [event.target.name]: event.target.value});
    };

    const handleChange = (event) => {
        setPlant({ ...plant, [event.target.name]: event.target.value});
    }

    return(
        <form onSubmit={ () => handleUpdate(plant._id)}>
            <label htmlFor="name">Name: </label>
            <input
                type="text"
                name="name"
                id="name"
                value={plant.name}
                onChange={handleChange}
            />

            <br></br>

            <label htmlFor="Size">Size: </label>
            <input
                type="text"
                name="size"
                id="size"
                value={plant.size}
                onChange={handleChange}
            />

            <br></br>

            <label htmlFor="health">Health: </label>
            <input
                type="text"
                name="health"
                id="health"
                value={plant.health}
                onChange={handleChange}
            />

            <br></br>

            <label htmlFor="family">Plant Family: </label>
            <input
                type="text"
                name="family"
                id="family"
                value={plant.family}
                onChange={handleChange}
            />

        <br></br>

            <button type="submit" onClick={handleUpdateForm}>Repot plant</button>
        </form>
    )
}

export default Update;
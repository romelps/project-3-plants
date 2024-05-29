import { useState } from 'react'
import './create.css'

const Create = ({handleAddPlant}) => {

    const [plant, setPlant] = useState({
        name: '',
        size: '',
        health: '',
        family: '',
    })

    const handleChange = (event) => {
        setPlant({ ...plant, [event.target.name]: event.target.value});
    }

    return(
        <fieldset>
            <h2>Input Plant Info: </h2>
        <form onSubmit={ () => handleAddPlant(plant)}>
            <label htmlFor="name">Name </label><br></br>
            <input
                type="text"
                name="name"
                id="name"
                value={plant.name}
                onChange={handleChange}
            />

            <br></br>

            <label htmlFor="Size">Size </label><br></br>
            <input
                type="text"
                name="size"
                id="size"
                value={plant.size}
                onChange={handleChange}
            />

            <br></br>

            <label htmlFor="health">Health </label><br></br>
            <input
                type="text"
                name="health"
                id="health"
                value={plant.health}
                onChange={handleChange}
            />

            <br></br>

            <label htmlFor="family">Plant Family </label><br></br>
            <input
                type="text"
                name="family"
                id="family"
                value={plant.family}
                onChange={handleChange}
            />

            <br></br>

            <button type="submit" id='plant-seed'>Plant Seed</button>
            
        </form>
        </fieldset>
        
    )
}

export default Create;
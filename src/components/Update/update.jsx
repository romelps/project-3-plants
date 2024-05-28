import { useState } from 'react'

const Update = (props, {handleUpdateView, handleAddPlant}) => {

    const [plant, setPlant] = useState({
        name: '',
        size: '',
        health: '',
        family: '',
    })

    const handleUpdateForm = (event) => {
        event.preventDefault();
        props.handleAddPlant(plant);
        // setPlant({ ...plant, [event.target.name]: event.target.value});
    }

    return(
        <form onSubmit={ () => handleUpdateView(plant)}>
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

            <button type="submit">Repot plant</button>
        </form>
    )
}

export default Update;
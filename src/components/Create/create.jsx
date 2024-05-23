import { useState } from 'react'

const Create = ({handleAddPlant}) => {

    const [plant, setPlant] = useState({
        name: '',
        size: '',
        health: '',
        family: '',
    })

    return(
        <form onSubmit={ () => handleAddPlant(plant)}>
            <label htmlFor="name">Name: </label>
            <input
                type="text"
                name="name"
                id="name"
                value={plant.name}
            />

            <label htmlFor="Size">Size: </label>
            <input
                type="text"
                name="size"
                id="size"
                value={plant.size}
            />

            <label htmlFor="health">Health: </label>
            <input
                type="text"
                name="health"
                id="health"
                value={plant.health}
            />

            <label htmlFor="family">Plant Family: </label>
            <input
                type="text"
                name="family"
                id="family"
                value={plant.family}
            />

            <button type="submit">Plant Seed</button>
        </form>
    )
}

export default Create;
import { useState } from 'react'

const Create = () => {

    const [plant, setPlant] = useState({
        name: '',
        size: '',
        health: '',

    })

    return(
        <form onSubmit={ () => handle}>
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

            <button type="submit">Plant Seed</button>
        </form>
    )
}

export default Create;
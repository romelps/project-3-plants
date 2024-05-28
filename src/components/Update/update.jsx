import { useState } from 'react'

const Update = (props) => {

    const {handleUpdateView, handleAddPlant, show, setShow} = props

    const initialState = {
        name: '',
        size: '',
        health: '',
        family: '',
    }

    const [plant, setPlant] = useState(props.show ? props.show : initialState)

    const handleUpdateForm = (event) => {
        event.preventDefault();
        if (props.show) {
            props.handleAddPlant(plant, props.show._id);
        } else {
            props.handleAddPlant(plant);
        }
        // setPlant({ ...plant, [event.target.name]: event.target.value});
    };

    const handleChange = (event) => {
        setPlant({ ...plant, [event.target.name]: event.target.value});
    }

    return(
        <form onSubmit={ () => handleUpdateView(plant)}>
            <label htmlFor="name">Name: </label>
            <input
                type="text"
                name="name"
                id="name"
                value={plant.name}
                onChange={handleUpdateForm}
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
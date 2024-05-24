import { useState } from 'react'

const Update = () => {

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
        <>
            <h1>Welcome to your garden</h1>        
        </>
    )
}

export default Update;
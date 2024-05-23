import { useState } from 'react'
import * as PlantService from './services/plantService'
import Home from './components/Homepage/home'
import Nav from './components/Navbar/navbar'
import Show from './components/Show/show'
import Create from './components/Create/create'

import './App.css'



function App() {
  const [plant, setPlant] = useState({})
const handleAddPlant = async (plant) => {
    const newPlant = await PlantService.create(plant)
}


//handles the changes in the search bar

const handleInputChange = (event) => {
  setSearch(event.target.value)
}

const handleSearch = async () => {
  const URL = `${BASE_URL}/${search}`
  const res = await fetch(URL);
  const returnData = await res.json();
  setPlants(returnData.results);

}

  return (
    <>
      <Nav />
      <Home id='home' />
      <Create id='create' />
      <Show id='show' />
      <Search id='search' 
        handleInputChange={handleInputChange} 
        handleSearch={handleSearch} 
      />
    </>
  )
}

export default App

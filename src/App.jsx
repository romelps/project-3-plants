import { useState, useEffect } from 'react'
import * as PlantService from './Services/plantService'
import Home from './components/Homepage/home'
import Nav from './components/Navbar/navbar'
import Show from './components/Show/show'
import Create from './components/Create/create'

import './App.css'



const App = () => {
  const [plant, setPlant] = useState({})
  const [plantList, setPlantList] = useState([]);
  
  
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

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const plants = await plantService.index();
        setPlantList(plants);
      } catch (err) {
        console.log(err)
      }
    };
    fetchPlants();
  }, []);

  const handleAddPlant = async (plant) => {
    
    await PlantService.create(plant)
    
  }


  return (
    <>
      <Nav />
      
      <main>
        <ul>
          {plantList.map((plant) => (
            <Home id='home' plant = {plant}/>
          ))}
        </ul>
      </main>
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

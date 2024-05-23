import { useState, useEffect } from 'react'
import * as PlantService from './Services/plantService'
import Home from './components/Homepage/home'
import Nav from './components/Navbar/navbar'
import Show from './components/Show/show'
import Create from './components/Create/create'

import './App.css'

const App = () => {

  const [plantList, setPlantList] = useState([]);
  


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
    </>
  )
}

export default App

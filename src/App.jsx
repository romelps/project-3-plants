import { useState, useEffect } from 'react'
import * as PlantService from './Services/plantService'
import Home from './components/Homepage/home'
import Nav from './components/Navbar/navbar'
import Show from './components/Show/show'
import Create from './components/Create/create'
import Search from './components/SearchBar/search'

import './App.css'



const App = () => {
  const [plant, setPlant] = useState({})
  const [plantList, setPlantList] = useState([]);
  const [isCreateOpen, setIsCreateOpen] = useState(false);//tells us create form is not open
  
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
        const plants = await PlantService.index();
        setPlantList(plants);
        console.log(plantList)
      } catch (err) {
        console.log(err)
      }
    };
    fetchPlants();
  }, []);

  //adds plant to database (PlantService connects directly to back-end)
  const handleAddPlant = async (plant) => {
    await PlantService.create(plant)
  }

  //toggles the create view to be visible
  const handleCreateView = () => {
    setIsCreateOpen(!isCreateOpen);
  }

  return (
    <>
      <Nav 
        handleCreateView={handleCreateView}
        isCreateOpen={isCreateOpen} 
      />
      <h1>Welcome to your garden </h1>
      <main>
        <ul>
          {plantList.map((plant) => (
            <Home id='home' plant = {plant} {...{handleAddPlant}}/>
          ))}
        </ul>
      </main>
      {/* {isFormOpen ? (
        <Create id='create' />
      ): (
        <Home id='home'/>
      )} */}
      <Show id='show' />
      <Search id='search' 
        handleInputChange={handleInputChange} 
        handleSearch={handleSearch} 
      />
    </>
  )
}

export default App

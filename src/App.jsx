import { useState, useEffect } from 'react'
import * as PlantService from './Services/plantService'
import Home from './components/Homepage/home'
import Nav from './components/Navbar/navbar'
import Show from './components/Show/show'
import Create from './components/Create/create'
import Search from './components/SearchBar/search'


import './App.css'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/plants`;


const App = () => {
  const [plant, setPlant] = useState({})
  const [plantList, setPlantList] = useState([]);
  const [search, setSearch] = useState('')
  const [searchPlants, setSearchPlants] = useState([])

  
 //handles the changes in the search bar
const handleInputChange = (event) => {
  setSearch(event.target.value)
}

const handleSearch = async () => {
  const URL = `http://3.141.46.99:3015/plants/${search}`
  const res = await fetch(URL);
  console.log (URL)
  const returnData = await res.json();
  console.log(returnData)
  setSearchPlants(returnData.results);
}


  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const plants = await PlantService.index();
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
      <Search
        id='search'
        handleInputChange={handleInputChange} 
        handleSearch={handleSearch} 
        searchPlants={searchPlants}

      />
    </>
  )
}

export default App

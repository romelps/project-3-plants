import { useState, useEffect } from 'react'
import PlantService from './Services/plantService'
import Home from './components/Homepage/home'
import Nav from './components/Navbar/navbar'
import Show from './components/Show/show'
import Create from './components/Create/create'
import Search from './components/SearchBar/search'
import SearchResult from './components/SearchResult/SearchResult'


import './App.css'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/plants`;


const App = () => {
  const [plant, setPlant] = useState({})
  const [plantList, setPlantList] = useState([]);
  const [search, setSearch] = useState('')
  const [searchPlants, setSearchPlants] = useState(null);

  
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
  setSearchPlants(returnData);
}


  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const plants = await PlantService.index();
        setPlantList(plants);
        console.log(plants)
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
      <Show 
      id='show' 
      plant = {plant}
      name= {plant.name}
      size= {plant.size}
      health= {plant.health}
      family= {plant.family}
      />
      <Search
        id='search'
        handleInputChange={handleInputChange} 
        handleSearch={handleSearch} 
        searchPlants={searchPlants}
      />

      {searchPlants ? 
      <SearchResult
      id='searchResult'
        searchPlants={searchPlants}
      />: null}
    </>
  )
}

export default App

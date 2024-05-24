import { useState, useEffect } from 'react'
import PlantService from './Services/plantService'
import Home from './components/Homepage/home'
import Nav from './components/Navbar/navbar'
// import Show from './components/Show/show'
import Create from './components/Create/create'
import Search from './components/SearchBar/search'

import SearchResult from './components/SearchResult/SearchResult'

import './App.css'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/plants`;


const App = () => {
  const [plant, setPlant] = useState({})
  const [plantList, setPlantList] = useState([]);
  const [isCreateOpen, setIsCreateOpen] = useState(false);//tells us create form is not open
  const [search, setSearch] = useState('')
  const [searchPlants, setSearchPlants] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  
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
        console.log(plantList)
        console.log(plants)
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

 

  return (
    <>
      <Nav 
        handleCreateView={handleCreateView}
        isCreateOpen={isCreateOpen} 
        showSearch={showSearch}
        setShowSearch={setShowSearch}
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
      
      {/* <Show 
      id='show' 
      plant = {plant}
      name= {plant.name}
      size= {plant.size}
      health= {plant.health}
      family= {plant.family}
      /> */}
      {showSearch ?
      <Search
        id='search'
        handleInputChange={handleInputChange} 
        handleSearch={handleSearch} 
        searchPlants={searchPlants}
      />: null}

      {searchPlants ? 
      <SearchResult
      id='searchResult'
        searchPlants={searchPlants}
      />: null}
    </>
  )
}

export default App;

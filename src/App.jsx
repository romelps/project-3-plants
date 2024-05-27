import { useState, useEffect } from 'react'
import * as PlantService from './Services/plantService'
import Home from './components/Homepage/home'
import Nav from './components/Navbar/navbar'
import Show from './components/Show/show'
import Create from './components/Create/create'
import Search from './components/SearchBar/search'

import SearchResult from './components/SearchResult/SearchResult'
import Index from './components/Index/index'

import './App.css'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/plants`;


const App = () => {
  const [plant, setPlant] = useState({})
  const [plantList, setPlantList] = useState([]);
  const [isCreateOpen, setIsCreateOpen] = useState(false);//tells us create form is not open
  const [search, setSearch] = useState('')
  const [searchPlants, setSearchPlants] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [showCard, setShowCard] = useState([]);
  const [showIndex, setShowIndex] = useState(false);

  
 //handles the changes in the search bar
const handleInputChange = (event) => {
  setSearch(event.target.value)
}

//delete handler for the delete button
const handleDelete = async (id) => {
  await PlantService.destroy(id);
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
    try{
      const newPlant = await PlantService.create(plant);

      //add the current plant list and put it into an array
      setPlantList([newPlant, ...plantList]);

      //close create form
      setIsCreateOpen(false);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <Nav 
        // handleCreateView={handleCreateView}
        isCreateOpen={isCreateOpen} 
        setIsCreateOpen={setIsCreateOpen} 
        showSearch={showSearch}
        setShowSearch={setShowSearch}
      />
      <h1>Welcome to your garden </h1>

      <p>Please use the navigation bar to log your plant (plant a seed!), see the plants we have in our virtual garden, or eutheanize a not so healthy one.</p>

    <main>
        <ul>
          {plantList.map((plant) => (
            <Home 
            id='home' 
            plant = {plant} 
            {...{handleAddPlant}}/>

          ))}
        </ul>
    </main>

      {showIndex ? (
        <Index 
        id='index'
        plant={plant} 
        plantList={plantList}
       
        {...{handleAddPlant}}/>
        
      ) : null}


      {isCreateOpen ? (
        <Create 
        id='create'
        plant={plant}
        handleAddPlant={handleAddPlant}  />
      ): null}
      
      <Show 
      id='show' 
      plant = {plant}
      name= {plant.name}
      size= {plant.size}
      health= {plant.health}
      family= {plant.family}
      />

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

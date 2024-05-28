import { useState, useEffect } from 'react'
import * as PlantService from './Services/plantService'
import Home from './components/Homepage/home'
import Nav from './components/Navbar/navbar'
import Show from './components/Show/show'
import Create from './components/Create/create'
import Search from './components/SearchBar/search'
import Update from './components/Update/update'

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
  const [showCard, setShowCard] = useState([]);
  const [showIndex, setShowIndex] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [selected, setSelected] = useState(null);





  
 //handles the changes in the search bar
const handleInputChange = (event) => {
  setSearch(event.target.value)
}


const handleDelete = async (id) => {
  try {
    const deletedPlant = await PlantService.deletePlant(id);
  
  if (deletedPlant.error) {
    throw new Error(deletedPlant.error);
  }

  setPlantList(plantList.filter((plant) => plant._id !== deletedPlant._id));
  setSelected(null);
  setIsFormOpen(false);
  } catch (error) {
  console.log(error);
  }
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

  //update plant
  

  // const updateShow = (plant) => {
  //   setShow(plant)
  // }
    
  const handleUpdateView = () => {
    if(!plant.name) setShow(null);
    setShowUpdate(!showUpdate);
  }

  return (
    <>
      <Nav 
        // handleCreateView={handleCreateView}
        isCreateOpen={isCreateOpen}
        setIsCreateOpen={setIsCreateOpen} 
        showSearch={showSearch}
        setShowSearch={setShowSearch}
        showIndex = {showIndex}
        setShowIndex = {setShowIndex}
      />
      <h1>Welcome to your garden </h1>
      <p>Please use the navigation bar to log your plant (plant a seed!), see the plants we have in our virtual garden, or eutheanize a not so healthy one.</p>
      
      {showIndex ?
        <main>
          <ul>
            {plantList.map((plant) => (
              <Home 
              id='home' 
              plant = {plant} 
              handleDelete={handleDelete}
              {...{handleAddPlant}}/>

            ))}
          </ul>
      </main> 
        : null}

{/* //       {showIndex ? ( */}
{/* //         <Index  */}
{/* //         id='index' */}
{/* //         plant={plant}  */}
{/* //         plantList={plantList} */}
       
{/* //         {...{handleAddPlant}}/> */}
        
{/* //       ) : null}  */}


      {isCreateOpen ? (
        <Create 
        id='create'
        plant={plant}
        handleAddPlant={handleAddPlant} 
        />
      ): null}

      {showUpdate ? (
        <Update
        id='update'
        plant={plant}
        handleUpdateView={handleUpdateView}
        handleAddPlant={handleAddPlant}
        show={show}
        setShow={setShow}
        />
      ): null}
      


   
      
{/*       <Show 
       id='show' 
       plant = {plant}
       name= {plant.name}
       size= {plant.size}
       health= {plant.health}
       family= {plant.family}
          />: null}  */}


      {showSearch ?
      <Search
        id='search'
        handleInputChange={handleInputChange} 
        handleSearch={handleSearch} 
        searchPlants={searchPlants}
        handleDelete={handleDelete}
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

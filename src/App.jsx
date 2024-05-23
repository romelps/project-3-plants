import { useState } from 'react'
import * as PlantService from './Services/plantService'
import Home from './components/Homepage/home'
import Nav from './components/Navbar/navbar'
import Show from './components/Show/show'
import Create from './components/Create/create'

import './App.css'

function App() {
const handleAddPlant = async (plant) => {
  
    const newPlant = await PlantService.create(plant)
  
}

  return (
    <>
      <Nav />
      <Home id='home' />
      <Create id='create' />
      <Show id='show' />
    </>
  )
}

export default App

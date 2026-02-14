import React from 'react'
import GlobalScene from './Components/ScrollRig/GlobalScene'
import Scene from './Components/ScrollRig/Scene'
import Navbar from './Components/UI/Navbar'

const App = () => {
  return (
    <>
      <GlobalScene />
      <Navbar />
      <Scene />
    </>
  )
}

export default App
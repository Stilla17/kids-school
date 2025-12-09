import React from 'react'
import Aplication from './Components/Aplication/Aplication'
import Nav from './Components/Nav/Nav'
import Header from './Components/Header/Header'
import Instruction from './Components/Instruction/Instruction'
import Explore from './Components/Explore/Explore'

const App = () => {
  return (
    <>
      <Nav />
      <Aplication />
      <Header />
      <Instruction />
      <Explore />
    </>
  )
}

export default App
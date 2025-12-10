import React from 'react'
import Aplication from './Components/Aplication/Aplication'
import Nav from './Components/Nav/Nav'
import Header from './Components/Header/Header'
import Instruction from './Components/Instruction/Instruction'
import Explore from './Components/Explore/Explore'
import Hero from './Components/Hero/Hero'
import Box from './Components/Box/Box'
import Section from './Components/Section/Section'
import Section2 from './Components/Section2/Section2'

const App = () => {
  return (
    <>
      <Nav />
      <Aplication />
      <Header />
      <Instruction />
      <Explore />
      <div className='bg-[#E1DEFC]'>
        <Hero />
        <Box />
      </div>
      <Section />
      <Section2 />
    </>
  )
}

export default App
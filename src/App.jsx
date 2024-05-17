import './App.css'
import { ChakraProvider, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import ButtonMain from './components/button/ButtonMain'
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <NavBar />
      <Heading> Soy un título</Heading>
      <ItemListContainer />
    </ChakraProvider>
  )
}

export default App

import './App.css'
import { ChakraProvider, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import ButtonMain from './components/button/ButtonMain'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer tittle={'Productos de Infinite Computing'}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer tittle='Productos de Infinite Computing' />}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App

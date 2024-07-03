import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import 'react-toastify/dist/ReactToastify.css'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import NotFound from './components/NotFound/NotFound'
import { CartContextProvider } from './Context/CartContext'
import Cart from './components/cart/Cart'
import Checkout from './components/Checkout/Checkout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <CartContextProvider>
        <HashRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer tittle={'Productos de Infinite Computing'}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer tittle='Productos de Infinite Computing' />}/>
            <Route path='/producto/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<NotFound />} /> 
          </Routes>
        </HashRouter>
      </CartContextProvider>
    </ChakraProvider>
  )
}

export default App

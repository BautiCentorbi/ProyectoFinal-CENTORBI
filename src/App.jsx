import './App.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import 'react-toastify/dist/ReactToastify.css'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import NotFound from './components/PageNotFound/NotFound'
import { CartContextProvider } from './Context/CartContext'
import Cart from './components/cart/Cart'
import Checkout from './components/Checkout/Checkout'
import '@fontsource-variable/darker-grotesque';

function App() {
  const theme = extendTheme({
    fonts: {
        heading: 'Darker Grotesque Variable',
        // body: 'Darker Grotesque Variable'
    },
  })
  
  return (
    <ChakraProvider theme={theme}>
      <CartContextProvider>
        <HashRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer tittle={'PRODUCTOS DE INFINITE COMPUTING'}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer tittle='PRODUCTOS DE INFINITE COMPUTING' />}/>
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

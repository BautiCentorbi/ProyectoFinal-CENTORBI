import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Text, Box, Flex, Heading, Stack } from '@chakra-ui/react'

const ItemCount = ({stock, valorInicial, onAdd}) => {
  const [ count, setCount ] = useState(valorInicial)

  const incrementar = () => {
    count < stock && setCount(count + 1)
  }
  const decrementar = () => {
    count > valorInicial && setCount(count - 1)
  }
  
    return (
    <Stack>
        {
          stock === 0 ?
          <Box>
            <Flex w={'100%'} justify={'center'} align={'center'} mb={'1rem'}>
              <Text fontSize={'large'}>Producto no disponible actualmente</Text>
            </Flex>
            <Button w={'100%'} size={'lg'} variant={'solid'} color={'white'} bgColor={'orange.800'} _hover={{bgColor: 'orange.600'}}><Link to='/'>Seguir Comprando</Link></Button>
          </Box>
          :
          <Box>
            <Heading size={'lg'} textAlign={'center'}>Cantidad de productos:</Heading>
            <Flex w={'100%'} justify={'center'} align={'center'}>
              <Button variant={'solid'} bgColor={'orange.400'} onClick={decrementar}><Text fontWeight={'bold'} fontSize={'lg'}>-</Text></Button>
              <Box borderRadius={'1rem'} border={'0.06rem'} borderColor={'lightgray'} w={'100%'} my={'1rem'} marginX={'1rem'}>
                <Text fontWeight={'600'} fontSize={'2rem'} textAlign={'center'}>{count}</Text>
              </Box>
              <Button variant={'solid'} bgColor={'orange.400'} onClick={incrementar}><Text fontWeight={'bold'} fontSize={'lg'}>+</Text></Button>
            </Flex> 
            <Button w={'100%'} size={'lg'} variant={'solid'} color={'orange.600'} bgColor={'orange.100'} _hover={{bgColor: 'orange.200'}} onClick={() => onAdd(count)}>Agregar al Carrito</Button>
          </Box>
        }
    </Stack>
  )
}

export default ItemCount
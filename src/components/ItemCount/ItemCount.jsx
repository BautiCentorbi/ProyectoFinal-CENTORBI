import React, { useState } from 'react'
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
        <Heading size={'lg'} textAlign={'center'}>Cantidad de productos:</Heading>
        <Flex w={'100%'} justify={'center'} align={'center'}>
          <Button variant={'solid'} bgColor={'orange.400'} onClick={decrementar}><Text fontWeight={'bold'} fontSize={'lg'}>-</Text></Button>
          <Box borderRadius={'16px'} border={'1px'} borderColor={'lightgray'} w={'100%'} marginX={'16px'}>
            <Heading fontWeight={'md'} size={'lg'} textAlign={'center'}>{count}</Heading>
          </Box>
          <Button variant={'solid'} bgColor={'orange.400'} onClick={incrementar}><Text fontWeight={'bold'} fontSize={'lg'}>+</Text></Button>
        </Flex>
        <Button w={'100%'} size={'lg'} variant={'solid'} color={'orange.600'} bgColor={'orange.100'} _hover={{bgColor: 'orange.200'}} onClick={() => onAdd(count)}>Agregar al Carrito</Button>
    </Stack>
  )
}

export default ItemCount
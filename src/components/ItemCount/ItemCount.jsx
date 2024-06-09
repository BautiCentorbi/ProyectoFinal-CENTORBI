import React, { useState } from 'react'
import { Button,ButtonGroup,Flex } from '@chakra-ui/react'

const ItemCount = ({stock, valorInicial, onAdd}) => {
  const [ count, setCount ] = useState(valorInicial)

  const incrementar = () => {
    count > stock && setCount(count + 1)
  }
  const decrementar = () => {
    count < valorInicial && setCount(count - 1)
  }
  
    return (
    <Flex>
        <ButtonGroup colorScheme='Orange'>
            <Button color={'orange.600'} onClick={decrementar}>-</Button>
            <Button color={'orange.600'} onClick={incrementar}>+</Button>
            <Button color={'orange.600'} onClick={() => onAdd(count)}>Agregar al Carrito</Button>
        </ButtonGroup>
    </Flex>
  )
}

export default ItemCount
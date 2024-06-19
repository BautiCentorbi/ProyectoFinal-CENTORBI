import React, { useContext } from 'react'
import { IoMdCart } from "react-icons/io";
import { Box, Flex, Text } from '@chakra-ui/react'
import Context from '../../Context/CartContext'
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { getQuantity } = useContext(Context)
  
  return (
    <Flex direction={'row'} >
        <Link to={'/cart'}>
          <IoMdCart color={'#562B00'} size='40px'/>
        </Link>
        <Text>{ getQuantity() > 0 && getQuantity() }</Text>
    </Flex>
  )
}

export default CartWidget
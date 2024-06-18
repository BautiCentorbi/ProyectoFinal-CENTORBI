import React from 'react'
import { IoMdCart } from "react-icons/io";
import { Box,Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <Box display='Flex' >
        <Link to={'/cart'}>
          <IoMdCart color={'#562B00'} size='40px'/>
          <Text></Text>
        </Link>
    </Box>
  )
}

export default CartWidget
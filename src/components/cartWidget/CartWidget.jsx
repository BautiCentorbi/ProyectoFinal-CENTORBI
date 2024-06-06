import React from 'react'
import { IoMdCart } from "react-icons/io";
import { Box } from '@chakra-ui/react'

const CartWidget = () => {
  return (
    <Box display='Flex' >
        <IoMdCart color={'#562B00'} size='40px'/>
        <h4>0</h4>
    </Box>
  )
}

export default CartWidget
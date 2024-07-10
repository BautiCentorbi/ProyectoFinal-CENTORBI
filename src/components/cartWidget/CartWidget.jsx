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
          <IoMdCart color={'#562B00'} size={'2.5rem'}/>
        </Link>
        {
          getQuantity() > 0 ?
          <Flex align={'center'} justify={'center'} bgColor={'orange.800'} borderRadius={'full'} width={'1.5rem'} height={'1.5rem'}>
            <Text color={'white'} fontWeight={'600'} fontSize={'1rem'}>{ getQuantity() > 0 && getQuantity() }</Text>
          </Flex>
          :
          <Text color={'white'} fontWeight={'600'} fontSize={'1rem'}>{ getQuantity() > 0 && getQuantity() }</Text>
        }
    </Flex>
  )
}

export default CartWidget
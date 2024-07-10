import { Box, Card, Heading, Text, CardBody, Flex, Image, Stack, Button } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import Context from '../../Context/CartContext'
import { costTransform } from '../../config/firebase'
import { FaCheck } from "react-icons/fa";

const ItemDetail = ({id,nombre,precio,img,lgDescripcion,stock, currentQuantity}) => {
  const [ cantidad, setCantidad ] = useState(0)
  const { addItem } = useContext(Context)
  const maxAvailable = stock - currentQuantity

  const onAdd = (quantity) => {
    const item = {
      id,
      nombre,
      precio,
      img,
      stock
    }
    addItem(item,quantity)
    toast.success((quantity == 1) ? `Agregaste ${quantity} unidad` : `Agregaste ${quantity} unidades`)
    setCantidad(quantity)
  }

  return (
    <Box margin={'4rem'}>
      <Card minW={'msm'} colorScheme='Orange'>
        <CardBody>
          <Flex>
            <Image 
              boxSize={'30rem'}
              src={img} borderRadius={'lg'}
              alt={nombre}
            />
            <Box ml={'10vh'}>
              <Stack mt={'6'} spacing={'3'}>
                <Heading fontSize={'2.5rem'}>{nombre}</Heading>
                <Text fontSize={'lg'}>{lgDescripcion}</Text>
                <Heading color='orange.700' fontSize='3.5rem'fontWeight='700'>{costTransform(precio)}</Heading>
                <Text fontSize={'1.5rem'}>Cantidad Disponible: {stock}</Text>
                {
                currentQuantity === 0 ? 0 : <Text fontSize={'1.5rem'}>Cantidad en el carrito: {currentQuantity}</Text>
                }
                <ToastContainer />
                {
                  cantidad > 0 ?
                  <Stack>
                    <Flex align={'center'} justify={'center'}>
                      <FaCheck color='#14991e' size={'3vh'}/>
                      <Text fontWeight={'bold'} fontSize={'lg'} mx={'5vh'} my={'2vh'} color={'#14991e'}>
                        Has agregado correctamente el producto
                      </Text>
                    </Flex>
                    <Link to='/cart'>
                      <Button w={'100%'} size={'lg'} variant={'solid'} color={'orange.600'} bgColor={'orange.100'} _hover={{bgColor: 'orange.200'}}>Ir al Carrito</Button>
                    </Link>
                    <Link to='/'>
                      <Button w={'100%'} size={'lg'} variant={'solid'} color={'white'} bgColor={'orange.800'} _hover={{bgColor: 'orange.600'}}>Seguir Comprando</Button>
                    </Link>
                  </Stack>
                  :
                  <ItemCount stock={stock} valorInicial={1} onAdd={onAdd} maxAvailable={maxAvailable}/>
                }
              </Stack>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  )
}

export default ItemDetail
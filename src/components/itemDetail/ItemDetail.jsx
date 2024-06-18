import { Box, Card, Heading, Text, CardBody, Flex, Image, Stack, Button } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import Context from '../../Context/CartContext'
import { costTransform } from '../../data/asyncMock'
import { FaCheck } from "react-icons/fa";

const ItemDetail = ({id,nombre,precio,img,lgDescripcion,stock}) => {
  const [ cantidad, setCantidad ] = useState(0)
  const { addItem } = useContext(Context)

  const onAdd = (quantity) => {
    const item = {
      id,
      nombre,
      precio
    }
    addItem(item,quantity)
    toast((quantity == 1) ? `Agregaste ${quantity} unidad` : `Agregaste ${quantity} unidades`)
    setCantidad(quantity)
  }

  return (
    <Box margin={'40px'}>
      <Card minW={'msm'} colorScheme='Orange'>
        <CardBody>
          <Flex>
            <Image 
              w={'600px'}
              src={img} borderRadius={'lg'}
              alt={nombre}
            />
            <Box ml={'10vh'}>
              <Stack mt={'6'} spacing={'3'}>
                <Heading size={'xl'}>{nombre}</Heading>
                <Text fontSize={'lg'}>{lgDescripcion}</Text>
                <Text color='orange.700' fontSize='3rem'fontWeight='600'>{costTransform(precio)}</Text>
                <ToastContainer />
                {
                  cantidad > 0 ?
                  <Stack>
                    <Flex align={'center'} justify={'center'}>
                      <FaCheck color='#14991e' size={'3vh'}/>
                      <Text fontWeight={'bold'} fontSize={'xl'} mx={'5vh'} my={'2vh'} color={'#14991e'}>
                        Has agregado correctamente el producto
                      </Text>
                    </Flex>
                    <Button w={'100%'} size={'lg'} variant={'solid'} color={'orange.600'} bgColor={'orange.100'} _hover={{bgColor: 'orange.200'}}><Link to='/cart'>Ir al Carrito</Link></Button>
                    <Button w={'100%'} size={'lg'} variant={'solid'} color={'white'} bgColor={'orange.800'} _hover={{bgColor: 'orange.600'}}><Link to='/'>Seguir Comprando</Link></Button>
                  </Stack>
                  :
                  <ItemCount stock={stock} valorInicial={1} onAdd={onAdd} />
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
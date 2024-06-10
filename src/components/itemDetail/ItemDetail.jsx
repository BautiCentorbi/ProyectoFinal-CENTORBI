import { Box, Card, Heading, Text, CardBody, CardFooter, CardHeader, Flex, Image, Stack, ButtonGroup, Button } from '@chakra-ui/react'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({nombre,precio,img,lgDescripcion,stock}) => {
  
  const onAdd = (quantity) => {
    toast((quantity == 1) ? `Agregaste ${quantity} unidad` : `Agregaste ${quantity} unidades`)
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
                <Text color='orange.700' fontSize='3rem'fontWeight='600'>{precio}</Text>
                <ItemCount stock={stock} valorInicial={1} onAdd={onAdd}/>
                <ToastContainer />
                <Button size={'lg'} variant='solid' _hover={{bgColor: 'orange.700'}} bgColor={'orange.800'} color={'white'}>
                  Comprar Ahora
                </Button>
              </Stack>
            </Box>
          </Flex>
        </CardBody>
        <CardFooter>
        </CardFooter>
      </Card>
    </Box>
  )
}

export default ItemDetail
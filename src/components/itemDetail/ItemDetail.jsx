import { Box, Card, Heading, Text, CardBody, CardFooter, CardHeader, Flex, Image, Stack, ButtonGroup, Button } from '@chakra-ui/react'
import React from 'react'

const ItemDetail = ({nombre,precio,img,lgDescripcion,id}) => {
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
            <Box>
              <Stack mt={'6'} spacing={'3'}>
                <Heading size={'xl'}>{nombre}</Heading>
                <Text fontSize={'lg'}>{lgDescripcion}</Text>
                <Text color='orange.700' fontSize='2rem'fontWeight='600'>{precio}</Text>
                <Button variant='solid' _hover={{bgColor: 'orange.700'}} bgColor={'orange.800'} color={'white'}>
                  Añadir al Carrito
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
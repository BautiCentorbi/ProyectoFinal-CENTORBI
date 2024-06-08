import { Box, Card, Heading, Text, CardBody, CardFooter, CardHeader, Flex, Image, Stack } from '@chakra-ui/react'
import React from 'react'

const ItemDetail = ({nombre,precio,img,descripcion,id}) => {
  return (
    <Box margin={'40px'}>
      <Card maxW={'md'} colorScheme='Orange'>
        <CardBody>
          <Flex>
            <Image 
              src={img} borderRadius={'lg'}
              alt={nombre}
            />
            <Box>
              <Stack mt={'6'} spacing={'3'}>
                <Heading size='md'>{nombre}</Heading>
                <Text>{descripcion}</Text>
                <Text color='orange.700' fontSize='2rem'fontWeight='600'>{precio}</Text>
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
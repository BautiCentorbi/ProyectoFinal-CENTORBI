import React from 'react'
import {
    Box,
    Button,
    Image,
    Text,
    ButtonGroup,
    Heading,
    Divider,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Stack
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { costTransform } from '../../data/asyncMock'

const Item = ({nombre,precio,img,descripcion,id}) => {
  return (
    <Box margin='40px'>
        <Card maxW='sm' colorScheme={'Orange'}>
            <CardBody>
                <Image 
                    src={img} borderRadius='lg'
                    alt={nombre}
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{nombre}</Heading>
                    <Text>{descripcion}</Text>
                    <Text color='orange.700' fontSize='2rem'fontWeight='600'>{costTransform(precio)}</Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' _hover={{bgColor: 'orange.700'}} bgColor={'orange.800'} color={'white'}>Añadir al Carrito</Button>
                    <Button variant='ghost' _hover={{bgColor: 'orange.100'}} color={'orange.800'}>
                        <Link to={`/producto/${id}`}>Ver Detalle</Link>
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    </Box>
  )
}

export default Item
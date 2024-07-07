import React from 'react'
import { Link } from 'react-router-dom'
import {
    Box,
    Button,
    Image,
    Text,
    ButtonGroup,
    Heading,
    Divider,
    Card,
    Link as ChakraLink,
    CardBody,
    CardFooter,
    Stack
} from '@chakra-ui/react'
import { costTransform } from '../../config/firebase'

const Item = ({nombre,stock,precio,img,descripcion,id}) => {
    
    return (
    <Box margin='2.5rem'>
        <Card maxW={'sm'} colorScheme={'Orange'}>
            <CardBody>
                <Image 
                    src={img} borderRadius='lg'
                    alt={nombre}
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='lg'>{nombre}</Heading>
                    <Text fontSize={'lg'} fontWeight={'500'}>{descripcion}</Text>
                    <Heading color='orange.700' fontSize='2.5rem' fontWeight='700'>{costTransform(precio)}</Heading>
                    <Text fontSize='1.3rem'>{stock} disponibles</Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                    <ChakraLink as={Link} to={`/producto/${id}`} w={'100%'}>
                        <Button w={'100%'} variant='solid' _hover={{bgColor: 'orange.700'}} bgColor={'orange.800'} color={'white'}>
                            Ver Detalle
                        </Button>
                    </ChakraLink>
            </CardFooter>
        </Card>
    </Box>
  )
}

export default Item
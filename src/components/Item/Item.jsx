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
    Stack,
    HStack,
    VStack
} from '@chakra-ui/react'

const Item = ({nombre,precio,img,descripcion}) => {
  return (
    <Box margin='40px'>
            <Card maxW='sm'>
                <CardBody>
                    <Image 
                        src={img} borderRadius='lg'
                        alt={nombre}
                    />
                    <Stack mt='6' spacing='3' colorScheme={'Orange'}>
                        <Heading size='md'>{nombre}</Heading>
                        <Text>{descripcion}</Text>
                        <Text color='orange.700' fontSize='2rem'fontWeight='600'>{precio}</Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2' colorScheme={'Orange'}>
                        <Button variant='solid' _hover={{bgColor: 'orange.700'}} bgColor={'orange.800'} color={'white'}>Añadir al Carrito</Button>
                        <Button variant='ghost' _hover={{bgColor: 'orange.100'}} color={'orange.800'}>Ver Detalle</Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </Box>
  )
}

export default Item
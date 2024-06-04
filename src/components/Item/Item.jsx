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
                    <Stack mt='6' spacing='3'>
                        <Heading size='md' >{nombre}</Heading>
                        <Text>{descripcion}</Text>
                        <Text color='blue.600' fontSize='2rem'fontWeight='600'>{precio}</Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>Añadir al Carrito</Button>
                        <Button variant='ghost' colorScheme='blue'>Ver Detalle</Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </Box>
  )
}

export default Item
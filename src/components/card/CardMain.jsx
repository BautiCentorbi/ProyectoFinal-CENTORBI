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

const CardMain = () => {
  return (
    <Box margin='40px'>
            <Card maxW='sm'>
                <CardBody>
                    <Image 
                        src='./SunflowerShirt.png' borderRadius='lg'
                        alt=''
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md' >OS Shirt - Sunflower</Heading>
                        <Text>Remera Confeccionada en 100% algodón Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam vero voluptas.</Text>
                        <Text color='blue.600' fontSize='2rem'fontWeight='600'>$25000,00</Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>Comprar</Button>
                        <Button variant='ghost' colorScheme='blue'>Añadir al Carrito</Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </Box>
  )
}

export default CardMain
import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Card,
    CardBody,
    Text,
    Heading,
    CardFooter,
    Image,
    Stack
} from '@chakra-ui/react'
import React, { useContext } from 'react'
import Context from '../../Context/CartContext'
import { FaTrashAlt } from "react-icons/fa";
import { costTransform } from '../../data/asyncMock'

const Cart = () => {
    const { cart, removeItem, clearCart } = useContext(Context)
    console.table(cart)

    
    return (
        <Flex wrap={'wrap'} justify={'center'} align={'center'} mt={5} mb={5}>
            {cart.map((prod) => (
                <Card   
                key={prod.id}
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                >
                    {/* <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src={prod.img}
                        alt={prod.nombre}
                    /> */}
                    <Stack>
                        <CardBody>
                            <Heading size='md'>{prod.nombre}</Heading>
                            <Flex justify={'space-between'}>
                                <Text py='2' paddingX={'2rem'} >
                                    Cantidad: {prod.quantity}
                                </Text>
                                <Text py='2' paddingX={'2rem'} >
                                    Precio {costTransform(prod.precio)}
                                </Text>
                                <Text py='2' paddingX={'2rem'} >
                                    Subtotal: {costTransform(prod.precio)}
                                </Text>
                            </Flex>
                        </CardBody>

                        <CardFooter>
                            <ButtonGroup variant='solid' colorScheme='blue'>
                                <Button onClick={() => removeItem(prod.id)}>
                                    <FaTrashAlt />
                                </Button>
                                <Button>
                                    Comprar
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Stack>
                </Card>
        ))}
            <Box>
                <Text>
                    Total: {totalPrice}
                </Text>
            </Box>
        </Flex>
    )
}

export default Cart
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
import EmptyCart from '../../assets/EmptyCart.png'
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeItem, clearCart, totalPrice } = useContext(Context)
    console.table(cart)

    if (cart.length === 0) {
        return (
        <Flex wrap={'wrap'} justify={'center'} align={'center'} mt={'10vh'}>
            <Card>
                <CardBody>
                    <Stack align={'center'}>
                        <Image src={EmptyCart} width={'200px'}/>
                        <Heading textAlign={'center'}>Tu carrito está vacío</Heading>
                        <Text mx={'4vw'} my={'2vh'}>
                            Podés comenzar a incorporar productos al carrito.
                            Conseguí el producto que tanto necesitás.
                        </Text>
                        <Button width={'100%'} variant={'solid'} bgColor={'orange.800'} color={'#ffffff'} _hover={{bgColor: 'orange.600'}}>
                            <Link to='/'>Descubrir productos</Link>
                        </Button>
                    </Stack>
                </CardBody>
            </Card>
        </Flex>
        )
    } else {
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
                                        Precio unitario: {costTransform(prod.precio)}
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
                    <Button onClick={() => clearCart()}>
                        Vaciar el carrito
                    </Button>
                    <Text>
                        Total: {costTransform(totalPrice())}
                    </Text>
                </Box>
            </Flex>
        )
    }
}

export default Cart
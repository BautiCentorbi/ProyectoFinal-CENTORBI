import {
    Box,
    Button,
    Flex,
    Card,
    CardBody,
    Text,
    Heading,
    CardFooter,
    Image,
    Stack,
    Divider,
    Link as ChakraLink
} from '@chakra-ui/react'
import React, { useContext } from 'react'
import Context from '../../Context/CartContext'
import { FaTrashAlt } from "react-icons/fa";
import { costTransform } from '../../config/firebase'
import EmptyCart from '../../assets/EmptyCart.png'
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeItem, clearCart, totalPrice, getQuantity, incrementarItem, decrementarItem } = useContext(Context)

    if (cart.length === 0) {
        return (
        <Flex wrap={'wrap'} justify={'center'} align={'center'} mt={'10vh'}>
            <Card>
                <CardBody>
                    <Stack align={'center'}>
                        <Image src={EmptyCart} width={'12.5rem'}/>
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
            <Flex direction={'row'} justify={'center'} align={'start'} mt={'10vh'} mb={'5vh'}>
                <Flex direction={'column'} justify={'center'} align={'center'} mx={'2vw'}>
                    {cart.map((prod) => (
                        <Card   
                        key={prod.id}
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        borderRadius='lg'
                        mb={'4vh'}
                        minW={'100%'}
                        >
                            <Image 
                                src={prod.img} 
                                boxSize={'fit-content'}
                                objectFit={'cover'}
                                maxW={{base: '100%', sm: '200px'}}
                                alt={prod.nombre}
                            />
                            <Stack w={'100%'}>
                                <CardBody>
                                    <Heading fontSize='2rem'>{prod.nombre}</Heading>
                                    <Flex justify={'space-between'} align={'center'}>
                                        <Flex m={'1rem'}>
                                            <Text py='2' paddingX={'2rem'} >
                                                Cantidad: {prod.quantity}
                                            </Text>
                                            <Button mx={'0.5rem'} size={'sm'} variant={'solid'} bgColor={'orange.800'} color={'#ffffff'} _hover={{bgColor: 'orange.600'}} onClick={() => incrementarItem(prod.id,prod.stock)}>+</Button>
                                            <Button mx={'0.5rem'} size={'sm'} variant={'solid'} bgColor={'orange.800'} color={'#ffffff'} _hover={{bgColor: 'orange.600'}} onClick={() => decrementarItem(prod.id)}>-</Button>
                                        </Flex>

                                        <Text py='2' paddingX={'2rem'} >
                                            Precio unitario: {costTransform(prod.precio)}
                                        </Text>
                                        <Text py='2' paddingX={'2rem'} >
                                            Subtotal: {costTransform(prod.precio * prod.quantity)}
                                        </Text>
                                    </Flex>
                                </CardBody>
                                <CardFooter>
                                    <Stack width={'100%'}>
                                        <Button alignContent={'center'} variant={'ghost'} color={'red.600'} _hover={{bgColor: 'red.600', color: '#ffffff'}} onClick={() => removeItem(prod.id)}>
                                            <FaTrashAlt />
                                            <Text px={'1vw'}>
                                                Eliminar producto
                                            </Text>
                                        </Button>
                                    </Stack>
                                </CardFooter>
                            </Stack>
                        </Card>
                    ))}
                </Flex>
                <Box>
                    <Card>
                        <CardBody>
                            <Stack align={'center'}>
                                <Heading textAlign={'center'}>Resumen de Compra</Heading>
                                <Divider orientation='horizontal' />
                                <Text mx={'4vw'} my={'2vh'}>
                                    Aquí se mostrarán los importes de los productos agregados al carrito
                                </Text>
                                <Heading>
                                    Total: {costTransform(totalPrice())}
                                </Heading>
                                <Heading size={'lg'}>
                                    Productos: {getQuantity()}
                                </Heading>
                                <ChakraLink w={'100%'} as={Link} to={'/Checkout'}>
                                    <Button w={'100%'} size={'lg'} variant={'solid'} color={'white'} bgColor={'orange.800'} _hover={{bgColor: 'orange.600'}}>
                                        Finalizar Compra
                                    </Button>
                                </ChakraLink>
                                <Button w={'100%'} size={'lg'} variant={'solid'} color={'orange.600'} bgColor={'orange.100'} _hover={{bgColor: 'orange.200'}} onClick={() => clearCart()}>
                                    Vaciar el carrito
                                </Button>
                            </Stack>
                        </CardBody>
                    </Card>
                </Box>
            </Flex>
        )
    }
}

export default Cart
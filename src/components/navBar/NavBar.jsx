import React from 'react'
import { Link } from 'react-router-dom'
import {
    Flex,
    Button,
    Image,
    ListItem,
    UnorderedList,
    Spacer,
    Menu,
    Link as ChakraLink,
    MenuItem,
    MenuList,
    MenuButton
} from '@chakra-ui/react'
import InfiniteComputingLogo from '../../assets/ifLogo.png'
import { FaChevronDown } from "react-icons/fa";
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <Flex align='Center' justify='Center' paddingX='5rem'>
            <ChakraLink as={Link} to='/'>
            <Image
            aspectRatio={'inherit'}
            h={'6.25rem'}
            my={'1vh'}
            src={InfiniteComputingLogo}
            alt='Logo Infinite Computing'
            />  
            </ChakraLink>
            <Spacer />
            <Flex justify='space-between'>
                <UnorderedList colorScheme={'Orange'} fontSize='1.2rem' styleType='none' display='Flex' justifyContent='space-between' minWidth='28.125rem' >
                    <ListItem fontWeight={'semibold'} color={'#562B00'}>
                        <ChakraLink as={Link} to='/'>
                            <Button size={'lg'} borderRadius={'full'} color={'orange.700'} _hover={{bgColor: 'orange.200'}} variant={'ghost'}>Home</Button>
                        </ChakraLink>
                    </ListItem>
                    <ListItem fontWeight={'semibold'} color={'#562B00'}>
                        <ChakraLink as={Link} to='/'>
                            <Button size={'lg'} borderRadius={'full'} color={'orange.700'} _hover={{bgColor: 'orange.200'}} variant={'ghost'}>Nosotros</Button>
                        </ChakraLink>
                    </ListItem>
                    <Menu>  
                        <MenuButton as={Button} rightIcon={<FaChevronDown />} borderRadius={'full'} fontSize={'lg'}  color={'white'} bgColor={'orange.900'} _hover={{ bgColor: 'orange.700' }} _active={{ bgColor: 'orange.700' }}> 
                            Productos
                        </MenuButton>
                        <MenuList bgColor={'orange.50'}>
                            <ChakraLink as={Link} to='/'>
                                <MenuItem _hover={{fontWeight:'semibold', bgColor:'orange.100'}} fontWeight={'medium'} color={'#562B00'} bgColor={'orange.50'}>
                                    Todos
                                </MenuItem>
                            </ChakraLink>
                            <ChakraLink as={Link} to='/category/Mouse'>
                                <MenuItem _hover={{fontWeight:'semibold', bgColor:'orange.100'}} fontWeight={'medium'} color={'#562B00'} bgColor={'orange.50'}>
                                    Mouse
                                </MenuItem>
                            </ChakraLink>
                            <ChakraLink as={Link} to='/category/Teclados'>
                                <MenuItem _hover={{fontWeight:'semibold', bgColor:'orange.100'}} fontWeight={'medium'} color={'#562B00'} bgColor={'orange.50'}>
                                        Teclados
                                </MenuItem>
                            </ChakraLink>
                            <ChakraLink as={Link} to='/category/Mousepad'>
                                <MenuItem _hover={{fontWeight:'semibold', bgColor:'orange.100'}} fontWeight={'medium'} color={'#562B00'} bgColor={'orange.50'}>
                                    Mousepad
                                </MenuItem>
                            </ChakraLink>
                        </MenuList>
                    </Menu>
                </UnorderedList>
            </Flex>
            <Spacer />
            <CartWidget />
        </Flex>
    )
}

export default NavBar
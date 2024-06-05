import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import {
    Box,
    Flex,
    Button,
    Image,
    Heading,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Center,
    Spacer,
    Link as ChakraLink,
    Menu,
    MenuItem,
    MenuList,
    MenuButton
} from '@chakra-ui/react'
import { FaChevronDown } from "react-icons/fa";
import CartWidget from '../cartWidget/CartWidget'

const NavBar = () => {
    return (
        <Flex align='Center' justify='Center' paddingX='40px' bg='#fff6e3'>
        <ChakraLink as={ReactRouterLink} to='/'>
            <Image
            boxSize='120px'
            src='./ifLogo.png'
            alt='Logo Infinite Clothing'
            />  
        </ChakraLink>
        <Spacer />
        <Flex justify='space-between'>
            <UnorderedList fontSize='20px' styleType='none' display='Flex' justifyContent='space-between' minWidth='450px' color='black'>
                <ListItem><ChakraLink as={ReactRouterLink} to='#'>Home</ChakraLink></ListItem>
                <ListItem><ChakraLink as={ReactRouterLink} to='#'>Nosotros</ChakraLink></ListItem>
                <ListItem><ChakraLink as={ReactRouterLink} to='#'>Productos</ChakraLink></ListItem>
            </UnorderedList>
        </Flex>
        <Spacer />
        <Menu minWidth={700}>  
            <MenuButton as={Button} rightIcon={<FaChevronDown />}>
                Productos
            </MenuButton>
            <MenuList>
                <MenuItem><ChakraLink as={ReactRouterLink} to='/category/Remeras}'/>Remeras</MenuItem>
                <MenuItem><ChakraLink as={ReactRouterLink} to='/category/Pantalones}'/>Pantalones</MenuItem>
                <MenuItem><ChakraLink as={ReactRouterLink} to='/category/Gorros}'/>Gorros</MenuItem>
            </MenuList>
        </Menu>
        <Spacer />
        <CartWidget />
        </Flex>
    )
}

export default NavBar
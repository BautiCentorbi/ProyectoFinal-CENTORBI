import React from 'react'
import { Link } from 'react-router-dom'
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
        <Link to='/'>
            <Image
            boxSize='120px'
            src='./ifLogo.png'
            alt='Logo Infinite Clothing'
            />  
        </Link>
        <Spacer />
        <Flex justify='space-between'>
            <UnorderedList fontSize='20px' styleType='none' display='Flex' justifyContent='space-between' minWidth='450px' color='black'>
                <ListItem><Link to='#'>Home</Link></ListItem>
                <ListItem><Link to='#'>Nosotros</Link></ListItem>
                <Menu>  
                    <MenuButton as={Button} rightIcon={<FaChevronDown />}>
                        Productos
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <Link to='/'>Todos</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/category/Remeras'>Remeras</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/category/Pantalones'>Pantalones</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/category/Gorros'>Gorros</Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </UnorderedList>
        </Flex>
        <Spacer />
        <Spacer />
        <CartWidget />
        </Flex>
    )
}

export default NavBar
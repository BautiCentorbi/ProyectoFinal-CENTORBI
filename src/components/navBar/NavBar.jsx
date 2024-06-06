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
        <Flex align='Center' justify='Center' paddingX='80px' bg='#fff6e3'>
            <Link to='/'>
            <Image
            aspectRatio={'inherit'}
            h={'100px'}
            my={'1vh'}
            src='./ifLogo.png'
            alt='Logo Infinite Clothing'
            />  
            </Link>
            <Spacer />
            <Flex justify='space-between'>
                <UnorderedList fontSize='20px' styleType='none' display='Flex' justifyContent='space-between' minWidth='450px' colorScheme={'Orange'}>
                    <ListItem fontWeight={'semibold'} color={'#562B00'}>
                        <Link to='#'>
                            <Button size={'lg'} borderRadius={'full'} colorScheme='Orange' Color={'orange.700'} _hover={{bgColor: 'orange.200'}} variant={'ghost'}>Home</Button>
                        </Link>
                    </ListItem>
                    <ListItem fontWeight={'semibold'} color={'#562B00'}>
                        <Link to='#'>
                            <Button size={'lg'} borderRadius={'full'} colorScheme='Orange' Color={'orange.700'} _hover={{bgColor: 'orange.200'}} variant={'ghost'}>Nosotros</Button>
                        </Link>
                    </ListItem>
                    <Menu colorScheme={'Orange'}>  
                        <MenuButton as={Button} rightIcon={<FaChevronDown />} borderRadius={'full'} fontSize={'lg'}  color={'white'} bgColor={'orange.900'} _hover={{ bgColor: 'orange.700' }} _active={{ bgColor: 'orange.700' }}> 
                            Productos
                        </MenuButton>
                        <MenuList colorScheme={'Orange'} bgColor={'orange.50'}>
                            <MenuItem _hover={{fontWeight:'semibold', bgColor:'orange.100'}} fontWeight={'medium'} color={'#562B00'} bgColor={'orange.50'}>
                                <Link to='/'>Todos</Link>
                            </MenuItem>
                            <MenuItem _hover={{fontWeight:'semibold', bgColor:'orange.100'}} fontWeight={'medium'} color={'#562B00'} bgColor={'orange.50'}>
                                <Link to='/category/Mouse'>Mouse</Link>
                            </MenuItem>
                            <MenuItem _hover={{fontWeight:'semibold', bgColor:'orange.100'}} fontWeight={'medium'} color={'#562B00'} bgColor={'orange.50'}>
                                <Link to='/category/Teclados'>Teclados</Link>
                            </MenuItem>
                            <MenuItem _hover={{fontWeight:'semibold', bgColor:'orange.100'}} fontWeight={'medium'} color={'#562B00'} bgColor={'orange.50'}>
                                <Link to='/category/Mousepad'>Mousepad</Link>
                            </MenuItem>
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
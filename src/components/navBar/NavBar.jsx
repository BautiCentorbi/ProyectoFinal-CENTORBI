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
    Link as ChakraLink,
    MenuItem,
    MenuList,
    MenuButton
} from '@chakra-ui/react'
import { FaChevronDown } from "react-icons/fa";
import CartWidget from '../cartWidget/CartWidget'

const NavBar = () => {
    return (
        <Flex align='Center' justify='Center' paddingX='80px' bg='#fff6e3'>
            <ChakraLink as={Link} to='/'>
            <Image
            aspectRatio={'inherit'}
            h={'100px'}
            my={'1vh'}
            src='./ifLogo.png'
            alt='Logo Infinite Clothing'
            />  
            </ChakraLink>
            <Spacer />
            <Flex justify='space-between' colorScheme={'Orange'}>
                <UnorderedList fontSize='20px' styleType='none' display='Flex' justifyContent='space-between' minWidth='450px' >
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
                            <MenuItem _hover={{fontWeight:'semibold', bgColor:'orange.100'}} fontWeight={'medium'} color={'#562B00'} bgColor={'orange.50'}>
                                <ChakraLink as={Link} to='/'>Todos</ChakraLink>
                            </MenuItem>
                            <MenuItem _hover={{fontWeight:'semibold', bgColor:'orange.100'}} fontWeight={'medium'} color={'#562B00'} bgColor={'orange.50'}>
                                <ChakraLink as={Link} to='/category/Mouse'>Mouse</ChakraLink>
                            </MenuItem>
                            <MenuItem _hover={{fontWeight:'semibold', bgColor:'orange.100'}} fontWeight={'medium'} color={'#562B00'} bgColor={'orange.50'}>
                                <ChakraLink as={Link} to='/category/Teclados'>Teclados</ChakraLink>
                            </MenuItem>
                            <MenuItem _hover={{fontWeight:'semibold', bgColor:'orange.100'}} fontWeight={'medium'} color={'#562B00'} bgColor={'orange.50'}>
                                <ChakraLink as={Link} to='/category/Mousepad'>Mousepad</ChakraLink>
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
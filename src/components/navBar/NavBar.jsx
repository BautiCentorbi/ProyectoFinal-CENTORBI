import React from 'react'
import {
    Box,
    Image,
    Heading,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'
import CartWidget from '../cartWidget/CartWidget'

const NavBar = () => {
    return (
        <Box display='Flex'>
        <Image
            boxSize='56px'
            src='https://drive.google.com/file/d/1Cr7TeGIwe8WgxxIXf1QzM2pd8qk_jCdY/view?usp=sharing'
            alt='Logo Infinite Clothing'
        />
        <Heading as='h4' size='md'>Nombre Empresa</Heading>
            <UnorderedList styleType='none' display='Flex'>
                <ListItem>Home</ListItem>
                <ListItem>Nosotros</ListItem>
                <ListItem>Productos</ListItem>
            </UnorderedList>
        <CartWidget />
        </Box>
    )
}

export default NavBar
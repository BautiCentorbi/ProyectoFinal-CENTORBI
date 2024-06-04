import React from 'react'
import {
    Box,
    Flex,
    Image,
    Heading,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Center,
    Spacer,
    Link,
} from '@chakra-ui/react'
import CartWidget from '../cartWidget/CartWidget'

const NavBar = () => {
    return (
        <Flex align='Center' justify='Center' paddingX='40px' bg='#fff6e3'>
        <Link>
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
                <ListItem><Link to='#'>Productos</Link></ListItem>
            </UnorderedList>
        </Flex>
        <Spacer />
        <CartWidget />
        </Flex>
    )
}

export default NavBar
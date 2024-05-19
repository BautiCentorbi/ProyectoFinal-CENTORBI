import {
    Box,
    Button,
    Flex,
    Heading
} from '@chakra-ui/react'
import React from 'react'
import CardMain from '../card/CardMain'


const ItemListContainer = (props) => {
    return (
        <Box margin='20px'>
            <Heading as='h2' size='lg'>{props.texto}</Heading>
            <Flex>
            <CardMain />
            </Flex>
        </Box>
    )
}

export default ItemListContainer
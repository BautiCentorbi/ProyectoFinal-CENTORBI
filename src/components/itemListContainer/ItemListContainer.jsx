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
        <Flex>
            <Heading>{props.texto}</Heading>
            <CardMain />
        </Flex>
    )
}

export default ItemListContainer
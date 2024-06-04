import {
    Box,
    Button,
    Flex,
    Heading
} from '@chakra-ui/react'
import { getProducts } from '../../data/asyncMock'
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({tittle}) => {
    const [ products, setProducts ] = useState([])
    
    useEffect(() => {
        getProducts()
        .then((res) => setProducts(res))
        .catch((err) => console.log(err))
    }, [])

    return (
        <Box margin='20px'>
            <Heading as='h2' size='lg'>{tittle}</Heading>
            <Flex>
                <ItemList products={products}/>
            </Flex>
        </Box>
    )
}

export default ItemListContainer
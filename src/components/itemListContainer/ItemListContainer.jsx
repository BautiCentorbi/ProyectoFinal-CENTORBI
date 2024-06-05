import {
    Box,
    Button,
    Flex,
    Heading
} from '@chakra-ui/react'
import { getProducts, getProductsFiltered } from '../../data/asyncMock'
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({tittle}) => {
    const [ products, setProducts ] = useState([])
    const { categoryId } = useParams()
    
    useEffect(() => {
        const dataProductos = categoryId ? getProductsFiltered(categoryId) : getProducts()
        
        dataProductos
            .then((data) => setProducts(data))
            .catch((err) => console.log(err))
    },[])

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
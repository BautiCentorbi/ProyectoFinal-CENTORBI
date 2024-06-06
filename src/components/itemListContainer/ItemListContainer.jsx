import {
    Box,
    Button,
    Flex,
    Heading
} from '@chakra-ui/react'
import { getProducts, getProductsFiltered } from '../../data/asyncMock'
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { SquareLoader } from 'react-spinners'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({tittle}) => {
    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)
    
    const { categoryId } = useParams()
    
    console.log(categoryId)

    useEffect(() => {
        setLoading(true)
        const dataProductos = categoryId ? getProductsFiltered(categoryId) : getProducts()

        dataProductos
        .then((data) => setProducts(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    },[categoryId])

    return (
        <Flex direction={'column'} justify={'center'} align={'center'} margin='20px'>
            <Heading as='h2' size='lg'>{tittle}</Heading>
            {
                loading ?
                <Flex align={'center'} justify={'center'} h={'60vh'}>
                    <SquareLoader color="#36d7b7"/>
                </Flex>
                :
                <ItemList products={products}/>
            }
        </Flex>
    )
}

export default ItemListContainer
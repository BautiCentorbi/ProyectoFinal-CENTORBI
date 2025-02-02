import {
    Box,
    Button,
    Flex,
    Heading
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { SquareLoader } from 'react-spinners'
import { useParams } from 'react-router-dom'
import { db } from '../../config/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = ({tittle}) => {
    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)
    
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        
        const getData = async () => {
            const coleccion = collection(db, 'productos')
            
            const queryRef = !categoryId ?
            coleccion 
            : 
            query(coleccion, where('categoria', '==', categoryId))
        
            const response = await getDocs(queryRef)

            const productos = response.docs.map((doc) => {
                const newItem = {
                    ...doc.data(),
                    id: doc.id
                }
                return newItem
            })
            setProducts(productos)
            setLoading(false)
        }
        getData()
    },[categoryId])
    
    return (
        <Flex direction={'column'} justify={'center'} align={'center'} margin={'1.25rem'}>
            <Heading as='h2' size='xl' fontWeight={'800'} color={'orange.800'} >{tittle}</Heading>
            {
                loading ?
                <Flex align={'center'} justify={'center'} h={'60vh'}>
                    <SquareLoader color="#964B00"/>
                </Flex>
                :
                <ItemList products={products}/>
            }
        </Flex>
    )
}

export default ItemListContainer
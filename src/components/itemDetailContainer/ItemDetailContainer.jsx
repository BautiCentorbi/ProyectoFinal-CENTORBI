import React, { useContext, useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { SquareLoader } from 'react-spinners'
import ItemDetail from '../itemDetail/ItemDetail'
import { Flex } from '@chakra-ui/react'
import { db } from '../../config/firebase'
import { doc, getDoc } from 'firebase/firestore'
import Context from '../../Context/CartContext'

const ItemDetailContainer = () => {
  const [ producto, setProducto ] = useState({})
  const [ loading, setLoading ] = useState(true)
  const { productId } = useParams()
  const { currentQuantity } = useContext(Context)  
    
    useEffect(() => {
        const getData = async () => {
            const queryRef = doc(db,'productos', productId)

            const response = await getDoc(queryRef)

            const newItem = {
                ...response.data(),
                id: response.id
            }
            setProducto(newItem)
            setLoading(false)
        }
        getData()
    }, [])

    return (
    <>
        {
            loading ?
            <Flex align={'center'} justify={'center'} h={'60vh'}>
                <SquareLoader color="#964B00"/>
            </Flex>
            :
            <ItemDetail {...producto} currentQuantity={currentQuantity(productId)}/>
        }
    </>
    )
}

export default ItemDetailContainer
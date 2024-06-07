import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { SquareLoader } from 'react-spinners'
import { getProductsDetail } from '../../data/asyncMock'

const ItemDetailContainer = () => {
  const [ producto, setProducto ] = useState({})
  const [ loading, setLoading ] = useState(true)
  const { productId } = useParams()
  
    useEffect(() => {
        getProductsDetail(productId)
        .then((data) => setProducto(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }, [])
    console.log(producto)

    return (
    <>
        {
            loading ?
            <Flex align={'center'} justify={'center'} h={'60vh'}>
                <SquareLoader color="#964B00"/>
            </Flex>
            :
            <ItemDetail producto={producto}/>
        }
    </>
  )
}

export default ItemDetailContainer
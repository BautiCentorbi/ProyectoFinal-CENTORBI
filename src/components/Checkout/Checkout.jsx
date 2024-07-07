import { Box, Input, FormControl, FormLabel, FormErrorMessage, FormHelperText, Flex, Heading, Button, Card, CardBody } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import Context from '../../Context/CartContext'
import Swal from 'sweetalert2'
import { Timestamp, doc,   addDoc, collection, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const [ user, setUser ] = useState({
    name: '',
    email: '',
    repeatedEmail: '',
    phoneNumber: ''
  })
  const [ error, setError ] = useState({})
  const [ loading, setLoading ] = useState(false)

  const { cart, setCart, totalPrice, clearCart } = useContext(Context)

  const navigate = useNavigate()

  const updateUser = (event) => {
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value
    }))
  }

  const validateForm = () => {
    // Validación de Nombre
    const errors = {}
    if(!user.name) {
      errors.name = 'Tienes que agregar un nombre'
    } else if(user.name.length < 4) {
      errors.name = 'El nombre debe tener al menos 4 caracteres'
    }
    
    // Validación Email
    if(!user.email) {
      errors.email = 'Tienes que agregar un email'
    } else if (!/\S+@\S+\.\S+/.test(user.email)){
      errors.email = 'El email no es válido'
    }
    if(!user.repeatedEmail) {
      errors.repeatedEmail = 'Tienes que agregar un email'
    } else if (!/\S+@\S+\.\S+/.test(user.repeatedEmail)){
      errors.repeatedEmail = 'El email no es válido'
    } else if (user.repeatedEmail !== user.email){
      errors.repeatedEmail = 'Los emails no coinciden'
    }

    // Validación de Número de Teléfono
    if (!user.phoneNumber){
      errors.phoneNumber = 'Tienes que ingresar un número de teléfono'
    } else if (user.phoneNumber < 10){
      errors.phoneNumber = 'El número de teléfono debe contener al menos 10 caracteres'
    }


    setError(errors)
    return Object.keys(errors).length === 0
  }
  
  const getOrder = async () => {
    if (!validateForm()){
      return
    }
    
    if (cart.length === 0){
      Swal.fire({
        title: "Carrito Vacío",
        text: 'Debes agregar algo al carrito antes de generar una orden',
        icon: "error",
        confirmButtonColor: "#7B341E",
        confirmButtonText: "Aceptar",
      }).then(() => {
        navigate('/')
      });
      return
    }

    const coleccion = collection(db, 'orders')

    try {
      for (const item of cart) {
        const docRef = doc(db, 'productos', item.id)
        const productDoc = await getDoc(docRef)

        const currentStock =  productDoc.data().stock

        if (currentStock >= item.quantity){
          await updateDoc(docRef, {
            stock: currentStock - item.quantity
          })
        }
      }
      
      const order = {
          buyer: user,
          cart: cart,
          total: totalPrice(),
          fecha: Timestamp.now()
      }
      const orderRef = await addDoc(coleccion, order)
        Swal.fire({
          title: "¡Gracias por confiar en nosotros, Que lo disfrutes!",
          text: `El número de tu orden es: ${orderRef.id}`,
          icon: "success",
          confirmButtonColor: "#7B341E",
          confirmButtonText: "Volver al inicio",
        }).then(() => {
        clearCart()
        navigate('/')
      });

    } catch (err){
    }
  }

  return (
    <Flex w={'100vw'} align={'center'} justify={'center'}>
    <Card>
      <CardBody p={'3rem'}>
        <Flex direction={'column'} h={'100%'} w={'30rem'}>
          <Heading>Datos de Facturación</Heading>
          <FormControl isRequired isInvalid = {error}>
            <FormLabel>Ingresa tu Nombre</FormLabel>
            <Input type='text' name='name'
            placeholder='Pedro Ortega' onChange={updateUser}/>
            <FormErrorMessage>{error.name}</FormErrorMessage>
            <FormLabel>Ingresa tu email</FormLabel>
            <Input type='email' name='email'
            placeholder='pedroortega@correo.com' onChange={updateUser}/>
            <FormErrorMessage>{error.email}</FormErrorMessage>
            <FormLabel>Repite tu email</FormLabel>
            <Input type='email' name='repeatedEmail'
            placeholder='pedroortega@correo.com' onChange={updateUser}/>
            <FormErrorMessage>{error.repeatedEmail}</FormErrorMessage>
            <FormLabel>Ingresa tu número de teléfono</FormLabel>
            <Input type='number' name='phoneNumber' placeholder='12345678910' onChange={updateUser} />
            <FormErrorMessage>{error.phoneNumber}</FormErrorMessage>
          </FormControl>
          <Button w={'100%'} size={'lg'} variant={'solid'} color={'white'} bgColor={'orange.800'} _hover={{bgColor: 'orange.600'}} my={'1rem'} onClick={getOrder}>Finalizar Compra</Button>
        </Flex>
      </CardBody>
    </Card>
    </Flex>
  )
}

export default Checkout
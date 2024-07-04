import { Box, Input, FormControl, FormLabel, FormErrorMessage, FormHelperText, Flex, Heading, Button } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import Context from '../../Context/CartContext'
import Swal from 'sweetalert2'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
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

  const { cart, totalPrice, clearCart } = useContext(Context)

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
    
    const coleccion = collection(db, 'orders')

    try {
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
        confirmButtonText: "Volver al inicio",
      }).then(() => {
        clearCart()
        navigate('/')
      });

    } catch (err){
      console.log(err)
    }
  }

  return (
    <Flex mx={'8vw'} w={'30rem'}>
      <Flex direction={'column'}>
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
        <Button onClick={getOrder}>Finalizar Compra</Button>
      </Flex>
      
    </Flex>
  )
}

export default Checkout
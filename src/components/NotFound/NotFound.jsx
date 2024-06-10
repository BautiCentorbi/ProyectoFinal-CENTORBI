import React from 'react'
import NotFoundImg from '../../assets/404NotFound.png'
import { Link } from 'react-router-dom'
import { Flex,Heading,Stack,Image, Link as ChakraLink } from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Flex w={'100%'} h={'87vh'} align={'center'} justify={'center'} bgColor={'#fff6e3'}>
        <Stack>
            <Image src={NotFoundImg} w={'70vh'}/>
            <Heading color={'gray.500'} size={'md'} textAlign={'center'}>
                ¡Oops!
                Parece que algo salió mal
            </Heading>
            <Heading color={'orange.800'} size={'lg'} textAlign={'center'}>
                <ChakraLink as={Link} to={'/'}>VOLVER AL INICIO</ChakraLink>
            </Heading>
        </Stack>
    </Flex>
  )
}

export default NotFound
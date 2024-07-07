import React, { createContext, useState } from 'react'

const Context = createContext()

export const CartContextProvider = ({ children }) => {
  const [ cart, setCart ] = useState([])

    const addItem = (productToAdd, quantity) => {
        const newItem = {
            ...productToAdd,
            quantity
        }
        if (isInCart(newItem.id)) {
            const updatedCart = cart.map((prod) => {
                if (prod.id === newItem.id) {
                    return {...prod, quantity: prod.quantity + newItem.quantity}
                }
                return prod
            })
            setCart(updatedCart)
        } else {
            setCart([...cart, newItem])
        }
    }
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }
    const removeItem = (id) => {
        const updateCart = cart.filter((prod) => prod.id !== id)
        setCart([...updateCart])
    }
    const clearCart = () => {
        setCart([])
    }
    const totalPrice = () => {
        return cart.reduce((acc,el) => acc + el.precio * el.quantity, 0)
    }
    const getQuantity = () => {
        return cart.reduce((acc,el) => acc + el.quantity, 0)
    }
    const decrementarItem = (id) => {
        const updatedCart = cart.map((prod) => {
            if (prod.id === id){
                const newQuantity = Math.max(prod.quantity - 1, 1)
                return {
                    ...prod, quantity: newQuantity
                }
            }
            return prod
        })
        setCart(updatedCart)
    }
    const incrementarItem = (id, stock) => {
        const updatedCart = cart.map((prod) => {
            if (prod.id === id){
                const newQuantity = Math.min(prod.quantity + 1, stock)
                return {
                    ...prod, quantity: newQuantity
                }
            }
            return prod
        })
        setCart(updatedCart)
    }

    const currentQuantity = (id) => {
        const prod = cart.find((item) => item.id === id)
        return prod ? prod.quantity : 0
    }


    return (
        <Context.Provider
            value = {{
                cart,
                setCart,
                addItem,
                removeItem,
                clearCart,
                totalPrice,
                getQuantity,
                decrementarItem,
                incrementarItem,
                currentQuantity
            }}
        >
            {children}
        </Context.Provider>
  )
}

export default Context
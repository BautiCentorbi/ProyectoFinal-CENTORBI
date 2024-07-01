import { initializeApp } from "firebase/app"
import { addDoc, collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB5WMBlQdtuj-W9yJiROezMRiHiz68MWCY",
    authDomain: "infinite-computing.firebaseapp.com",
    projectId: "infinite-computing",
    storageBucket: "infinite-computing.appspot.com",
    messagingSenderId: "237227780931",
    appId: "1:237227780931:web:9ea9c982692f8421a21df6"
}

console.log('Conectando a DB')

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export const costTransform = (precio) => {
    const precioTransformado = precio.toLocaleString('es-ES', {style: 'currency', currency: 'ARS'})
    return (
        precioTransformado
    )
}

// productos.forEach((prod) => {
//     addDoc(collection(db, 'productos'), prod)
//     .then((el) => console.log(`Se agregó el producto id: ${el.id}`))
//     .catch((err) => console.log(err))
// })
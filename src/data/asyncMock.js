import Waizowl from '../assets/Ms Waizowl Cloud.png'
import AttackShark from '../assets/Ms AttacShark x3.png'
import Akko from '../assets/Kb Akko HE Year of The Dragon.png'
import Wooting from '../assets/Kb Wooting 60HE.png'
import Drunkdeer from '../assets/Kb Drunkdeer A75.png'
import Skypad from '../assets/Mp Skypad V2.png'

export const productos = [
    {
        id: 1,
        nombre: 'Mouse Waizowl Cloud Wireless',
        descripcion: 'Mouse Waizowl Cloud, inalámbrico, polling rate de 4000MHz. 1ms de actuación.',
        lgDescripcion: 'El mouse inalámbrico para juegos Waizowl Cloud es perfecto para quienes buscan un mouse de alta calidad con muchas funciones. El ajuste del Cloud está diseñado para brindar comodidad incluso durante largas sesiones de juego. Este mouse ofrece conectividad vía cable, 2.4G y Bluetooth, perfecto para quienes varían el mouse entre diferentes dispositivos y no quieren mover el dongle/cable. El Cloud Wireless Gaming Mouse ofrece el sensor PAW3395, que es el de mejor rendimiento del mercado. Esto se adapta a los usuarios que buscan un ratón con precisión. Experimente una frecuencia de sondeo de 4000 Hz que garantiza la velocidad necesaria para juegos competitivos de alto nivel.',
        precio: '$94650',
        categoria: 'Mouse',
        stock: 24,
        img: Waizowl,
    },
    {
        id: 2,
        nombre: 'Mouse Attack Shark x3',
        descripcion: 'Mouse Attack Shark x3, con cable, polling rate de 2000MHz. 2ms de actuación.',
        lgDescripcion: '',
        precio: '$74000',
        categoria: 'Mouse',
        stock: 12,
        img: AttackShark,
    },
    {
        id: 3,
        nombre: 'Teclado Wooting 60HE',
        descripcion: 'Teclado mecánico Wooting 60HE, switches gateron. Incorporación de rapid trigger.',
        lgDescripcion: '',
        precio: '$135000',
        categoria: 'Teclados',
        stock: 3,
        img: Wooting,
    },
    {
        id: 4,
        nombre: 'Teclado Drunkdeer A75',
        descripcion: 'Teclado mecánico Drunkdeer A75, switches hall-effect. Incorporación de rapid trigger.',
        lgDescripcion: '',
        precio: '$110000',
        categoria: 'Teclados',
        stock: 5,
        img: Drunkdeer,
    },
    {
        id: 5,
        nombre: 'Teclado AKKO HE Year of The Dragon',
        descripcion: 'Teclado mecánico AKKO, switches gateron. Incorporación de rapid trigger.',
        lgDescripcion: '',
        precio: '$140000',
        categoria: 'Teclados',
        stock: 12,
        img: Akko,
    },
    {
        id: 6,
        nombre: 'Skypad V2',
        descripcion: 'Mousepad de vidrio, provee un deslizamiento sin igual y provee una durabilidad increíble.',
        lgDescripcion: '',
        precio: '$25000',
        categoria: 'Mousepad',
        stock: 10,
        img: Skypad,
    }
]
export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(productos)
        }, 2000)
    })
}

export const getProductsFiltered = (category) => {
    return new Promise ((res) => {
        const productosFiltrados = productos.filter((producto) => producto.categoria === category)
        setTimeout(() => {
            res(productosFiltrados)
        }, 2000)
    })
}

export const getProductsDetail = (id) => {
    return new Promise((res) => {
        const productoFiltrado = productos.find((prod) => prod.id === parseInt(id))
        setTimeout (() => {
            res(productoFiltrado)
        }, 2000)  
    })
}
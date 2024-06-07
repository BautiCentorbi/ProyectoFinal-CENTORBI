export const productos = [
    {
        id: 1,
        nombre: 'Mouse Waizowl Cloud Wireless',
        descripcion: 'Mouse Waizowl Cloud, inalámbrico, polling rate de 4000MHz. 1ms de actuación',
        precio: '$94650',
        categoria: 'Mouse',
        stock: 24,
        img: 'Ms Waizowl Cloud.png',
    },
    {
        id: 2,
        nombre: 'Mouse Attack Shark x3',
        descripcion: 'Mouse Attack Shark x3, con cable, polling rate de 2000MHz. 2ms de actuación',
        precio: '$74000',
        categoria: 'Mouse',
        stock: 12,
        img: 'Ms AttacShark x3.png',
    },
    {
        id: 3,
        nombre: 'Teclado Wooting 60HE',
        descripcion: 'Teclado mecánico Wooting 60HE, switches gateron. Incorporación de rapid trigger.',
        precio: '$135000',
        categoria: 'Teclados',
        stock: 3,
        img: 'Kb Wooting 60HE.png',
    },
    {
        id: 4,
        nombre: 'Teclado Drunkdeer A75',
        descripcion: 'Teclado mecánico Drunkdeer A75, switches hall-effect. Incorporación de rapid trigger.',
        precio: '$110000',
        categoria: 'Teclados',
        stock: 5,
        img: 'Kb Drunkdeer A75.png',
    },
    {
        id: 5,
        nombre: 'Teclado AKKO HE Year of The Dragon',
        descripcion: 'Teclado mecánico AKKO, switches gateron. Incorporación de rapid trigger.',
        precio: '$140000',
        categoria: 'Teclados',
        stock: 12,
        img: 'Kb Akko HE Year of The Dragon.png',
    },
    {
        id: 6,
        nombre: 'Skypad V2',
        descripcion: 'Mousepad de vidrio, provee un deslizamiento sin igual y provee una durabilidad increíble',
        precio: '$25000',
        categoria: 'Mousepad',
        stock: 10,
        img: 'Mp Skypad V2.png',
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
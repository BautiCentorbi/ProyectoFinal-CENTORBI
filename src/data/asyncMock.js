export const productos = [
    {
        id: 1,
        nombre: 'OS Shirt - Sunflower',
        descripcion: 'Remera Confeccionada en 100% algodón Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam vero voluptas.',
        precio: '$25000',
        categoria: 'Remeras',
        stock: 12,
        img: 'SunflowerShirt.png',
    },
    {
        id: 2,
        nombre: 'OS Shirt - Velocity',
        descripcion: 'Remera Confeccionada en 100% algodón Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam vero voluptas.',
        precio: '$25000',
        categoria: 'Remeras',
        stock: 12,
        img: 'SunflowerShirt.png',
    },
    {
        id: 3,
        nombre: 'OS Trouser - Neutro',
        descripcion: 'Remera Confeccionada en 100% algodón Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam vero voluptas.',
        precio: '$25000',
        categoria: 'Pantalones',
        stock: 12,
        img: 'SunflowerShirt.png',
    },
    {
        id: 4,
        nombre: 'OS Trouser - Cargo',
        descripcion: 'Remera Confeccionada en 100% algodón Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam vero voluptas.',
        precio: '$25000',
        categoria: 'Pantalones',
        stock: 12,
        img: 'SunflowerShirt.png',
    },
    {
        id: 5,
        nombre: 'Beanie Hat',
        descripcion: 'Remera Confeccionada en 100% algodón Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam vero voluptas.',
        precio: '$25000',
        categoria: 'Gorros',
        stock: 12,
        img: 'SunflowerShirt.png',
    },
]
export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(productos)
        }, 2000)
    })
}
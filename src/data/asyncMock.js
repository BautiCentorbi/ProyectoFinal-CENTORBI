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
        precio: '$94.650',
        categoria: 'Mouse',
        stock: 24,
        img: Waizowl,
    },
    {
        id: 2,
        nombre: 'Mouse Attack Shark x3',
        descripcion: 'Mouse Attack Shark x3, con cable, polling rate de 2000MHz. 2ms de actuación.',
        lgDescripcion: 'ATTACK SHARK X3 Ratón inalámbrico ligero juegos con modo triple a 26 K DPI, sensor óptico PAW3395, interruptor Kailh GM8.0, 5 botones programables. Sensor insignia Pixart PAW3395?El mouse inalámbrico para juegos ATTACK SHARK X3 adopta un sensor óptico insignia pixart 3395, proporciona velocidad de seguimiento de 650 IPS ajustable en 6 niveles, velocidad de respuesta de 1000 Hz, límite de aceleración de 50 G, comprometido a capturar el más mínimo movimiento, la respuesta más rápida. y el posicionamiento más preciso, diseñado para los entusiastas de los juegos.',
        precio: '$74.000',
        categoria: 'Mouse',
        stock: 12,
        img: AttackShark,
    },
    {
        id: 3,
        nombre: 'Teclado Wooting 60HE',
        descripcion: 'Teclado mecánico Wooting 60HE, switches hall-effect. Incorporación de rapid trigger.',
        lgDescripcion: "El Wooting 60HE es un teclado mecánico para juegos con cable con interruptores analógicos Gateron Lekker. Estos interruptores utilizan sensores magnéticos de efecto Hall para detectar hasta qué punto se han presionado, y puede ajustar varias configuraciones utilizando el software de este teclado para cambiar el funcionamiento de estos interruptores. Puede personalizar la distancia previa al recorrido de teclas individuales, programar hasta cuatro entradas en la misma tecla, establecer puntos de reinicio personalizados o incluso alternar un modo analógico que mide entradas graduales como un joystick controlador.",
        precio: '$135.000',
        categoria: 'Teclados',
        stock: 3,
        img: Wooting,
    },
    {
        id: 4,
        nombre: 'Teclado Drunkdeer A75',
        descripcion: 'Teclado mecánico Drunkdeer A75, switches hall-effect. Incorporación de rapid trigger.',
        lgDescripcion: 'DrunkDeer A75, teclado mecánico TKL, interruptor magnético hiperrápido, USB con cable RGB compacto 82 teclas con perilla, anti-ghosting, resistente a derrames blanco. Interruptor magnético hall-effect.Nuestra primera respuesta de interruptor no mecánico. No hay ningún hardware sensible como la distancia de actuación de metal. Con un rango de actuación de 0,4 a 3,6 mm, los interruptores magnéticos se pueden ajustar para satisfacer sus necesidades ',
        precio: '$110.000',
        categoria: 'Teclados',
        stock: 5,
        img: Drunkdeer,
    },
    {
        id: 5,
        nombre: 'Teclado AKKO HE Year of The Dragon',
        descripcion: 'Teclado mecánico AKKO, switches gateron. Incorporación de rapid trigger.',
        lgDescripcion: 'El teclado mecánico AKKO MOD007 V3 Year Of The Dragon provee de experiencias de escritura ultraprecisas ajustables en 0,1 mm. Aplicando el principio electromagnético, operado por detección del hall-effect. Proporciona una tasa de sondeo global de 8000 Hz, esta mejora aumenta los datos operativos enviados por segundo a 8 veces, lo que garantiza un control de latencia casi nulo. Rapid Trigger elimina cualquier retraso causado por el movimiento físico del interruptor. En lugar de depender de una actuación fija como los teclados mecánicos convencionales, activa y desactiva inmediatamente la tecla con un recorrido mínimo.',
        precio: '$140.000',
        categoria: 'Teclados',
        stock: 12,
        img: Akko,
    },
    {
        id: 6,
        nombre: 'Skypad V2',
        descripcion: 'Mousepad de vidrio, provee un deslizamiento sin igual y provee una durabilidad increíble.',
        lgDescripcion: 'El skypad v2 proporciona una superficie de vidrio incomparable diseñada para un seguimiento de alta precisión, combinada con una base de silicio 70A para un agarre total de la huella. El vidrio de silicato está micrograbado para una experiencia superficial única y tratado térmicamente a 620 °C para lograr la misma estructura y durabilidad del vidrio templado para automóviles, también conocido como vidrio de seguridad.',
        precio: '$25.000',
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
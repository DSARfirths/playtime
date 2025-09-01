// products.js

// Este arreglo contiene todos los productos de tu menú.
// Para agregar, eliminar o modificar un platillo, solo tienes que editar este archivo.
const menuItems = [
    // Almuerzos y Ceviches
    {
        category: 'almuerzos',
        name: 'Ceviche Play Time',
        description: 'A base de Congreo fresco del día, con camote glaseado, lechuga, mote, canchita, chifles y cebolla criolla.',
        price: '40.00'
    },
    {
        category: 'almuerzos',
        name: 'Chicharron de Pollo',
        description: 'Trozos de pechuga de pollo marinada, hilos de wantan y papas fritas en bastones.',
        price: '32.00'
    },
    {
        category: 'almuerzos',
        name: 'Lomo Saltado',
        description: 'Trozos de lomo fino, con mix de verduras salteadas, acompañado con arroz y sus ricas papas fritas.',
        price: '35.00'
    },
    {
        category: 'almuerzos',
        name: 'Fetuccini a la Huancaina con Lomo',
        description: 'Fettuccini en cremosa salsa huancaína acompañado de un jugoso lomo saltado al wok.',
        price: '39.00'
    },
    {
        category: 'almuerzos',
        name: 'Fetuccini al Pesto con Milanesa',
        description: 'Salsa al pesto con albahaca fresca y queso parmesano, con una crujiente milanesa de pollo.',
        price: '30.00'
    },

    // Piqueos
    {
        category: 'piqueos',
        name: 'Tequeños Legendarios (12 und)',
        description: 'Delicioso mix de tequeños de la casa.',
        price: '40.00'
    },
    {
        category: 'piqueos',
        name: 'Alitas - Escuadrón de 12',
        description: '12 unidades con papas fritas (hasta 3 sabores a elegir).',
        price: '65.00'
    },
    {
        category: 'piqueos',
        name: 'Fiesta de Alitas',
        description: 'Ronda de 24 piezas de alitas con papas fritas (hasta 7 sabores).',
        price: '120.00'
    },
    {
        category: 'piqueos',
        name: 'Piqueos Play Time',
        description: '6 alitas (2 sabores), 6 tequeños (2 sabores), 2 palitos de anticucho, 2 mini burguer y papas fritas.',
        price: '110.00'
    },

    // Hamburguesas
    {
        category: 'hamburguesas',
        name: 'Pac-Man Burger',
        description: 'Carne artesanal, queso cheddar, piña, lechuga, tomate y aros de cebolla en pan artesanal amarillo.',
        price: '25.00'
    },
    {
        category: 'hamburguesas',
        name: 'Burger Crash',
        description: 'Carne artesanal, chorizo argentino, queso Edam, chimichurri, lechuga y tomate en pan artesanal anaranjado.',
        price: '28.00'
    },
    {
        category: 'hamburguesas',
        name: 'Creeper Burger',
        description: 'Carne artesanal, tocino, huevo frito, plátano maduro frito, lechuga y tomate en pan artesanal verde cuadrado.',
        price: '30.00'
    },
    {
        category: 'hamburguesas',
        name: 'Sonic Burger',
        description: 'Pechuga de pollo, queso cheddar, tocino, lechuga y tomate en pan artesanal celeste.',
        price: '26.00'
    },
    {
        category: 'hamburguesas',
        name: '6 Esferas del Dragón',
        description: '6 Miniburguers de carne, pechuga de pollo, queso edam, queso cheddar y aros de cebolla.',
        price: '68.00'
    },

    // Bebidas
    {
        category: 'bebidas',
        name: 'Milkshake Shadow Oreo',
        description: 'Cremoso milkshake a base de galletas Oreo.',
        price: '22.00'
    },
    {
        category: 'bebidas',
        name: 'Jugo Cell (1 Litro)',
        description: 'Refrescante limonada clásica.',
        price: '29.00'
    },
    {
        category: 'bebidas',
        name: 'Bebida Frozen Freezer (400 ML)',
        description: 'Bebida frozen a base de arándanos.',
        price: '16.00'
    },
    {
        category: 'bebidas',
        name: 'Genki-Dama (Con Alcohol)',
        description: 'Pisco sour, sour mix, curacao azul.',
        price: '30.00'
    },
    {
        category: 'bebidas',
        name: 'Chilcano Scorpion',
        description: 'Clásico chilcano con un toque de maracuyá.',
        price: '25.00'
    },
    
    // Postres
    {
        category: 'postres',
        name: 'Waffle "Super Pacman"',
        description: '3 Frutas, 3 toppings, 1 bola de helado, miel o fudge.',
        price: '34.00'
    },
    {
        category: 'postres',
        name: 'Black Bomber',
        description: 'Torta de 3 leches de chocolate.',
        price: '16.00'
    },
    {
        category: 'postres',
        name: 'Red Bomber',
        description: 'Torta de chocolate.',
        price: '17.00'
    },
    {
        category: 'postres',
        name: 'Brownie con Helado',
        description: 'Brownie de chocolate caliente servido con una bola de helado de vainilla.',
        price: '15.00'
    }
];
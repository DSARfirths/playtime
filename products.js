// products.js

const menuItems = [
    // Almuerzos y Ceviches
    {
        category: 'almuerzos',
        name: 'Ceviche Play Time',
        description: 'A base de Congreo fresco del día, con camote glaseado y guarniciones criollas.',
        price: '40.00',
        featured: true,
        image: 'https://img.pixers.pics/fm/slider/images/pimage/417/41757827_056108_b78f673e5a59379895c37025816eb161.webp?s=c' // Ejemplo de ceviche
    },
    {
        category: 'almuerzos',
        name: 'Chicharron de Pollo',
        description: 'Trozos de pechuga de pollo marinada, hilos de wantan y papas fritas en bastones.',
        price: '32.00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-4s4-e4q2k7U8g8z8N_S81uT7Y-n-oB7-A&s' // Ejemplo de chicharron
    },
    {
        category: 'almuerzos',
        name: 'Lomo Saltado',
        description: 'Trozos de lomo fino, con mix de verduras salteadas, acompañado con arroz y papas fritas.',
        price: '35.00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ61rI1lB-p3-q8O-Q8B7M0Z-e2S-3hQ2rWxw&s' // Ejemplo de lomo
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
        description: '6 alitas, 6 tequeños, 2 anticuchos, 2 mini burguer y papas fritas.',
        price: '110.00'
    },

    // Hamburguesas
    {
        category: 'hamburguesas',
        name: 'Pac-Man Burger',
        description: 'Carne artesanal, queso cheddar, piña, lechuga, tomate y aros de cebolla.',
        price: '25.00',
        image: 'https://purepng.com/public/uploads/large/purepng.com-pac-manpac-manpacmanarcade-game-1701527962483d735j.png' // Pac-Man
    },
    {
        category: 'hamburguesas',
        name: 'Burger Crash',
        description: 'Carne artesanal, chorizo argentino, queso Edam y chimichurri.',
        price: '28.00',
        image: 'https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-crash-bandicoot-3d-png-image_10036665.png' // Crash
    },
    {
        category: 'hamburguesas',
        name: 'Creeper Burger',
        description: 'Carne artesanal, tocino, huevo frito y plátano maduro frito.',
        price: '30.00',
        featured: true,
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/07/Creeper_JE6_BE2.png/revision/latest?cb=20200810103606' // Creeper
    },
    {
        category: 'hamburguesas',
        name: 'Sonic Burger',
        description: 'Pechuga de pollo, queso cheddar, tocino, lechuga y tomate en pan celeste.',
        price: '26.00',
        image: 'https://static.wikia.nocookie.net/sonic/images/4/4b/Sonic_Promo_Artwork_from_Sonic_Frontiers.png/revision/latest?cb=20221102175902' // Sonic
    },
    {
        category: 'hamburguesas',
        name: '6 Esferas del Dragón',
        description: '6 Miniburguers de carne, pollo, queso edam y cheddar.',
        price: '68.00',
        featured: true,
        image: 'https://i.pinimg.com/originals/24/09/b3/2409b362ffc50df4e284a142e88a38c2.png' // Dragon Ball
    },

    // Bebidas
    {
        category: 'bebidas',
        name: 'Milkshake Shadow Oreo',
        description: 'Cremoso milkshake a base de galletas Oreo.',
        price: '22.00',
        image: 'https://i.pinimg.com/originals/c9/77/6c/c9776c59666270b77b21e8e2c0e8a715.png' // Shadow
    },
    {
        category: 'bebidas',
        name: 'Jugo Cell (1 Litro)',
        description: 'Refrescante limonada clásica.',
        price: '29.00',
        image: 'https://i.pinimg.com/originals/7e/c9/11/7ec9114b30e461b17a02b3c2c10b4f3b.png' // Cell
    },
    {
        category: 'bebidas',
        name: 'Bebida Frozen Freezer',
        description: 'Bebida frozen a base de arándanos.',
        price: '16.00',
        image: 'https://static.wikia.nocookie.net/dragonball/images/8/8c/Freeza_DBS_anime_render.png/revision/latest?cb=20220625121303' // Freezer
    },
    {
        category: 'bebidas',
        name: 'Genki-Dama (Con Alcohol)',
        description: 'Pisco sour, sour mix, curacao azul.',
        price: '30.00',
        featured: true,
        image: 'https://dbz-dokkanbattle.fandom.com/wiki/Super_Saiyan_God_Goku_%28Super_Saiyan_God_SS%29_-_Ultimate_Attack_of_Justice?file=Card_1012970_artwork.png' // Goku Genki Dama
    },
    {
        category: 'bebidas',
        name: 'Chilcano Scorpion',
        description: 'Clásico chilcano con un toque de maracuyá.',
        price: '25.00',
        image: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Scorpion_MK11.png' // Scorpion MK
    },
    
    // Postres
    {
        category: 'postres',
        name: 'Waffle "Super Pacman"',
        description: '3 Frutas, 3 toppings, 1 bola de helado, miel o fudge.',
        price: '34.00',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Pac-Man_original_arcade_cabinet_flyer.png' // Pac-Man retro
    },
    {
        category: 'postres',
        name: 'Black Bomber',
        description: 'Torta de 3 leches de chocolate.',
        price: '16.00',
        image: 'https://www.pngkit.com/png/full/159-1596708_bomberman-png.png' // Black Bomber
    },
    {
        category: 'postres',
        name: 'Red Bomber',
        description: 'Torta de chocolate.',
        price: '17.00',
        image: 'https://cdn140.picsart.com/264227367008212.png' // Red Bomber
    },
    {
        category: 'postres',
        name: 'Brownie con Helado',
        description: 'Brownie de chocolate caliente servido con una bola de helado de vainilla.',
        price: '15.00',
        image: 'https://png.pngtree.com/png-vector/20230206/ourmid/pngtree-chocolate-brownie-food-design-png-image_6580572.png' // Brownie
    }
];
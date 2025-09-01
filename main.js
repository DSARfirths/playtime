// main.js

document.addEventListener('DOMContentLoaded', () => {

    // Lista de URLs para imágenes decorativas de ejemplo (puedes reemplazarlas)
    const decoImages = [
        'https://cdn.pixabay.com/photo/2020/05/20/09/06/pixel-5197022_1280.png', // Pac-Man ghost
        'https://png.pngwing.com/pngs/194/914/png-transparent-super-mario-bros-pikmin-mushroom-super-mario-bros-video-game-fictional-character.png', // Mario mushroom
        'https://cdn.pixabay.com/photo/2021/04/08/17/28/sonic-the-hedgehog-6161405_1280.png', // Sonic
        'https://png.pngwing.com/pngs/307/780/png-transparent-pixel-art-video-game-pixel-game-games-pixel-art.png', // Pixel heart
        'https://png.pngwing.com/pngs/949/676/png-transparent-pixel-art-8-bit-color-pixel-food-food-fruit-clip-art.png', // Pixel fruit
        'https://png.pngwing.com/pngs/424/918/png-transparent-pixel-art-super-mario-bros-video-game-coin-pixel-game-text-super-mario-bros.png', // Pixel coin
        'https://png.pngwing.com/pngs/46/558/png-transparent-pixel-art-8-bit-color-pixel-bomb-bomb-fuse-weapon.png' // Pixel bomb
    ];

    // Función para renderizar (dibujar) los elementos del menú en la página
    function renderMenuItems() {
        menuItems.forEach(item => {
            const categorySection = document.getElementById(item.category);

            if (categorySection) {
                const menuItemDiv = document.createElement('div');
                // Clases de Tailwind para cada item del menú (diseño móvil primero)
                menuItemDiv.className = 'flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-b border-gray-700 last:border-b-0';

                // Clases de Tailwind para la información del platillo
                const itemInfo = `
                    <div class="flex-1 mb-2 sm:mb-0">
                        <h4 class="font-press-start text-primary-yellow text-lg sm:text-xl mb-1">${item.name}</h4>
                        <p class="text-gray-300 text-sm sm:text-base">${item.description}</p>
                    </div>
                `;
                
                // Clases de Tailwind para el precio
                const price = `<div class="font-press-start text-gray-100 text-lg sm:text-xl whitespace-nowrap">S/ ${item.price}</div>`;

                menuItemDiv.innerHTML = itemInfo + price;
                categorySection.appendChild(menuItemDiv);
            }
        });
    }

    // Función para insertar imágenes decorativas
    function insertDecorativeImages() {
        const decoImageIds = ['image-deco-1', 'image-deco-2', 'image-deco-3', 'image-deco-4', 'image-deco-5'];
        
        decoImageIds.forEach((id, index) => {
            const imageContainer = document.getElementById(id);
            if (imageContainer) {
                // Selecciona una imagen aleatoria o usa un patrón
                const imageUrl = decoImages[index % decoImages.length]; // Usa un índice para variedad
                
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = `Decoración ${id}`;
                // Clases de Tailwind para el estilo y tamaño de la imagen decorativa
                img.className = 'w-full h-full object-contain'; // Asegura que la imagen se ajuste

                imageContainer.appendChild(img);
            }
        });
    }

    // Ejecuta las funciones al cargar la página
    renderMenuItems();
    insertDecorativeImages();
});
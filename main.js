// main.js

document.addEventListener('DOMContentLoaded', () => {

    // --- ELEMENTOS DEL DOM ---
    const preloader = document.getElementById('preloader');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const featuredCarousel = document.getElementById('featured-carousel');
    const menuAccordion = document.getElementById('menu-accordion');
    const modal = document.getElementById('rules-modal');
    const openModalButtons = [document.getElementById('open-rules-modal-desktop'), document.getElementById('open-rules-modal-mobile')];
    const closeModalButton = document.getElementById('close-rules-modal');

    // --- DATOS ---
    const categories = [...new Set(menuItems.map(item => item.category))]; // Obtiene categorías únicas
    
    // URLs para imágenes decorativas genéricas (para las secciones del menú)
    const genericDecoImages = {
        'hero-left': 'https://png.pngwing.com/pngs/46/558/png-transparent-pixel-art-8-bit-color-pixel-bomb-bomb-fuse-weapon.png', // Bomba pixel
        'hero-right': 'https://png.pngwing.com/pngs/307/780/png-transparent-pixel-art-video-game-pixel-game-games-pixel-art.png', // Corazón pixel
        'almuerzos': 'https://png.pngwing.com/pngs/194/914/png-transparent-super-mario-bros-pikmin-mushroom-super-mario-bros-video-game-fictional-character.png', // Mario mushroom
        'piqueos': 'https://cdn.pixabay.com/photo/2020/05/20/09/06/pixel-5197022_1280.png', // Pac-Man ghost
        'hamburguesas': 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/07/Creeper_JE6_BE2.png/revision/latest?cb=20200810103606', // Creeper
        'bebidas': 'https://png.pngwing.com/pngs/949/676/png-transparent-pixel-art-8-bit-color-pixel-food-food-fruit-clip-art.png', // Fruta pixel
        'postres': 'https://purepng.com/public/uploads/large/purepng.com-pac-manpac-manpacmanarcade-game-1701527962483d735j.png' // Pac-Man
    };

    // --- RENDERIZADO ---

    // Renderizar carrusel de items destacados
    function renderFeaturedItems() {
        const featuredItems = menuItems.filter(item => item.featured);
        featuredItems.forEach(item => {
            const card = document.createElement('div');
            card.className = "flex-shrink-0 w-64 bg-gray-800 rounded-lg p-4 snap-center shadow-lg transform hover:scale-105 transition-transform duration-300 relative overflow-hidden";
            
            let itemImageHtml = '';
            if (item.image) {
                itemImageHtml = `<img src="${item.image}" alt="${item.name}" class="w-full h-24 object-contain mb-3 filter grayscale hover:grayscale-0 transition-all duration-300">`;
            } else {
                itemImageHtml = `<div class="w-full h-24 bg-gray-700 flex items-center justify-center text-gray-500 mb-3 rounded-md">No Image</div>`;
            }

            card.innerHTML = `
                ${itemImageHtml}
                <h3 class="font-press-start text-lg text-primary-yellow">${item.name}</h3>
                <p class="text-sm text-gray-300 mt-2 h-16 overflow-hidden">${item.description}</p>
                <div class="text-right mt-4 font-press-start text-lg">S/ ${item.price}</div>
            `;
            featuredCarousel.appendChild(card);
        });
    }

    // Renderizar el menú en formato de acordeón
    function renderMenuAccordion() {
        categories.forEach(category => {
            const accordionItem = document.createElement('div');
            accordionItem.className = "bg-gray-800 rounded-lg overflow-hidden relative"; // Añadir relative
            
            // Insertar imagen decorativa de fondo para la sección
            if (genericDecoImages[category]) {
                const decoImgContainer = document.createElement('div');
                decoImgContainer.className = "absolute inset-0 opacity-10 pointer-events-none z-0";
                decoImgContainer.innerHTML = `<img src="${genericDecoImages[category]}" alt="Deco ${category}" class="w-full h-full object-cover floating-effect">`;
                accordionItem.appendChild(decoImgContainer);
            }

            accordionItem.innerHTML += `
                <button class="accordion-button w-full text-left p-4 flex justify-between items-center hover:bg-gray-700 transition relative z-10">
                    <span class="font-press-start text-lg capitalize text-primary-yellow">${category}</span>
                    <i class="fas fa-chevron-down transition-transform duration-300"></i>
                </button>
                <div class="accordion-content max-h-0 overflow-hidden relative z-10">
                    <div class="p-4 border-t border-gray-700 space-y-4">
                        </div>
                </div>
            `;
            
            const contentDiv = accordionItem.querySelector('.accordion-content > div');
            const itemsInCategory = menuItems.filter(item => item.category === category);
            
            itemsInCategory.forEach(item => {
                const menuItemEl = document.createElement('div');
                menuItemEl.className = "flex justify-between items-start";
                
                let itemImageHtml = '';
                if (item.image) {
                    itemImageHtml = `<img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-contain mr-4 rounded-md hidden sm:block">`; // Miniatura
                } else {
                     itemImageHtml = `<div class="w-16 h-16 bg-gray-700 flex items-center justify-center text-gray-500 mr-4 rounded-md hidden sm:block"></div>`;
                }

                menuItemEl.innerHTML = `
                    ${itemImageHtml}
                    <div class="flex-1">
                        <h4 class="font-bold text-lg">${item.name}</h4>
                        <p class="text-sm text-gray-400">${item.description}</p>
                    </div>
                    <span class="font-press-start text-lg ml-4">S/ ${item.price}</span>
                `;
                contentDiv.appendChild(menuItemEl);
            });

            menuAccordion.appendChild(accordionItem);
        });
    }

    // Insertar imágenes decorativas en la sección Hero
    function insertHeroDecoImages() {
        const heroLeft = document.getElementById('deco-image-hero-left');
        const heroRight = document.getElementById('deco-image-hero-right');

        if (heroLeft) {
            heroLeft.innerHTML = `<img src="${genericDecoImages['hero-left']}" alt="Hero Deco Left" class="w-full h-full object-contain">`;
        }
        if (heroRight) {
            heroRight.innerHTML = `<img src="${genericDecoImages['hero-right']}" alt="Hero Deco Right" class="w-full h-full object-contain">`;
        }
    }


    // --- MANEJADORES DE EVENTOS ---

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    menuAccordion.addEventListener('click', (e) => {
        const button = e.target.closest('.accordion-button');
        if (button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('i');

            // Cierra otros acordeones si están abiertos
            button.parentElement.parentElement.querySelectorAll('.accordion-content').forEach(cont => {
                if (cont !== content) {
                    cont.style.maxHeight = '0px';
                    cont.previousElementSibling.querySelector('i').classList.remove('rotate-180');
                }
            });

            // Abre o cierra el acordeón actual
            if (content.style.maxHeight && content.style.maxHeight !== '0px') {
                content.style.maxHeight = '0px';
                icon.classList.remove('rotate-180');
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.classList.add('rotate-180');
            }
        }
    });

    openModalButtons.forEach(btn => btn.addEventListener('click', () => modal.classList.remove('hidden')));
    closeModalButton.addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

    // --- INICIALIZACIÓN ---
    function initialize() {
        renderFeaturedItems();
        renderMenuAccordion();
        insertHeroDecoImages();
        
        setTimeout(() => {
            preloader.classList.add('opacity-0', 'transition-opacity', 'duration-500');
            setTimeout(() => preloader.classList.add('hidden'), 500);
        }, 800); // Pequeño retraso para que se vea la animación de carga
    }
    
    initialize();
});
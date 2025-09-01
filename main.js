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
    
    // --- RENDERIZADO ---

    // Renderizar carrusel de items destacados
    function renderFeaturedItems() {
        const featuredItems = menuItems.filter(item => item.featured);
        featuredItems.forEach(item => {
            const card = document.createElement('div');
            card.className = "flex-shrink-0 w-64 bg-gray-800 rounded-lg p-4 snap-center shadow-lg transform hover:scale-105 transition-transform duration-300";
            card.innerHTML = `
                <h3 class="font-press-start text-lg text-yellow-400">${item.name}</h3>
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
            accordionItem.className = "bg-gray-800 rounded-lg overflow-hidden";
            accordionItem.innerHTML = `
                <button class="accordion-button w-full text-left p-4 flex justify-between items-center hover:bg-gray-700 transition">
                    <span class="font-press-start text-lg capitalize text-yellow-400">${category}</span>
                    <i class="fas fa-chevron-down transition-transform duration-300"></i>
                </button>
                <div class="accordion-content max-h-0 overflow-hidden">
                    <div class="p-4 border-t border-gray-700 space-y-4">
                        </div>
                </div>
            `;
            
            const contentDiv = accordionItem.querySelector('.accordion-content > div');
            const itemsInCategory = menuItems.filter(item => item.category === category);
            
            itemsInCategory.forEach(item => {
                const menuItemEl = document.createElement('div');
                menuItemEl.className = "flex justify-between items-start";
                menuItemEl.innerHTML = `
                    <div>
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

    // --- MANEJADORES DE EVENTOS ---

    // Lógica del menú móvil
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Lógica de los acordeones
    menuAccordion.addEventListener('click', (e) => {
        const button = e.target.closest('.accordion-button');
        if (button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('i');

            button.parentElement.parentElement.querySelectorAll('.accordion-content').forEach(cont => {
                if (cont !== content) {
                    cont.style.maxHeight = '0px';
                    cont.previousElementSibling.querySelector('i').classList.remove('rotate-180');
                }
            });

            if (content.style.maxHeight && content.style.maxHeight !== '0px') {
                content.style.maxHeight = '0px';
                icon.classList.remove('rotate-180');
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.classList.add('rotate-180');
            }
        }
    });

    // Lógica del modal
    openModalButtons.forEach(btn => btn.addEventListener('click', () => modal.classList.remove('hidden')));
    closeModalButton.addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
    });

    // Lógica de animación al hacer scroll
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
        
        // Ocultar preloader después de un pequeño retraso para que se vea
        setTimeout(() => {
            preloader.classList.add('opacity-0', 'transition-opacity', 'duration-500');
            setTimeout(() => preloader.classList.add('hidden'), 500);
        }, 500);
    }
    
    initialize();
});
// ============================================
// MENÚ MÓVIL
// - Maneja la apertura/cierre del menú hamburguesa
// ============================================
const menuToggle = document.getElementById('menuToggle');
const navMobile = document.getElementById('navMobile');

menuToggle.addEventListener('click', () => {
    navMobile.classList.toggle('active');
    
    // Animación del botón hamburguesa
    menuToggle.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
const navLinks = navMobile.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMobile.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// ============================================
// EFECTO SCROLL EN HEADER
// - Cambia el estilo del header al hacer scroll
// ============================================
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ============================================
// CARRUSEL / SLIDER
// - Controla la rotación automática y manual de slides
// ============================================
let slideActual = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

// Función para mostrar un slide específico
function mostrarSlide(index) {
    // Remover clase active de todos los slides e indicadores
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Agregar clase active al slide e indicador actual
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

// Función para avanzar al siguiente slide
function siguienteSlide() {
    slideActual = (slideActual + 1) % totalSlides;
    mostrarSlide(slideActual);
}

// Función para retroceder al slide anterior
function anteriorSlide() {
    slideActual = (slideActual - 1 + totalSlides) % totalSlides;
    mostrarSlide(slideActual);
}

// Botones de navegación del carrusel
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', anteriorSlide);
nextBtn.addEventListener('click', siguienteSlide);

// Indicadores del carrusel
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        slideActual = index;
        mostrarSlide(slideActual);
    });
});

// Auto-avance del carrusel cada 5 segundos
let intervaloCarrusel = setInterval(siguienteSlide, 5000);

// Pausar auto-avance cuando el usuario interactúa
const carousel = document.querySelector('.carousel');

carousel.addEventListener('mouseenter', () => {
    clearInterval(intervaloCarrusel);
});

carousel.addEventListener('mouseleave', () => {
    intervaloCarrusel = setInterval(siguienteSlide, 5000);
});

// ============================================
// SCROLL SUAVE PARA ENLACES DE NAVEGACIÓN
// - Mejora la experiencia al navegar entre secciones
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// ANIMACIÓN DE APARICIÓN AL HACER SCROLL
// - Elementos aparecen con fade-in al entrar en viewport
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animación a las tarjetas de productos, beneficios y negocio
const animatedElements = document.querySelectorAll(
    '.producto-card, .beneficio-card, .negocio-card'
);

animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ============================================
// VALIDACIÓN BÁSICA DEL FORMULARIO
// - Verifica que los campos no estén vacíos
// ============================================
const contactForm = document.querySelector('.contacto-form');
const submitBtn = contactForm.querySelector('.btn');

submitBtn.addEventListener('click', (e) => {
    const inputs = contactForm.querySelectorAll('input, textarea');
    let formValido = true;
    
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            formValido = false;
            input.style.borderColor = '#ef4444';
        } else {
            input.style.borderColor = '#d1d5db';
        }
    });
    
    if (!formValido) {
        e.preventDefault();
        alert('Por favor, completa todos los campos del formulario.');
    }
});

// ============================================
// BOTÓN "VER DETALLES" DE PRODUCTOS
// - Maneja el click en los botones de productos
// ============================================
const productButtons = document.querySelectorAll('.producto-card .btn');

productButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('h3').textContent;
        alert(`Más información sobre: ${productName}\n\nPronto tendremos más detalles disponibles.`);
    });
});

// ============================================
// CONSOLA DE BIENVENIDA
// - Mensaje en la consola del navegador
// ============================================
console.log('%c🍄 Bienvenido a DXN Chile', 'color: #b91c1c; font-size: 20px; font-weight: bold;');
console.log('%cSitio web desarrollado con HTML, CSS y JavaScript', 'color: #4b5563; font-size: 12px;');
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
        // LISTA COMPLETA DE PAÍSES DE LATINOAMÉRICA Y ESPAÑA
        // Ordenados alfabéticamente
        // ============================================
        const paises = [
            { name: 'Argentina', code: '+54', flag: '🇦🇷', dialCode: '54' },
            { name: 'Bolivia', code: '+591', flag: '🇧🇴', dialCode: '591' },
            { name: 'Brasil', code: '+55', flag: '🇧🇷', dialCode: '55' },
            { name: 'Chile', code: '+56', flag: '🇨🇱', dialCode: '56' },
            { name: 'Colombia', code: '+57', flag: '🇨🇴', dialCode: '57' },
            { name: 'Costa Rica', code: '+506', flag: '🇨🇷', dialCode: '506' },
            { name: 'Cuba', code: '+53', flag: '🇨🇺', dialCode: '53' },
            { name: 'Ecuador', code: '+593', flag: '🇪🇨', dialCode: '593' },
            { name: 'El Salvador', code: '+503', flag: '🇸🇻', dialCode: '503' },
            { name: 'España', code: '+34', flag: '🇪🇸', dialCode: '34' },
            { name: 'Guatemala', code: '+502', flag: '🇬🇹', dialCode: '502' },
            { name: 'Honduras', code: '+504', flag: '🇭🇳', dialCode: '504' },
            { name: 'México', code: '+52', flag: '🇲🇽', dialCode: '52' },
            { name: 'Nicaragua', code: '+505', flag: '🇳🇮', dialCode: '505' },
            { name: 'Panamá', code: '+507', flag: '🇵🇦', dialCode: '507' },
            { name: 'Paraguay', code: '+595', flag: '🇵🇾', dialCode: '595' },
            { name: 'Perú', code: '+51', flag: '🇵🇪', dialCode: '51' },
            { name: 'Puerto Rico', code: '+1-787', flag: '🇵🇷', dialCode: '1787' },
            { name: 'República Dominicana', code: '+1-809', flag: '🇩🇴', dialCode: '1809' },
            { name: 'Uruguay', code: '+598', flag: '🇺🇾', dialCode: '598' },
            { name: 'Venezuela', code: '+58', flag: '🇻🇪', dialCode: '58' }
        ];

        // ============================================
        // VARIABLES GLOBALES
        // ============================================
        let paisSeleccionado = paises.find(p => p.name === 'Chile') || paises[0]; // Chile por defecto
        const countrySelectBtn = document.getElementById('countrySelectBtn');
        const countryDropdown = document.getElementById('countryDropdown');
        const countryList = document.getElementById('countryList');
        const countrySearch = document.getElementById('countrySearch');
        const selectedFlag = document.getElementById('selectedFlag');
        const selectedCode = document.getElementById('selectedCode');
        const phoneNumber = document.getElementById('phoneNumber');

        // ============================================
        // CARGAR LISTA DE PAÍSES
        // ============================================
        function cargarPaises(filtro = '') {
            countryList.innerHTML = '';
            
            const paisesFiltrados = paises.filter(pais => 
                pais.name.toLowerCase().includes(filtro.toLowerCase()) ||
                pais.code.includes(filtro)
            );

            if (paisesFiltrados.length === 0) {
                countryList.innerHTML = '<div class="no-results">No se encontraron países</div>';
                return;
            }

            paisesFiltrados.forEach(pais => {
                const li = document.createElement('li');
                li.className = 'country-option';
                if (pais.code === paisSeleccionado.code) {
                    li.classList.add('selected');
                }
                
                li.innerHTML = `
                    <span class="country-flag">${pais.flag}</span>
                    <div class="country-info">
                        <div class="country-name">${pais.name}</div>
                        <div class="country-dial-code">${pais.code}</div>
                    </div>
                `;
                
                li.addEventListener('click', () => seleccionarPais(pais));
                countryList.appendChild(li);
            });
        }

        // ============================================
        // SELECCIONAR PAÍS
        // ============================================
        function seleccionarPais(pais) {
            paisSeleccionado = pais;
            selectedFlag.textContent = pais.flag;
            selectedCode.textContent = pais.code;
            cerrarDropdown();
            phoneNumber.focus();
            
            // Actualizar placeholder según el país
            actualizarPlaceholder(pais.name);
        }

        // ============================================
        // ACTUALIZAR PLACEHOLDER DEL TELÉFONO
        // ============================================
        function actualizarPlaceholder(nombrePais) {
            const placeholders = {
                'Chile': '9 1234 5678',
                'Argentina': '11 1234 5678',
                'México': '55 1234 5678',
                'Colombia': '300 123 4567',
                'Perú': '912 345 678',
                'España': '612 345 678',
                'Brasil': '11 91234 5678'
            };
            
            phoneNumber.placeholder = placeholders[nombrePais] || '123456789';
        }

        // ============================================
        // ABRIR/CERRAR DROPDOWN
        // ============================================
        function toggleDropdown() {
            const isActive = countryDropdown.classList.toggle('active');
            countrySelectBtn.classList.toggle('active');
            
            if (isActive) {
                countrySearch.focus();
                // Scroll al país seleccionado
                setTimeout(() => {
                    const selectedOption = countryList.querySelector('.selected');
                    if (selectedOption) {
                        selectedOption.scrollIntoView({ block: 'center', behavior: 'smooth' });
                    }
                }, 100);
            }
        }

        function cerrarDropdown() {
            countryDropdown.classList.remove('active');
            countrySelectBtn.classList.remove('active');
            countrySearch.value = '';
            cargarPaises();
        }

        // ============================================
        // EVENT LISTENERS
        // ============================================
        countrySelectBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleDropdown();
        });

        // Buscar países
        countrySearch.addEventListener('input', (e) => {
            cargarPaises(e.target.value);
        });

        // Cerrar dropdown al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!countryDropdown.contains(e.target) && e.target !== countrySelectBtn) {
                cerrarDropdown();
            }
        });

        // Prevenir que el dropdown se cierre al hacer click dentro
        countryDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Teclas de navegación
        countrySearch.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                cerrarDropdown();
            }
        });

        // ============================================
        // VALIDACIÓN Y ENVÍO DEL FORMULARIO
        // ============================================
        function enviarFormulario() {
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefono = phoneNumber.value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            // Validar campos vacíos
            if (!nombre || !email || !telefono || !mensaje) {
                alert('❌ Por favor, completa todos los campos del formulario.');
                return;
            }

            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('❌ Por favor, ingresa un email válido.');
                return;
            }

            // Validar teléfono (solo números, espacios y guiones)
            const telefonoRegex = /^[\d\s\-]+$/;
            if (!telefonoRegex.test(telefono)) {
                alert('❌ El teléfono solo debe contener números.');
                return;
            }

            // Construir número completo con código de país
            const telefonoCompleto = `${paisSeleccionado.code} ${telefono}`;

            // Datos del formulario
            const datosFormulario = {
                nombre: nombre,
                email: email,
                telefono: telefonoCompleto,
                codigoPais: paisSeleccionado.dialCode,
                pais: paisSeleccionado.name,
                bandera: paisSeleccionado.flag,
                mensaje: mensaje
            };

            // Mostrar en consola (aquí enviarías a tu servidor)
            console.log('📋 Datos del formulario:', datosFormulario);

            // Mensaje de confirmación
            alert(`✅ ¡Gracias por contactarnos, ${nombre}!\n\n` +
                  `Te responderemos pronto a:\n` +
                  `📧 ${email}\n` +
                  `📱 ${paisSeleccionado.flag} ${telefonoCompleto}`);
            
            // Limpiar formulario (opcional)
            // document.getElementById('nombre').value = '';
            // document.getElementById('email').value = '';
            // phoneNumber.value = '';
            // document.getElementById('mensaje').value = '';
        }

        // ============================================
        // INICIALIZAR
        // ============================================
        cargarPaises();
        actualizarPlaceholder(paisSeleccionado.name);


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
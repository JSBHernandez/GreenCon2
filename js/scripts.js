/**
 * Green Consulting Ingeniería - Modern JavaScript
 * ================================================
 * Version: 2.0.0
 * No jQuery - Pure Vanilla JavaScript ES6+
 * 
 * Features:
 * - Smooth scroll navigation
 * - Active section highlighting
 * - Mobile menu with backdrop
 * - Contact form with validation
 * - Scroll animations (Intersection Observer)
 * - Parallax effects
 * - Scroll to top button
 * - Performance optimized
 */

// ================================================
// Utility Functions
// ================================================

/**
 * Shorthand for querySelector
 * @param {string} selector - CSS selector
 * @returns {Element} DOM element
 */
const $ = (selector) => document.querySelector(selector);

/**
 * Shorthand for querySelectorAll
 * @param {string} selector - CSS selector
 * @returns {NodeList} DOM elements
 */
const $$ = (selector) => document.querySelectorAll(selector);

// Smooth scroll utility
const smoothScroll = (target, duration = 1200) => {
	const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 120;
	const startPosition = window.pageYOffset;
	const distance = targetPosition - startPosition;
	let startTime = null;

	const animation = (currentTime) => {
		if (startTime === null) startTime = currentTime;
		const timeElapsed = currentTime - startTime;
		const run = ease(timeElapsed, startPosition, distance, duration);
		window.scrollTo(0, run);
		if (timeElapsed < duration) requestAnimationFrame(animation);
	};

	const ease = (t, b, c, d) => {
		t /= d / 2;
		if (t < 1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	};

	requestAnimationFrame(animation);
};

// Header Scroll Effect
const initHeaderScroll = () => {
	const header = $('header');
	
	window.addEventListener('scroll', () => {
		if (window.scrollY >= 100) {
			header.classList.add('fixed');
		} else {
			header.classList.remove('fixed');
		}
	}, { passive: true });
};

// Smooth Navigation
const initSmoothNav = () => {
	const topMenu = $('#headnav');
	const menuItems = $$('#headnav a');
	const topMenuHeight = topMenu.offsetHeight + 135;
	let lastId = '';



	// Smooth scroll on click
	menuItems.forEach(item => {
		item.addEventListener('click', (e) => {
			const href = item.getAttribute('href');
			
			if (href.startsWith('#')) {
				e.preventDefault();
				const target = $(href);
				
				if (target) {
					smoothScroll(target);
					
					// Close mobile menu if open
					if (window.innerWidth < 1200) {
						closeMobileMenu();
					}
				}
			}
		});
	});

	// Active section highlighting
	const updateActiveSection = () => {
		// Posición actual del scroll más un offset para mejor detección
		const scrollPosition = window.scrollY + 200;
		let currentSection = 'home'; // Default a home
		
		// Obtener todas las secciones
		const sections = [];
		menuItems.forEach(item => {
			const href = item.getAttribute('href');
			if (href.startsWith('#')) {
				const section = $(href);
				if (section) {
					sections.push({
						id: href.substring(1),
						element: section,
						top: section.offsetTop,
						bottom: section.offsetTop + section.offsetHeight
					});
				}
			}
		});
		
		// Ordenar secciones por posición
		sections.sort((a, b) => a.top - b.top);
		
		// Encontrar la sección actual basada en la posición del scroll
		for (let i = sections.length - 1; i >= 0; i--) {
			if (scrollPosition >= sections[i].top - 100) {
				currentSection = sections[i].id;
				break;
			}
		}
		
		// Actualizar clases active solo si cambió
		if (lastId !== currentSection) {
			lastId = currentSection;
			menuItems.forEach(item => {
				const parent = item.parentElement;
				const href = item.getAttribute('href');
				
				if (href === `#${currentSection}`) {
					parent.classList.add('active');
				} else {
					parent.classList.remove('active');
				}
			});
		}
	};
	
	// Ejecutar al hacer scroll
	window.addEventListener('scroll', updateActiveSection, { passive: true });
	
	// Ejecutar también al cargar por si la página se carga con scroll
	setTimeout(updateActiveSection, 100);
};

// Mobile Menu
const initMobileMenu = () => {
	const showBtn = $('.showmenu');
	const hideBtn = $('.hidemenu');
	const nav = $('nav');
	const body = document.body;

	showBtn.addEventListener('click', () => {
		nav.classList.add('open');
		hideBtn.style.display = 'flex';
		body.classList.add('disablescroll');
	});

	hideBtn.addEventListener('click', () => {
		closeMobileMenu();
	});
	
	// Cerrar menú al hacer click en un enlace
	const menuLinks = $$('nav a');
	menuLinks.forEach(link => {
		link.addEventListener('click', () => {
			if (window.innerWidth <= 1280) {
				closeMobileMenu();
			}
		});
	});
};

const closeMobileMenu = () => {
	const nav = $('nav');
	const hideBtn = $('.hidemenu');
	const body = document.body;
	
	nav.classList.remove('open');
	hideBtn.style.display = 'none';
	body.classList.remove('disablescroll');
};

// Scroll Animations (Intersection Observer)
const initScrollAnimations = () => {
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -100px 0px'
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('animate-in');
				observer.unobserve(entry.target);
			}
		});
	}, observerOptions);

	// Observe elements
	$$('.service-item, .project-item, .about .text, .about .visual').forEach(el => {
		observer.observe(el);
	});
};

// Form Handler
const initContactForm = () => {
	const form = $('#contactform');
	if (!form) return;

	form.addEventListener('submit', async (e) => {
		e.preventDefault();
		
		const submitBtn = $('#submit');
		const formData = new FormData(form);
		
		// Disable button and show loading
		submitBtn.disabled = true;
		submitBtn.innerHTML = 'Enviando... <i class="fa-solid fa-spinner fa-spin"></i>';

		try {
			const response = await fetch('form/contactform.php', {
				method: 'POST',
				body: formData
			});

			const data = await response.json();
			
			if (data.status === 'ok' || data.status === 'Ok') {
				alert(data.msg || '¡Mensaje enviado con éxito!');
				form.reset();
			} else {
				alert(data.msg || 'Hubo un error al enviar el mensaje.');
			}
		} catch (error) {
			console.error('Error:', error);
			alert('Error al enviar el formulario. Por favor, intente de nuevo.');
		} finally {
			submitBtn.disabled = false;
			submitBtn.innerHTML = 'Enviar <i class="fa-regular fa-envelope"></i>';
		}
	});

	// Real-time validation
	const inputs = form.querySelectorAll('input, textarea');
	inputs.forEach(input => {
		input.addEventListener('blur', () => {
			if (input.hasAttribute('required') && !input.value.trim()) {
				input.style.borderColor = '#ff4444';
			} else {
				input.style.borderColor = '';
			}
		});

		input.addEventListener('input', () => {
			input.style.borderColor = '';
		});
	});
};

// Parallax Effect for Banner
const initParallax = () => {
	const banner = $('.banner .visual img');
	if (!banner) return;

	window.addEventListener('scroll', () => {
		const scrolled = window.pageYOffset;
		const rate = scrolled * 0.3;
		banner.style.transform = `translateY(${rate}px)`;
	}, { passive: true });
};

// Scroll to Top Button
const initScrollToTop = () => {
	const scrollBtn = $('#scrollToTop');
	if (!scrollBtn) return;

	// Show/hide button based on scroll position
	window.addEventListener('scroll', () => {
		if (window.scrollY > 500) {
			scrollBtn.classList.add('visible');
		} else {
			scrollBtn.classList.remove('visible');
		}
	}, { passive: true });

	// Scroll to top on click
	scrollBtn.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});
};

// Add loading animation to images
const initLazyImages = () => {
	const images = $$('img');
	
	images.forEach(img => {
		img.style.opacity = '0';
		img.style.transition = 'opacity 0.5s ease-in-out';
		
		if (img.complete) {
			img.style.opacity = '1';
		} else {
			img.addEventListener('load', () => {
				img.style.opacity = '1';
			});
		}
	});
};

// Performance: Debounce function
const debounce = (func, wait = 20, immediate = true) => {
	let timeout;
	return function() {
		const context = this, args = arguments;
		const later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// Initialize all features
const init = () => {
	initHeaderScroll();
	initSmoothNav();
	initMobileMenu();
	initScrollAnimations();
	initContactForm();
	initParallax();
	initScrollToTop();
	initLazyImages();
	
	console.log('%c🚀 Green Consulting Ingeniería', 'color: #0ea33a; font-size: 16px; font-weight: bold;');
	console.log('%cSitio web modernizado con tecnologías actuales', 'color: #10b981; font-size: 12px;');
};

// Run when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', init);
} else {
	init();
}
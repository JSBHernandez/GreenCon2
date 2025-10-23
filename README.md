# Green Consulting Ingeniería - Landing Page

🚀 Landing page corporativa moderna para Green Consulting Ingeniería S.A.S.

## 🌟 Características

### Tecnologías Modernizadas
- ✅ **Vanilla JavaScript (ES6+)** - Sin dependencias de jQuery
- ✅ **CSS Grid & Flexbox** - Layout moderno y responsive
- ✅ **CSS Custom Properties** - Sistema de diseño con variables CSS
- ✅ **Intersection Observer API** - Animaciones en scroll eficientes
- ✅ **Fetch API** - Manejo moderno de formularios
- ✅ **Async/Await** - JavaScript moderno asíncrono

### Diseño Moderno
- 🎨 **Gradientes Tecnológicos** - Paleta de colores verde tech
- ✨ **Animaciones Suaves** - Transiciones y efectos visuales
- 📱 **100% Responsive** - Diseño adaptable a todos los dispositivos
- 🔍 **SEO Optimizado** - Meta tags completos para mejor posicionamiento
- ⚡ **Performance** - Carga rápida y optimizada
- ♿ **Accesibilidad** - Etiquetas ARIA y semántica HTML5

### Características Funcionales
- 🧭 **Navegación Smooth Scroll** - Desplazamiento suave entre secciones
- 📍 **Active Section Highlighting** - Menú activo según posición
- 📱 **Menú Hamburguesa** - Navegación móvil moderna
- 📧 **Formulario de Contacto** - Con validación en tiempo real
- ⬆️ **Scroll to Top** - Botón flotante para volver arriba
- 🎭 **Parallax Effects** - Efectos visuales en scroll
- 💫 **Lazy Loading** - Carga optimizada de imágenes

## 📁 Estructura del Proyecto

```
GreenCon2/
├── index.html                 # Página principal
├── css/
│   ├── style-global.css      # Utilidades CSS globales
│   ├── style.css             # Estilos principales modernos
│   └── style-responsive.css  # Media queries responsive
├── js/
│   ├── scripts.js            # JavaScript moderno (sin jQuery)
│   └── jquery.js             # ⚠️ Deprecated - Ya no se usa
├── form/
│   ├── contactform.php       # Backend del formulario
│   └── contactform.js        # ⚠️ Deprecated - Integrado en scripts.js
├── images/                    # Imágenes del sitio
├── fonts/fa/                  # Font Awesome icons
└── README.md                  # Este archivo

```

## 🎨 Paleta de Colores

```css
/* Colores Principales */
--primary: #0ea33a          /* Verde principal */
--primary-dark: #036C00     /* Verde oscuro */
--secondary: #10b981        /* Verde secundario */
--accent: #3b82f6           /* Azul acento */
--accent-purple: #8b5cf6    /* Púrpura acento */

/* Gradientes */
--gradient-primary: linear-gradient(135deg, #0ea33a 0%, #10b981 100%)
--gradient-tech: linear-gradient(135deg, #0ea33a 0%, #3b82f6 50%, #8b5cf6 100%)
```

## 🚀 Instalación y Uso

### Requisitos
- Servidor web (Apache, Nginx, o servidor de desarrollo)
- PHP 7+ (para el formulario de contacto)

### Instalación Local

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/JSBHernandez/GreenCon2.git
   cd GreenCon2
   ```

2. **Servidor de desarrollo simple**
   
   Con Python:
   ```bash
   python -m http.server 8000
   ```
   
   Con PHP:
   ```bash
   php -S localhost:8000
   ```
   
   Con Node.js (http-server):
   ```bash
   npx http-server -p 8000
   ```

3. **Abrir en navegador**
   ```
   http://localhost:8000
   ```

### Configuración del Formulario

Edita `form/contactform.php` para cambiar el email de destino:

```php
$to = "tumail@ejemplo.com";
```

## 📱 Breakpoints Responsive

```css
/* Tablets y menores */
@media (max-width: 1280px)

/* Móviles landscape */
@media (max-width: 800px)

/* Móviles portrait */
@media (max-width: 600px)

/* Móviles pequeños */
@media (max-width: 540px)
```

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `css/style.css`:

```css
:root {
    --primary: #tu-color;
    --gradient-primary: linear-gradient(...);
}
```

### Modificar Contenido
Edita directamente `index.html` - Todo el contenido está en un solo archivo para facilitar la edición.

### Agregar/Quitar Secciones
Las secciones principales son:
- `<section class="banner">` - Hero/Banner
- `<section class="about">` - Acerca de
- `<section class="services">` - Servicios
- `<section class="projects">` - Proyectos
- `<section class="contact">` - Contacto

## 🌐 SEO y Metadata

La página incluye:
- ✅ Meta tags completos (description, keywords, author)
- ✅ Open Graph para redes sociales
- ✅ Twitter Cards
- ✅ Favicon y Apple Touch Icon
- ✅ Idioma español (`lang="es"`)
- ✅ Google Analytics integrado

## 🔄 Migraciones desde jQuery

### Antes (jQuery)
```javascript
$(document).ready(function() {
    $('.element').click(function() {
        $(this).addClass('active');
    });
});
```

### Después (Vanilla JS)
```javascript
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.element').addEventListener('click', function() {
        this.classList.add('active');
    });
});
```

## 📊 Performance

- ⚡ Sin dependencias externas (excepto Font Awesome)
- 🎯 JavaScript moderno y eficiente
- 🖼️ Lazy loading de imágenes
- 🚀 CSS optimizado con custom properties
- 📦 Tamaño reducido vs versión con jQuery

## 🐛 Troubleshooting

### El formulario no envía emails
- Verifica que PHP esté instalado y configurado
- Comprueba la función `mail()` en tu servidor
- Revisa el archivo `form/contactform.php`

### Las animaciones no funcionan
- Verifica que JavaScript esté habilitado
- Comprueba la consola del navegador (F12)
- Asegúrate de que `scripts.js` se carga correctamente

### Problemas con el menú móvil
- Limpia el caché del navegador
- Verifica que no hay errores de JavaScript

## 📝 Notas de Actualización

### Cambios principales desde la versión anterior:

1. **Eliminado jQuery** - Reescrito en Vanilla JavaScript moderno
2. **Diseño actualizado** - Paleta de colores tech, gradientes, efectos modernos
3. **Tipografía moderna** - Inter + Space Grotesk (Google Fonts)
4. **CSS mejorado** - Variables CSS, Grid, Flexbox moderno
5. **Animaciones** - Intersection Observer, transiciones CSS
6. **SEO mejorado** - Meta tags completos, Open Graph
7. **Accesibilidad** - ARIA labels, semántica HTML5
8. **Performance** - Lazy loading, código optimizado

## 👥 Contacto

**Green Consulting Ingeniería S.A.S.**
- 📧 Email: greenconsulting@greenconsultingingenieria.com
- 📱 Teléfono: (+57) 320 403 2120
- 📍 Ubicación: Área Metropolitana de Bucaramanga, Colombia
- 🐦 Twitter: [@greenconcol](https://x.com/greenconcol)
- 📸 Instagram: [@greenconcol](https://www.instagram.com/greenconcol/)

## 📄 Licencia

© 2025 Green Consulting Ingeniería S.A.S. Todos los derechos reservados.

---

**Desarrollado con ❤️ y tecnologías modernas**

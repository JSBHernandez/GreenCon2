# Guía de Estilo - Green Consulting Ingeniería

## 🎨 Sistema de Diseño

### Colores

#### Principales
```css
--primary: #0ea33a          /* Verde principal - CTAs, links */
--primary-dark: #036C00     /* Verde oscuro - Hover states */
--primary-darker: #024d00   /* Verde más oscuro - Backgrounds */
--secondary: #10b981        /* Verde secundario - Acentos */
```

#### Acentos
```css
--accent: #3b82f6           /* Azul tecnológico */
--accent-purple: #8b5cf6    /* Púrpura tech */
```

#### Neutrales
```css
--dark: #0f172a             /* Texto principal */
--dark-light: #1e293b       /* Backgrounds oscuros */
--gray: #64748b             /* Texto secundario */
--gray-light: #cbd5e1       /* Borders, dividers */
--light: #f8fafc            /* Backgrounds claros */
--white: #ffffff            /* Texto en oscuro */
```

### Tipografía

#### Familias
```css
--font-primary: 'Inter'     /* Texto general, UI */
--font-display: 'Space Grotesk'  /* Títulos, headlines */
```

#### Escalas
```css
/* Headers */
h1: clamp(2.5rem, 5vw, 4.5rem)
h2: clamp(2.5rem, 5vw, 4rem)
h3: clamp(1.75rem, 3vw, 2.5rem)

/* Body */
Body: 1rem (16px)
Small: 0.875rem (14px)
Large: 1.125rem (18px)
```

#### Pesos
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extrabold: 800

### Espaciado

```css
--spacing-xs: 0.5rem    /* 8px */
--spacing-sm: 1rem      /* 16px */
--spacing-md: 1.5rem    /* 24px */
--spacing-lg: 2rem      /* 32px */
--spacing-xl: 3rem      /* 48px */
--spacing-2xl: 4rem     /* 64px */
```

### Border Radius

```css
--radius-sm: 0.375rem   /* 6px - Inputs, buttons pequeños */
--radius-md: 0.5rem     /* 8px - Cards pequeñas */
--radius-lg: 1rem       /* 16px - Cards grandes */
--radius-xl: 1.5rem     /* 24px - Secciones */
```

### Sombras

```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05)
--shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1)
--shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1)
--shadow-xl: 0 20px 25px -5px rgba(0,0,0,0.1)
--shadow-glow: 0 0 20px rgba(14,163,58,0.3)
```

### Transiciones

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1)
```

## 📐 Componentes

### Botones

#### Primario
```css
background: var(--gradient-primary)
color: var(--white)
padding: 1rem 2rem
border-radius: var(--radius-md)
font-weight: 600
transition: all var(--transition-base)
```

#### Hover
```css
transform: translateY(-3px)
box-shadow: var(--shadow-glow)
```

### Cards

#### Estándar
```css
background: var(--white)
border: 2px solid var(--gray-light)
border-radius: var(--radius-lg)
padding: 2.5rem 2rem
box-shadow: var(--shadow-lg)
transition: all var(--transition-base)
```

#### Hover
```css
transform: translateY(-10px)
box-shadow: var(--shadow-xl)
border-color: var(--primary)
```

#### Destacada (type2)
```css
background: var(--gradient-primary)
color: var(--white)
box-shadow: var(--shadow-glow)
```

### Formularios

#### Inputs
```css
background: rgba(255,255,255,0.95)
border: 2px solid transparent
border-radius: var(--radius-md)
padding: 1rem 1.25rem
font-size: 1rem
transition: all var(--transition-base)
```

#### Focus
```css
background: var(--white)
border-color: var(--primary)
box-shadow: 0 0 0 4px rgba(14,163,58,0.1)
transform: translateY(-2px)
```

### Navegación

#### Link Activo
```css
background: var(--gradient-primary)
box-shadow: var(--shadow-glow)
font-weight: 600
```

#### Hover
```css
transform: translateY(-2px)
```

## 🎭 Animaciones

### Fade In Up
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Float
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

### Gradient Shift
```css
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

## 📱 Breakpoints

```css
/* Desktop First */
@media (max-width: 1280px) { /* Tablets y menores */ }
@media (max-width: 800px)  { /* Móviles landscape */ }
@media (max-width: 600px)  { /* Móviles portrait */ }
@media (max-width: 540px)  { /* Móviles pequeños */ }
```

## 🎯 Uso de Clases

### Layout
```html
<div class="container">        <!-- Max-width contenedor -->
<section class="banner">       <!-- Sección hero -->
<section class="services">     <!-- Grid de servicios -->
```

### Items
```html
<div class="item">            <!-- Card estándar -->
<div class="item type2">      <!-- Card destacada -->
<div class="service-item">    <!-- Para animaciones -->
<div class="project-item">    <!-- Proyecto -->
```

### Estados
```html
<nav class="active">          <!-- Navegación activa -->
<button class="visible">      <!-- Elemento visible -->
<body class="disablescroll">  <!-- Sin scroll -->
```

## ✨ Efectos Especiales

### Glassmorphism
```css
background: rgba(255,255,255,0.1)
backdrop-filter: blur(10px)
border: 1px solid rgba(255,255,255,0.2)
```

### Gradient Overlay
```css
background: linear-gradient(135deg, 
  rgba(14,163,58,0.9) 0%, 
  rgba(16,185,129,0.9) 100%)
```

### Glow Effect
```css
box-shadow: 0 0 20px rgba(14,163,58,0.3)
```

## 📝 Convenciones

### Nombres de Clases
- Usar kebab-case: `scroll-to-top`
- Prefijos semánticos: `service-item`, `project-item`
- Modificadores: `item type2`, `banner fixed`

### JavaScript
- Usar const/let (no var)
- Arrow functions preferidas
- Async/await para asincronía
- Comentarios descriptivos

### HTML
- Semántica HTML5
- ARIA labels para accesibilidad
- Alt en todas las imágenes
- Lang="es" en raíz

## 🔍 Accesibilidad

### Mínimos
- Contraste mínimo: 4.5:1 para texto normal
- Contraste mínimo: 3:1 para texto grande
- Áreas táctiles: mínimo 44x44px
- Focus visible en todos los elementos interactivos

### ARIA
```html
<button aria-label="Descripción">
<a target="_blank" rel="noopener noreferrer">
<img alt="Descripción significativa">
```

## 📐 Grid System

### Servicios
```css
display: grid
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
gap: 2rem
```

### Flexbox
```css
display: flex
justify-content: space-between
align-items: center
gap: 4rem
```

---

**Nota**: Mantener consistencia con estas guías al agregar nuevos componentes o modificar existentes.

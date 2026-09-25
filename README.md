# Portafolio web personal

Portafolio interactivo hecho con HTML5 semántico, CSS propio (Custom Properties) y JavaScript, sin frameworks ni dependencias. Incluye una sección de **Design System / Componentes** que documenta colores, tipografía, espaciado y componentes reales del sitio.

**Sitio publicado:** https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/

## Capturas

<!-- Sube tus capturas a la carpeta img/ y enlázalas así: -->
<!-- ![Inicio](img/captura-inicio.png) -->
<!-- ![Design System](img/captura-design-system.png) -->
<!-- ![Versión móvil](img/captura-movil.png) -->

## Tecnologías

- HTML5 semántico (`header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `dialog`, `footer`)
- CSS3: Custom Properties, Flexbox, Grid, media queries, tema claro y oscuro
- JavaScript (ES6+), sin librerías
- Git y GitHub Pages

## Funcionalidades JavaScript

1. Tema claro/oscuro con preferencia guardada en `localStorage`
2. Menú responsive con teclado y atributos ARIA
3. Filtro de proyectos por tecnología
4. Modal con el detalle de cada proyecto (`<dialog>`)
5. Validación del formulario de contacto
6. Navegación que resalta la sección visible
7. Botón para volver al inicio

## Estructura

```
├── index.html
├── css/
│   ├── variables.css    # tokens de diseño (colores, tipografía, espaciado, radios, sombras)
│   ├── base.css         # reset, tipografía y layout general
│   ├── components.css   # navbar, botones, badge, card, skill, inputs, modal
│   ├── sections.css     # layout de cada sección
│   └── responsive.css   # media queries (móvil primero)
├── js/main.js
└── img/
```

## Cómo verlo en local

1. Clona el repositorio: `git clone https://github.com/TU-USUARIO/NOMBRE-DEL-REPO.git`
2. Abre `index.html` en el navegador (o usa la extensión Live Server de VS Code).

## Cómo personalizarlo

- Busca en `index.html` los textos entre corchetes `[...]` y `Tu Nombre Apellido`.
- Cambia los colores y fuentes en `css/variables.css`; todo el sitio se actualiza.
- Reemplaza `img/avatar.svg` y `img/proyecto-*.svg` por tus imágenes (optimizadas, `.webp` o `.jpg`).

## Publicación

Settings → Pages → Source: *Deploy from a branch* → rama `main`, carpeta `/ (root)`.

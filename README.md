# Portafolio web personal

Portafolio de **Cristhian Gonzalez**, estudiante de Ingeniería de Software y desarrollador frontend en formación. Es un sitio web estático de una sola página que presenta su perfil, formación, habilidades, proyectos y medios de contacto.

El sitio está construido con HTML, CSS y JavaScript nativos, sin frameworks, dependencias ni proceso de compilación. Incluye una interfaz adaptable a distintos tamaños de pantalla, controles interactivos y una sección de componentes que documenta los estilos reutilizados en el sitio.

## Contenido

- **Inicio:** presentación y resumen del perfil.
- **Sobre mí:** información personal, formación académica y datos rápidos.
- **Habilidades:** habilidades técnicas agrupadas por área, con niveles de experiencia.
- **Proyectos:** tarjetas con descripción, tecnologías, enlaces a repositorios y detalles ampliados.
- **Componentes:** muestras de colores, tipografía, espaciado, botones, navegación, campos y tarjetas.
- **Contacto:** correo, perfiles sociales y formulario de contacto.

## Funciones implementadas

- Tema claro y oscuro. Al iniciar, respeta el tema guardado en el navegador o la preferencia del sistema; los cambios se conservan en `localStorage`.
- Menú adaptable: en pantallas pequeñas se abre y cierra con el botón, se cierra al elegir un enlace y permite cerrarse con `Escape`.
- Indicador de navegación que resalta la sección visible.
- Filtros de proyectos por JavaScript, HTML y CSS, o Node.js; el filtro seleccionado se comunica mediante una región accesible.
- Diálogo de detalles de proyecto con el elemento nativo `<dialog>`, que muestra el problema, las características y las tecnologías. Al cerrarse, devuelve el foco al botón que lo abrió.
- Validación en el navegador para nombre, correo y mensaje.
- Botón para volver al inicio, visible después de desplazarse por la página.
- Valores de color del muestrario actualizados según el tema activo.
- Enlace para saltar al contenido principal, etiquetas semánticas y nombres accesibles para controles interactivos.

> **Alcance del formulario:** actualmente es una demostración de interfaz. Valida los campos, muestra un mensaje de confirmación y limpia el formulario, pero no envía ni almacena los datos.

## Tecnologías

- **HTML5:** estructura semántica, formularios y diálogo nativo.
- **CSS3:** variables personalizadas, Flexbox, Grid, media queries, transiciones y temas claro/oscuro.
- **JavaScript:** manipulación del DOM, eventos, `localStorage`, `IntersectionObserver` y validación de formularios.
- **Google Fonts:** Bricolage Grotesque, IBM Plex Sans e IBM Plex Mono. Se necesitan conexión a internet y acceso a Google Fonts para cargar estas fuentes; hay fuentes de respaldo definidas en CSS.
- **GitHub Pages:** opción de publicación como sitio estático.

## Estructura

```text
portafolio/
├── index.html
├── README.md
├── css/
│   ├── variables.css       # Colores, tipografía, espaciado, sombras y tema oscuro
│   ├── base.css            # Estilos generales, accesibilidad y elementos base
│   ├── components.css      # Navegación, botones, tarjetas, campos, diálogo y más
│   ├── sections.css        # Distribución de las secciones
│   └── responsive.css      # Adaptación a distintos tamaños de pantalla
├── js/
│   └── main.js             # Tema, menú, filtros, diálogo, formulario y navegación
└── img/
    ├── favicon.svg
    ├── img.foto-perfil/
    │   └── foto-perfil.jpeg
    └── img.proyectos/
        ├── proyecto-1.jpeg
        ├── proyecto-2.png
        └── proyecto-3.png
```

## Ejecución local

No se requiere instalar Node.js, paquetes ni herramientas de compilación.

**Abrir en el navegador:** abre `index.html` directamente.

**Usar Live Server en Visual Studio Code:** abre la carpeta del proyecto, inicia Live Server desde `index.html` y visita la dirección local que muestre la extensión. Live Server es opcional y solo facilita la recarga durante la edición.

## Actualizar el contenido

La mayoría del contenido y los enlaces se editan en `index.html`:

- Actualiza perfil, formación, habilidades y datos de contacto en sus secciones.
- Cada tarjeta de proyecto está dentro de `#projects-grid`. Para mantener filtros y detalles, conserva los atributos `data-tech`, `data-problem` y `data-features`, así como el botón con la clase `js-open-modal`.
- Los valores admitidos actualmente en `data-tech` son `javascript`, `html-css` y `nodejs`.
- Sustituye imágenes conservando las rutas existentes o actualiza `src` en el HTML. Usa texto alternativo descriptivo y dimensiones adecuadas.

Para modificar la apariencia global, edita los tokens de `css/variables.css`. Los estilos de componentes están en `css/components.css`, la composición de secciones en `css/sections.css` y los ajustes para pantallas pequeñas y grandes en `css/responsive.css`.

## Activar el envío del formulario

El formulario actual solo valida los datos en el navegador. Para recibir mensajes, debe conectarse a un servicio de formularios o a un backend y configurarse el envío de forma segura. No incluyas credenciales privadas en los archivos estáticos del sitio.

## Publicación en GitHub Pages

1. Sube los archivos del proyecto a un repositorio de GitHub.
2. En el repositorio, abre **Settings > Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Selecciona la rama que contiene el proyecto y la carpeta `/ (root)`.
5. Guarda los cambios y espera a que GitHub Pages publique el sitio.

En un repositorio de proyecto, la dirección tendrá un formato similar a `https://USUARIO.github.io/REPOSITORIO/`. Comprueba la URL que GitHub muestra en la configuración de Pages.

## Accesibilidad y compatibilidad

El sitio incluye estructura semántica, textos alternativos en imágenes, etiquetas para campos, estados ARIA, mensajes de validación, gestión de foco en el diálogo y navegación por teclado en el menú. Estas medidas no sustituyen una auditoría formal de accesibilidad. Se recomienda comprobar el sitio en versiones actuales de Chrome, Edge, Firefox y Safari.

## Autor

**Cristhian Gonzalez**

- GitHub: [cristhian-gonzalez](https://github.com/cristhian-gonzalez)
- LinkedIn: [Cristhian Gonzalez](https://www.linkedin.com/in/cristhian-jose-gonz%C3%A1lez-sanchez-3632a742b)
- Correo: [cgonzalezs4@unemi.edu.ec](mailto:cgonzalezs4@unemi.edu.ec)

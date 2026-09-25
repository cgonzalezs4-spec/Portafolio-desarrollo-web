# Portafolio web personal

Portafolio de **Cristhian Gonzalez**, estudiante de Ingeniería de Software y desarrollador frontend en formación. El sitio presenta información personal, habilidades técnicas, proyectos destacados y datos de contacto mediante una interfaz responsive, accesible y sin frameworks.

## Vista general

El proyecto está construido como un sitio web estático y puede abrirse directamente en el navegador. También incluye una sección de **Design System / Componentes**, donde se muestran los colores, la tipografía, el espaciado y los componentes visuales utilizados en el portafolio.

## Características

- Diseño responsive para móvil, tablet y escritorio.
- Tema claro y oscuro con preferencia guardada en `localStorage`.
- Menú móvil con atributos ARIA y navegación mediante teclado.
- Navegación activa según la sección visible en pantalla.
- Filtro de proyectos por tecnología.
- Modal de detalles implementado con el elemento nativo `<dialog>`.
- Formulario de contacto con validación en el navegador.
- Botón para volver al inicio después de desplazarse por la página.
- Enlace para saltar directamente al contenido principal.
- Uso de HTML semántico y estados accesibles para controles interactivos.

> El formulario de contacto es actualmente demostrativo: valida los datos y muestra un mensaje local, pero no envía información a un servidor.

## Tecnologías

- **HTML5** semántico: `header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `dialog` y `footer`.
- **CSS3**: Custom Properties, Flexbox, Grid, media queries, transiciones y temas claro/oscuro.
- **JavaScript ES6+**: DOM, eventos, `localStorage`, `IntersectionObserver` y validación de formularios.
- **Google Fonts**: Bricolage Grotesque, IBM Plex Sans e IBM Plex Mono.
- **GitHub Pages** para publicación opcional.

## Estructura del proyecto

```text
portafolio/
├── index.html
├── README.md
├── css/
│   ├── variables.css       # Tokens de color, tipografía, espaciado y sombras
│   ├── base.css            # Reset, tipografía y estilos generales
│   ├── components.css      # Navbar, botones, tarjetas, badges, inputs y modal
│   ├── sections.css        # Layout de las secciones principales
│   └── responsive.css      # Adaptación para móvil, tablet y escritorio
├── js/
│   └── main.js             # Interacciones y comportamiento del sitio
└── img/
	├── favicon.svg
	├── img.foto-perfil/
	│   └── foto-perfil.jpeg
	└── img.proyectos/
		├── proyecto-1.jpeg
		├── proyecto-2.png
		└── proyecto-3.svg
```

## Ejecutar en local

No se necesita instalar Node.js ni dependencias adicionales.

### Opción 1: abrir directamente

Abre el archivo `index.html` en cualquier navegador moderno.

### Opción 2: usar Live Server

1. Abre la carpeta del proyecto en Visual Studio Code.
2. Instala la extensión **Live Server** si todavía no la tienes.
3. Haz clic derecho sobre `index.html`.
4. Selecciona **Open with Live Server**.

### Opción 3: clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd portafolio
```

Después, abre `index.html` o inicia el proyecto con Live Server.

## Personalización

### Información personal

Edita `index.html` para actualizar:

- Nombre, descripción y formación.
- Habilidades y niveles de experiencia.
- Proyectos, descripciones y tecnologías.
- Enlaces de GitHub, LinkedIn y correo electrónico.

### Estilos visuales

Edita `css/variables.css` para cambiar los tokens globales del diseño:

- Colores de marca e interfaz.
- Fuentes y tamaños de texto.
- Escala de espaciado.
- Radios de borde y sombras.
- Valores específicos del tema oscuro.

### Imágenes

Reemplaza los archivos de `img/img.foto-perfil/` y `img/img.proyectos/` conservando las rutas usadas en `index.html`, o actualiza esas rutas cuando cambies los nombres de archivo. Se recomienda usar imágenes optimizadas y definir siempre un texto alternativo descriptivo.

### Formulario de contacto

Para recibir mensajes reales, conecta el formulario con un servicio como Formspree, Netlify Forms o un backend propio. El comportamiento actual en `js/main.js` solo realiza validación local y no transmite los datos.

## Publicar en GitHub Pages

1. Sube el proyecto a un repositorio de GitHub.
2. Abre **Settings > Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Elige la rama `main` y la carpeta `/ (root)`.
5. Guarda la configuración y espera a que GitHub genere la página.

La URL tendrá normalmente este formato:

```text
https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/
```

## Accesibilidad y compatibilidad

El portafolio utiliza HTML semántico, textos alternativos, foco de teclado, etiquetas ARIA, mensajes de estado y un enlace para saltar al contenido. Se recomienda probarlo en las versiones actuales de Chrome, Edge, Firefox y Safari.

## Autor

**Cristhian Gonzalez**

- GitHub: [cristhian-gonzalez](https://github.com/cristhian-gonzalez)
- LinkedIn: [cristhian-gonzalez](https://www.linkedin.com/in/cristhian-jose-gonz%C3%A1lez-sanchez-3632a742b)
- Correo: [cgonzalezs4@unemi.edu.ec](mailto:cgonzalezs4@unemi.edu.ec)

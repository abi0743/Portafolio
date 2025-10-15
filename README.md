# 💼 Portafolio Profesional de Desarrollo Web (Bootstrap Puro)

## 📄 Descripción General del Proyecto

Este proyecto es una implementación de un **Portafolio Profesional** siguiendo un diseño de "Una Sola Página" (One-Page Layout), utilizando exclusivamente el framework **Bootstrap 5.3**. El objetivo es demostrar la capacidad de construir una interfaz de usuario moderna, limpia y, fundamentalmente, **responsiva**, utilizando únicamente las clases, componentes y utilidades nativas de Bootstrap, sin necesidad de código CSS o JavaScript personalizado.

El proyecto está diseñado para simular un entorno donde se utilizan las versiones locales y descargables de los archivos de Bootstrap.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción | Uso en el Proyecto |
| :--- | :--- | :--- |
| **HTML5** | Lenguaje de marcado para la estructura semántica de todas las secciones. | Estructura base. |
| **Bootstrap 5.3 (Descargable)** | Framework de CSS y JS esencial para el diseño responsivo, el sistema de grilla y los componentes interactivos. | **Uso Exclusivo de Clases:** Navbar, Grid System, Cards, Formularios, Utilidades de espaciado y texto. |
| **JavaScript (Bootstrap Bundle)** | Archivo `bootstrap.bundle.min.js` que proporciona la funcionalidad para componentes como el *Navbar Toggle* y el *Scrollspy*. | Funcionalidad básica interactiva. |
| **Font Awesome (CDN)** | Librería de iconos utilizada únicamente para los iconos de redes sociales, ya que no son parte de la librería base de Bootstrap. | Iconos en el pie de página. |

---

## ⚙️ Configuración y Estructura (Simulación Local)

El proyecto se presenta en un único archivo `index.html` (para el canvas), pero simula la estructura de archivos requerida para la versión descargable de Bootstrap.

### 1. Enlaces Requeridos

Para que el proyecto funcione localmente, se deben tener los siguientes archivos y rutas configuradas:

| Archivo | Ruta Simulada en `index.html` | Propósito |
| :--- | :--- | :--- |
| Bootstrap CSS | `css/bootstrap.min.css` | Estilos base del framework. |
| Bootstrap JS | `js/bootstrap.bundle.min.js` | Funcionalidad interactiva. |

### 2. Estructura de Secciones

El portafolio se divide en las siguientes secciones, todas construidas con el sistema de clases de Bootstrap:

#### A. Barra de Navegación (`Navbar`)
* **Clases utilizadas:** `.navbar`, `.navbar-expand-lg`, `.navbar-dark`, `.bg-dark`, `.sticky-top`.
* **Funcionalidad:** Implementa el componente completo de Navbar, incluyendo el `navbar-toggler` para el vista móvil y el uso de **Scrollspy** para resaltar el enlace activo mientras el usuario se desplaza.

#### B. Sección de Encabezado (`Hero`)
* **Clases utilizadas:** `.bg-primary`, `.text-white`, `.text-center`, `.d-flex`, `.align-items-center`, `.justify-content-center`, `.vh-100`.
* **Diseño:** Se utiliza una combinación de clases de utilidad para centrar el contenido (Flexbox) y la clase `.vh-100` para que ocupe toda la altura de la pantalla (Viewport Height). El color de fondo se define con `.bg-primary`.

#### C. Sección "Acerca de Mí"
* **Componentes:** **Sistema de Grilla (Grid System)** y **Clases de Utilidad de Imagen**.
* **Estructura:** La sección utiliza un contenedor (`.container`) y una fila (`.row`) que divide el espacio en dos columnas:
    * **Columna 1 (`.col-md-4`):** Imagen de perfil con clases `.img-fluid` y `.rounded-circle`.
    * **Columna 2 (`.col-md-8`):** Contenido biográfico.

#### D. Sección de Proyectos
* **Componentes:** **Sistema de Grilla** y **Cards**.
* **Estructura:** Los proyectos se muestran en el componente **Card**, que incluye imagen, título y botones de acción. Se utiliza la grilla responsiva:
    * `row-cols-1`: 1 columna en móvil.
    * `row-cols-md-2`: 2 columnas en tablet.
    * `row-cols-lg-3`: 3 columnas en escritorio.
* **Uniformidad:** Se usa `.h-100` en las tarjetas para garantizar que todas tengan la misma altura, incluso si el contenido varía ligeramente.

#### E. Sección de Contacto
* **Componentes:** **Formularios de Bootstrap**.
* **Estructura:** Un formulario simple estilizado con las clases nativas de Bootstrap:
    * **Campos de Entrada:** Se aplica la clase `.form-control` a los `input` y `textarea` para el estilizado y responsividad.
    * **Botón:** Se utiliza la clase `.btn-primary` junto con `.d-block` y `.w-100` para hacerlo un botón de bloque que ocupe todo el ancho.

#### F. Pie de Página (`Footer`)
* **Clases utilizadas:** `.bg-dark`, `.text-white`, `.text-center`, `.py-4`.
* **Detalle:** Un pie de página simple y oscuro que incluye el aviso de derechos de autor y un espacio para los iconos sociales.

---

## 💡 Ventajas de Usar solo Clases de Bootstrap

Al limitar la codificación a solo las clases de Bootstrap, se logran los siguientes beneficios:

1.  **Uniformidad:** Mantiene un look and feel consistente y profesional en toda la página, adhiriéndose al diseño preestablecido de Bootstrap.
2.  **Responsividad Garantizada:** El diseño es completamente responsivo sin necesidad de escribir media queries, gracias al Grid System y las utilidades integradas.
3.  **Mantenibilidad:** El código es fácil de leer y entender para cualquier desarrollador familiarizado con Bootstrap.
4.  **Rapidez de Desarrollo:** Permite construir rápidamente interfaces complejas (como el Navbar colapsable o las Cards) con muy pocas líneas de código.

---

## ©️ Créditos y Licencia

Este proyecto está disponible para su uso como plantilla de portafolio personal.
* **Framework:** Bootstrap v5.3.
* **Iconos:** Font Awesome.

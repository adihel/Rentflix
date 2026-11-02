RentFlix - Plataforma Web de Catálogo de Películas
RentFlix es una aplicación web interactiva desarrollada para la gestión de un catálogo de películas tipo VOD (Video a la Carta). El proyecto está construido con HTML5, CSS3, Bootstrap 5 y JavaScript (Vanilla), utilizando LocalStorage para garantizar la persistencia de los datos en el navegador sin necesidad de bases de datos externas ni servidores complejos.

Características Principales
Sistema de Autenticación Académica:

Permite iniciar sesión (con credenciales de administrador por defecto o usuarios registrados).

Incluye un formulario de registro de nuevos usuarios con validación y almacenamiento local en LocalStorage.

CRUD Completo de Películas:

Crear / Agregar: Formulario modal para registrar nuevas películas solicitando Título, Director, Año, Calificación (0-10), Género, URL de la portada y Sinopsis.

Listar: Visualización dinámica de todo el catálogo en forma de tarjetas (cards) con diseño oscuro inspirado en servicios de streaming.

Editar: Modificación de los datos de cualquier película existente.

Eliminar: Borrado de registros con cuadro de confirmación previa.

Buscador y Filtro Combinados:

Buscador en tiempo real: Permite filtrar instantáneamente las películas escribiendo el título o el nombre del director.

Filtro por género: Selector desplegable para filtrar el catálogo por categorías (Acción, Comedia, Drama, Ciencia Ficción, Terror y Animación) de forma simultánea con el buscador.

Detalles y Respaldo Visual:

Vista detallada de cada película en un modal con la información completa.

Sistema de imagen alternativa (fallback) en caso de que la URL de la portada falle al cargar.

Catálogo Precargado:

Viene equipado con un listado inicial de 12 películas populares clasificadas en diferentes géneros con sus respectivas sinopsis, directores y calificaciones.

Tecnologías Utilizadas
HTML5: Estructura semántica de la interfaz y modales de Bootstrap.

CSS3 & Bootstrap 5: Estilos responsivos, paleta de colores y componentes visuales con temática oscura (Dark Mode).

JavaScript (DOM & LocalStorage): Lógica de manipulación de elementos, gestión de eventos, filtrado de arrays y persistencia de datos mediante JSON.stringify() y JSON.parse().

Estructura de Archivos
index.html: Contiene la interfaz de autenticación (Login y Registro) y el panel principal de streaming (carrusel, barra de búsqueda, filtros y tarjetas).

styles.css: Hojas de estilos personalizadas para la interfaz oscura de la plataforma.

localstorage.js: Lógica de JavaScript para el control de sesiones, operaciones CRUD, renderizado dinámico y filtros combinados.

Instrucciones de Uso
Descomprima el archivo del proyecto.

Abra el archivo index.html directamente en cualquier navegador web moderno (Google Chrome, Microsoft Edge, Firefox, etc.).

Puede iniciar sesión con las credenciales de prueba (admin@rentflix.com / 123456) o registrar una nueva cuenta mediante el formulario de registro.

¡Explore el catálogo, utilice el buscador y administre las películas libremente!
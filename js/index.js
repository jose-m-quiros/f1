// Obtener el elemento de texto del carrusel
const textoCarrusel = document.querySelector('.texto-carrusel');

// Función para mostrar u ocultar el texto dependiendo del ancho de la pantalla
function toggleTextoCarrusel() {
  if (window.innerWidth <= 767) {
    textoCarrusel.style.display = 'block'; // Mostrar el texto
  } else {
    textoCarrusel.style.display = 'none'; // Ocultar el texto
  }
}

// Ejecutar la función al cargar la página y al cambiar el tamaño de la ventana
window.onload = toggleTextoCarrusel;
window.addEventListener('resize', toggleTextoCarrusel);




// Obtener el elemento de la imagen del logo
const logoImagen = document.getElementById('logoImagen');

// Función para cambiar el logo cuando el ancho de la pantalla sea menor o igual a 700px
function cambiarLogo() {
  if (window.innerWidth <= 700) {
    logoImagen.src = 'img/download.png'; // Ruta de la nueva imagen del logo
    logoImagen.alt = 'Nuevo Logo'; // Texto alternativo para el nuevo logo
  } else {
    logoImagen.src = 'img/F1-in-Schools-Stretch-Black-scaled-e1608034793347.png'; // Ruta original del logo
    logoImagen.alt = 'Logo'; // Texto alternativo para el logo original
  }
}

// Ejecutar la función al cargar la página y al cambiar el tamaño de la ventana
window.onload = cambiarLogo;
window.addEventListener('resize', cambiarLogo);

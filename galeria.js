const imagenes = document.querySelectorAll('#listaImagenes li img');
const imagenActual = document.getElementById('imagenActual');
const botonAnterior = document.getElementById('botonAnterior');
const botonSiguiente = document.getElementById('botonSiguiente');

let indiceActual = 0;

function mostrarImagen(indice) {
    imagenActual.src = imagenes[indice].src;
}

botonAnterior.addEventListener('click', () => {
    indiceActual = (indiceActual > 0) ? indiceActual - 1 : imagenes.length - 1; // Volver al último si está en el primero
    mostrarImagen(indiceActual);
});

botonSiguiente.addEventListener('click', () => {
    indiceActual = (indiceActual < imagenes.length - 1) ? indiceActual + 1 : 0; // Volver al primero si está en el último
    mostrarImagen(indiceActual);
});

// Mostrar la primera imagen al cargar
mostrarImagen(indiceActual);
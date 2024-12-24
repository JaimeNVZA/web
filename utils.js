// Lógica para el botón de contacto
const botonContacto = document.getElementById('botonContacto');
const cuadroContacto = document.getElementById('cuadroContacto');

botonContacto.addEventListener('click', () => {
    const isVisible = cuadroContacto.style.display === 'block';
    cuadroContacto.style.display = isVisible ? 'none' : 'block';
});

// Cerrar el cuadro si se hace clic fuera de él
document.addEventListener('click', (event) => {
    if (!cuadroContacto.contains(event.target) && event.target !== botonContacto) {
        cuadroContacto.style.display = 'none';
    }
});
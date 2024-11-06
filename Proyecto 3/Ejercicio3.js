const imagen = document.getElementById('miImagen');

let posInicial = null;
let posActual = { x: parseInt(imagen.style.left || 0), y: parseInt(imagen.style.top || 0) };

document.addEventListener('click', (event) => {
    posInicial = { x: event.clientX, y: event.clientY };
    console.log("Posición inicial:", posInicial);
});

imagen.addEventListener('click', function(event) {
    if (posInicial) {
        moverImagenGradualmente(posInicial);
        posInicial = null; // Reiniciar para permitir nuevos clics
        event.stopPropagation();
    }
});

function moverImagenGradualmente(destino) {
    const velocidad = 10; // Velocidad de movimiento en píxeles por "ciclo"
    const distanciaX = destino.x - posActual.x;
    const distanciaY = destino.y - posActual.y;

    // Número de pasos necesarios para cubrir toda la distancia
    const pasos = Math.max(Math.abs(distanciaX), Math.abs(distanciaY)) / velocidad;

    let pasoActual = 0;

    const interval = setInterval(() => {
        if (pasoActual < pasos) {
            // Calcular el incremento para cada ciclo
            const incrementoX = distanciaX / pasos;
            const incrementoY = distanciaY / pasos;

            // Actualizar la posición de la imagen
            posActual.x += incrementoX;
            posActual.y += incrementoY;

            imagen.style.left = posActual.x + 'px';
            imagen.style.top = posActual.y + 'px';

            pasoActual++;
        } else {
            // Asegurarse de que la imagen llegue exactamente a la posición final
            imagen.style.left = destino.x + 'px';
            imagen.style.top = destino.y + 'px';
            clearInterval(interval);
        }
    }, 1000 / 60); // Ejecutar cada 1/60 segundos (~60 FPS)
}

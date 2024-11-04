const imagen = document.getElementById('miImagen');

let posInicial = null;


document.addEventListener('click', (event) => {
    posInicial = { x: event.clientX, y: event.clientY };
    console.log("Posición inicial:", posInicial);
});


imagen.addEventListener('click', function(event) {
    if (posInicial) {
        // Mover la imagen a la posición inicial
        moverImagen(posInicial);
        // Reiniciar la posición inicial
        posInicial = null; // Reiniciar para permitir nuevos clics
        event.stopPropagation();
    }
});

function moverImagen(destino) {
    // Colocar la imagen en la nueva posición
    imagen.style.left = destino.x + 'px';
    imagen.style.top = destino.y + 'px';
}

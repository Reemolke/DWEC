const inputCoordinates = document.getElementById('coordinates');

        // Función para actualizar las coordenadas del ratón
        document.addEventListener('mousemove', function(event) {
            const x = event.clientX;  // Coordenada X del ratón
            const y = event.clientY;  // Coordenada Y del ratón
            inputCoordinates.value = `X: ${x}, Y: ${y}`;  // Mostrar las coordenadas
        });
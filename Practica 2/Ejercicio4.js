const inputCoordinates = document.getElementById('coordinates');

        document.addEventListener('mousemove', function(event) {
            const x = event.clientX-window.innerWidth/2;
            const y = event.clientY-window.innerHeight/2;
            //He restado el ancho y el alto de la pantalla entre para simular que el centro de la pantalla es 0,0
            inputCoordinates.value = `X: ${x}, Y: ${y}`;
        });
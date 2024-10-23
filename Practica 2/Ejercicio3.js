document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario si hay errores

    const dni = document.getElementById('dni').value.trim();
    const email = document.getElementById('email').value.trim();
    let errores = [];

    // Validación del DNI
    if (!dni) {
        errores.push("Completa el campo DNI."); 
    } else if (!/^\d{8}$/.test(dni.slice(0, 8))) {
        errores.push("Teclea un DNI (sin letras, solo números)."); 
    } else {
        // Validar la letra del DNI
        const numeroDNI = dni.slice(0, 8); // Obtener los 8 primeros caracteres (números)
        const letraDNI = dni.slice(8).toUpperCase();
        const letrasValidas = "TRWAGMYFPDXBNJZSQVHLCKE";
        const indiceLetra = parseInt(numeroDNI) % 23; // Calcular el índice para la letra
        const letraCorrecta = letrasValidas[indiceLetra];

        if (letraDNI !== letraCorrecta) {
            errores.push("La letra del NIF es incorrecta."); // Error si la letra no coincide
        }
    }

    // Validación del email
    if (!email) {
        errores.push("El campo email es obligatorio.");
    } else {
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
        if (emailPattern.test(email)) {
        } else {
            errores.push("El formato del correo electrónico no es válido.");
        }
    }
    

    // Mostrar errores o enviar el formulario
    const errorMessages = document.getElementById('errorMessages');
    if (errores.length > 0) {
        errorMessages.innerHTML = errores.join('<br>');
    } else {
        errorMessages.innerHTML = "Formulario enviado correctamente.";
    }
});

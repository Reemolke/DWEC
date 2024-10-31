const select = document.getElementById('curso');
const currentYear = new Date().getFullYear();

    for (let year = 2000; year <= currentYear; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        select.appendChild(option);
    }
    document.getElementsByTagName('form')[0].addEventListener('submit', function(event) {
        const nombre = document.getElementById('nombre');
        const apellido1 = document.getElementById('apellido');
        const apellido2 = document.getElementById('cognom2');
        const fecha = document.getElementById('fecha');
        const estudios = document.getElementById('estudios');
        const curso = document.getElementById('curso');
        const telefono = document.getElementById('telefono');

        event.preventDefault();
        let errores = [];
        
        if (!nombre.value) {
            errores.push("Completa el campo nombre.");
        }
        if (!apellido1.value) {
            errores.push("Completa el campo apellido 1.");
        }
        if (!apellido2.value) {
            errores.push("Completa el campo apellido 2.");
        }
        if (!fecha.value) {
            errores.push("Completa el campo fecha de nacimiento.");
        } 
        if (!estudios.value) {
            errores.push("Completa el campo estudios.");
        }
        if (!curso.value) {
            errores.push("Completa el campo curso.");
        }
        if (!telefono.value) {
            errores.push("Completa el campo teléfono.");
        }else if(telefono.value.length != 9) {
            errores.push("El teléfono debe tener 9 dígitos.");
        }
        
        if (errores.length > 0) {
            const erroresUl = document.getElementById('errores');
            errores.forEach((errores)=> {
                const error = document.createElement('option');
                error.value = item;
                error.textContent = item;
                erroresUl.appendChild(error);
                
            });
        }
    });
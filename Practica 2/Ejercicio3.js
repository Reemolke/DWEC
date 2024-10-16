
    const form= document.getElementsByTagName("form");
    let name = document.getElementById('Nombre').value;
    let surname = document.getElementById('Apellidos').value;
    let email = document.getElementById('Correo').value;
    let Dni = document.getElement('Dni').value;
    
    form.addEventListener('submit',(event) => {
        if(!form.checkValidity()){
            event.preventDefault();
            alert("Por favor, rellena todos los campos correctamente");
        }
    });
    

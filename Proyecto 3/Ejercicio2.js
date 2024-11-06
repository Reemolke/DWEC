const select = document.getElementById('curso');
const currentYear = new Date().getFullYear();

for (let year = 2000; year <= currentYear; year++) {
  const option = document.createElement('option');
  option.value = year;
  option.textContent = year;
  select.appendChild(option);
}
const error = document.getElementById('erroresDiv');
const nombre = document.getElementById('nombre');
const apellido1 = document.getElementById('apellido');
const apellido2 = document.getElementById('cognom2');
const fecha = document.getElementById('fecha');
const telefono = document.getElementById('telefono');
const erroresCerrar = document.getElementById('erroresClose');
const modal = document.getElementById('modal');
const estudios = document.getElementById('estudios');
// Función de validación del nombre
function nombreCheck() {
  const pattern = /^[a-zA-ZñÑ\s]+$/; // Permitir solo letras
  if (!nombre.value) {
    mostrarError("Rellene el nombre por favor.");
  } else if (!pattern.test(nombre.value)) {
    mostrarError("No se admiten caracteres especiales ni números");
  } else {
    ocultarError();
    return true;
  }
  return false;
}
nombre.addEventListener('focusout',nombreCheck);
function apellido1Check() {
  const pattern = /^[a-zA-ZñÑ\s]+$/; // Permitir solo letras
  if (!apellido1.value) {
    mostrarError("Rellene el apellido por favor.");
  } else if (!pattern.test(apellido1.value)) {
    mostrarError("No se admiten caracteres especiales ni números");
  } else {
    ocultarError();
    return true;
  }
  return false;
}
apellido1.addEventListener('focusout',apellido1Check);

function apellido2Check() {
  const pattern = /^[a-zA-ZñÑ\s]+$/; // Permitir solo letras
  if (!pattern.test(apellido2.value) && apellido2.value) {
    mostrarError("No se admiten caracteres especiales ni números");
    return false;
  } else {
    ocultarError();
    return true;
  }
  
}
apellido2.addEventListener('focusout',apellido2Check);
function fechaCheck() {
  const patternDate = /^\d{2}\/\d{2}\/\d{4}$/; // Permitir dd / mm / yyyy
  const date = fecha.value.trim();
  if (!patternDate.test(date)) {
    mostrarError("La fecha no esta en el formato correcto. dd// mm / yyyy");
  } else if (new Date().getFullYear() -new Date(date).getFullYear() < 18) {
    mostrarError("Eres menor");
  } else if(fecha.value == ""){
    mostrarError("Rellene la fecha por favor.");
  }else{
    ocultarError();
    return true;
  }
  return false;
}
fecha.addEventListener('focusout',fechaCheck);
function estudiosCheck() {
  if (estudios.value != "Doctorado" && estudios.value != "Libre") {
    mostrarError("Rellene sus estudios");
  }else {
    ocultarError();
    return true;
  }
  return false;
}
estudios.addEventListener('focusout',estudiosCheck);
function cursoCheck() {
  const pattern = /^[a-zA-ZñÑ\s]+$/; // Permitir solo letras
  if (select.value < 2000 || select.value > new Date().getFullYear()) {
    mostrarError("Esa fecha es incorrecta");
  } else {
    ocultarError();
    return true;
  }
  return false;
}
select.addEventListener('focusout',cursoCheck);
telefono.addEventListener('focusout',telefonoCheck);
function telefonoCheck() {
  const pattern = /^\d{9}$/; // Permitir solo letras
  if (!telefono.value || telefono.value.length < 9) {
    mostrarError("Rellene el telefono por favor.");
  } else if (!pattern.test(telefono.value)) {
    mostrarError("No se admiten caracteres especiales ni letras");
  } else {
    ocultarError();
    return true;
  }
  return false;
}

// Función para mostrar el modal con el mensaje de error
function mostrarError(mensaje) {
    modal.innerHTML = '<p>'+mensaje+'</p>';
        error.style.display = "block";
    }
        // Función para ocultar el modal de errores
   function ocultarError() {
        error.style.display = "none";
   }
   function mostrarResultado(mensaje) {
    modal.innerHTML = mensaje;
        error.style.display = "block";
    }
        // Función para ocultar el modal de errores
   function ocultarError() {
        error.style.display = "none";
   }

  // Evento para cerrar el modal al hacer clic en "X"
  erroresCerrar.addEventListener('click',
  function() {
    ocultarError();
  });
document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault();
    if(!nombreCheck() || !apellido1Check()  || !apellido2Check() || !fechaCheck() || !estudiosCheck() || !cursoCheck() || !telefonoCheck()){
        
    }else{
        const alumno = new Alumno(nombre.value,apellido1.value,apellido2.value,fecha.value,estudios.value,select.value,telefono.value);
        const cadena = alumno.mostrar(); 
        mostrarResultado(cadena);
    }
    
})
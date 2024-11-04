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
nombre.addEventListener('focusout',
function() {
  const pattern = /^[a-zA-Z]+$/; // Permitir solo letras
  if (!nombre.value) {
    mostrarError("Rellene el nombre por favor.");
  } else if (!pattern.test(nombre.value)) {
    mostrarError("No se admiten caracteres especiales ni números");
  } else {
    ocultarError();
    contador++;
  }
});
apellido1.addEventListener('focusout',
    function() {
      const pattern = /^[a-zA-Z]+$/; // Permitir solo letras
      if (!apellido1.value) {
        mostrarError("Rellene el apellido por favor.");
      } else if (!pattern.test(apellido1.value)) {
        mostrarError("No se admiten caracteres especiales ni números");
      } else {
        ocultarError();
        contador++;
      }
    });

apellido2.addEventListener('focusout',
function() {
  const pattern = /^[a-zA-Z]+$/; // Permitir solo letras
  if (!pattern.test(apellido2.value) && apellido2.value) {
    mostrarError("No se admiten caracteres especiales ni números");
  } else {
    ocultarError();
    contador++;
  }
});
fecha.addEventListener('focusout',
    function() {
      const patternDate = /^\d{2}\/\d{2}\/\d{4}$/; // Permitir dd / mm / yyyy
      const date =new Date(fecha.value);
      if (patternDate.test()) {
        mostrarError("No se admiten caracteres especiales ni letras");
      } else if (new Date().getFullYear() -date.getFullYear() < 18) {
        mostrarError("Eres menor");
      } else if(fecha.value == ""){
        mostrarError("Rellene la fecha por favor.");
      }else{
        ocultarError();
        contador++;
      }
    });
estudios.addEventListener('focusout',
function() {
  if (estudios.value != "Doctorado" && estudios != "Libre") {
    mostrarError("Rellene sus estudios");
  }else {
    ocultarError();
    contador++;
  }
});
select.addEventListener('focusout',
function() {
  const pattern = /^[a-zA-Z]+$/; // Permitir solo letras
  if (select.value < 2000 || select.value > new Date().getFullYear()) {
    mostrarError("Esa fecha es incorrecta");
  } else {
    ocultarError();
    contador++;
  }
});
telefono.addEventListener('focusout',
function() {
  const pattern = /^\d{9}$/; // Permitir solo letras
  if (!telefono.value || telefono.value.length < 9) {
    mostrarError("Rellene el telefono por favor.");
  } else if (!pattern.test(telefono.value)) {
    mostrarError("No se admiten caracteres especiales ni letras");
  } else {
    ocultarError();
    contador++;
  }
});

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
    modal.innerHTML = '<ul>'+mensaje+'</ul>';
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
    if(!nombre.value || !apellido1.value || !fecha.value || !estudios.value || !select.value || !telefono.value){
        mostrarError("Te has dejado campos sin rellenar!");
    }else{
        const alumno = new Alumno(nombre.value,apellido1.value,apellido2.value,fecha.value,estudios.value,select.value,telefono.value);
        mostrarResultado(alumno.mostrar());
    }
    
})
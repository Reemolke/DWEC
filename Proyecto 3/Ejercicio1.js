class Alumno{
    constructor(nombre, apellido1, apellido2,fechaNacimiento,estudios,curso,telefono){
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.fechaNacimiento = fechaNacimiento;
        this.estudios = estudios;
        this.curso = curso;
        this.telefono = telefono;
    }
    mostrar(){
      const array= ["nombre","apellido1","apellido2","fechaNacimiento","estudios","curso","telefono"];
      document.write('<ul>');
        array.forEach((item)=>{
            document.write('<li>'+this[item]+'</li>');
        });
      document.write('</ul>');
    }
}
const alumno= new Alumno("Alumno", 0,0,0,0,0,0);
alumno.mostrar();
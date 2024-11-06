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
      let cadena="";
        array.forEach((item)=>{
            cadena+=('<p>'+item+": "+this[item]+'</p><br>');
        });
      return cadena;
    }
}

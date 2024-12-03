let button = document.getElementById('crearPJ');
let clase = document.getElementById('clase');
let nombre = document.getElementById('nombre');
let pj;
let enemigo;
const regex = /^[A-Za-z]+$/;


class Personaje {
    constructor(nombre, equipo) {
      this.nombre = nombre;
      this.hp = 10;
      this.daño = 20;
      this.equipo = equipo;
      this.defensa = false;
    }
  
    atacar(contricante) {
      let img = document.getElementById(this.equipo);
      
      
      if (!contricante.defensa) {
        img.setAttribute('src', "Attack.gif");
        setTimeout(() => {
            contricante.recibirDaño(this.daño);
            img.setAttribute('src', "Hit.gif");
            setTimeout(() => this.idle(), 800);
          }, 500);
      } else {
        // Solo desactiva la defensa si se estaba defendiendo
        contricante.setDefensa(false);
      }
      
    }
  
    recibirDaño(daño) {
      let img = document.getElementById(this.equipo); //Cojo la imagen para cambiarla despues
      if (!this.defensa) {
        this.hp -= daño;
        if (this.hp <= 0) {
            this.morir();
          } else {
            
            img.setAttribute('src', "Hit.gif"); //Cambio el atributo src
            setTimeout(() => this.idle(), 800);
          }
          this.mostrar(); //Actualizo el DOM
      }
      
    }
  
    morir() {
        let pelea = document.getElementsByTagName('body');
        let text = "Enemigo";
        if(this.equipo == "jugadorGif"){
            pelea[0].innerHTML ="<h1>Has perdido!!</h1>";
        }else{
            pelea[0].innerHTML ="<h1>Has ganado!</h1>";
        }
        
    }
  
    idle() {
      let img = document.getElementById(this.equipo);
      img.setAttribute('src', "Idle.gif");
    }
  
    defender() {  //Cambia la imagen para defender
      this.setDefensa(true);
      let img = document.getElementById(this.equipo);
      img.setAttribute('src', "Shield.gif");
    this.hp +=20;
      // Regresa la defensa al estado normal después de un tiempo
      setTimeout(() => {
        this.setDefensa(false); //Quita la defensa 
        this.idle();
      }, 800);
  
      this.mostrar();
    }
  
    setDefensa(bool) {
      this.defensa = bool;
    }
  
    mostrar() { //Dependiendo de si es jugador o enemigo cambia x elementos o y elementos.
      if (this.equipo === "jugadorGif") {
        let nombreJugador = document.getElementById('nombreJugador');
        nombreJugador.textContent = this.nombre;
        let hp = document.getElementById('vida');
        hp.textContent = "HP :" + this.hp;
        let daño = document.getElementById('daño');
        daño.textContent = "Daño : " + this.daño;
      } else {
        let nombreJugador = document.getElementById('nombreEnemigo');
        nombreJugador.textContent = this.nombre;
        let hp = document.getElementById('vidaEnemigo');
        hp.textContent = "HP :" + this.hp;
        let daño = document.getElementById('dañoEnemigo');
        daño.textContent = "Daño : " + this.daño;
      }
    }
  }
  
function crearPJ(){
    if(nombre.value.length > 0 && regex.test(nombre.value)){
        pj = new Personaje(nombre.value,"jugadorGif");
        enemigo = new Personaje("Mago malvado","enemigoGif");
        pj.mostrar();
        enemigo.mostrar();
    }else{
        alert("Rellena el nombre solo con letras");
    }
    
    
}
function atacar(atacante,atacado){
    atacante.atacar(atacado);
    randomAction();
}
function bloquear(defensor){
    defensor.defender();
    randomAction();
}
function randomAction() {
    // Modificar el rango de probabilidad para que ataque más veces que defienda
    let accion = Math.floor(Math.random() * 10); // Genera un número entre 0 y 9
  

    if (accion < 7) { // 60% de probabilidad de ataque
      enemigo.atacar(pj);
    } else { // 20% de probabilidad de defensa
      enemigo.defender();
    }
  }
  

let ataque = document.getElementById('atacar');
ataque.addEventListener('click', ()=> atacar(pj,enemigo));
let defender = document.getElementById('defender');
defender.addEventListener('click', ()=> bloquear(pj));



let input;
while(input.contains('C')){
  input = prompt("Introduzca numeros para hacer su mcm, para salir pulse C")
}
function Padovan(number){

  if(number > 2){
    return Padovan(number-2)+Padovan(number-3)
  }else{
    return 1;
  }
  
}
let x = 0;
while(x < 100){
  
  console.log(Padovan(x))
  x = x+1;
}

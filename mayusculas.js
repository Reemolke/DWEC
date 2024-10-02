const prompt = require("prompt-sync")();
function capitalizer(string){
    let frase ="";
      for(i= 0;i<string.length;i++){
        
        if(string.charAt(i-1) == ' ' ){
         frase += (string.charAt(i).toUpperCase());
         
        }else{
            frase+=(string.charAt(i))
          }
  
        }
        console.log(frase)
      }
    
    
    let userinput = prompt("Introduzca su frase");
    capitalizer(userinput)
  
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 9];

numeroFaltante();
function numeroFaltante(){
      const length = numeros.length ;
      const suma = [length*(length + 1)]/2;
      let sumaArray = 0;
      for(let i = 0; i < length; i++){
         sumaArray = sumaArray + numeros[i];
      }
      const elementoFaltante = suma - sumaArray;
      if(elementoFaltante >= 0){
         console.log(elementoFaltante);
      }else{
         console.log("El formato de este array, para este ejerccio es incorrecto");
      } 
}

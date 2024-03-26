//Variables
var nombre = prompt("¿cual es tu nombre?");
var numeroEnBitcoin = prompt("Digite el número de Bitcoin a convertir");
var cotizacionEnEuros = 64677.95;
var valorEnEuros = numeroEnBitcoin * cotizacionEnEuros;

valorEnEuros = valorEnEuros.toFixed(2);

alert(
  "Hola " +
    nombre +
    ", " +
    "la conversión de " +
    numeroEnBitcoin +
    " Bitcoin a euros son: € " +
    valorEnEuros +
    " Euros"
);
//---------------------------------------------------------------------------------
var temperatura = prompt("¿Cual es la temperatura que quieres convertir");
    console.log(temperatura);
  temperatura = parseInt(temperatura);
    console.log(typeof(temperatura));
var unidad = prompt("¿Cual es su unidad de temperatura? \n Digita 1 para kelvin \n Digita 2 para celsius \n Digita 3 para fahrenheit");
//La unidad de la temperatura a convertir esta alojada en la variable unidad
    console.log(unidad);
  unidad = parseInt(unidad);
    console.log(typeof(unidad));
var unidadAConvertir = prompt("¿A que unidad de temperatura la deseas convertir? \n Digita 1 para kelvin \n Digita 2 para celsius \n Digita 3 para fahrenheit");
    console.log(unidadAConvertir);
  unidadAConvertir = parseInt(unidadAConvertir);
    console.log(typeof(unidadAConvertir));

    if(unidad === 1 && unidadAConvertir === 1 ){
       temperatura = parseInt(temperatura);
      alert(`El resultado es: ${temperatura} Kelvin`);
      console.log(typeof(temperatura));
      } 

    if(unidad === 1 && unidadAConvertir === 2 ){
      let resultado = temperatura - 273.15;
      console.log(typeof(resultado));
      resultado = resultado.toFixed(2);
      alert(`El resultado es: ${resultado} Kelvin`);
      } 
       
    if(unidad === 1 && unidadAConvertir === 3 ){
      let resultado = (temperatura - 273.15) * 9/5 + 32;
      resultado = resultado.toFixed(2);
      alert(`El resultado es: ${resultado} Kelvin`);
      } 

    if(unidad === 2 && unidadAConvertir === 1 ){
        let resultado = (temperatura + 273.15) * 1;
        resultado = resultado.toFixed(2);
        alert(`El resultado es: ${resultado} celsius`);
      } 

    if(unidad === 2 && unidadAConvertir === 2 ){
        temperatura = parseInt(temperatura);
        alert(`El resultado es: ${temperatura} celsius`);
        console.log(typeof(temperatura));

      }  

    if(unidad === 2 && unidadAConvertir === 3 ){
        let resultado = temperatura * 9/5 + 32;
        resultado = resultado.toFixed(2);
        alert(`El resultado es: ${resultado} celsius`);
      }

    if(unidad === 3 && unidadAConvertir === 1 ){
        let resultado = (temperatura - 32) * 5/9 + 273.15;
        resultado = resultado.toFixed(2);
        alert(`El resultado es: ${resultado} fahrenheit`);

      }

    if(unidad === 3 && unidadAConvertir === 2 ){
        let resultado = (temperatura - 32) * 5/9;
        resultado = resultado.toFixed(2);
        alert(`El resultado es: ${resultado} fahrenheit`);

      }

    if(unidad === 3 && unidadAConvertir === 3 ){
        temperatura = parseInt(temperatura);
        alert(`El resultado es: ${temperatura} fahrenheit`);
        console.log(typeof(temperatura));

      }  
      if(unidad > 3 || unidad < 1 ){
         alert("Error datos fuera de rango.");
      } 
      if(unidadAConvertir > 3 || unidadAConvertir < 1 ){
        alert("Error datos fuera de rango.");
     } 

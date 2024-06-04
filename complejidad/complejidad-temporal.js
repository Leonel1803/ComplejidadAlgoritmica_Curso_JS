//Performance.now: nos ayuda a medir el tiempo entre lineas de código en milisegundos
// const performance = require("perf_hooks");

// function contar(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
// }

// let inicio_tiempo = performance.performance.now(); //performance.now
// contar(5);
// let final_tiempo = performance.performance.now();
// let duracion = final_tiempo - inicio_tiempo; //Duración entre inicio y finalización de la función

// console.log(`El algoritmo contar ha durado ${duracion}ms.`);

//Console.time: sirve para lo mismo que performance pero es menos preciso
function contar(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
  
console.time("duracion-contar");
contar(2000);
console.timeEnd("duracion-contar"); //Duración entre inicio y finalización de la función
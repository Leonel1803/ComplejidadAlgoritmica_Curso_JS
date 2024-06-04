//Entre más variables, objetos o arrays se creen. Implica más espacio consumido

function contar(n) {
    for (let i = 0; i < n; i++) {
      console.log(i);
    }
}
  
function repetir(arreglo) {
    let arreglo_repetido = arreglo;
    return arreglo_repetido;
}
  
function convertirAString(arreglo) {
    let resultado = arreglo.map((elemento) => elemento.toString());
    return resultado;
}
  
function dosDimensiones(valor) {
    let x = new Array(valor);
    for (let i = 0; i < valor; i++) {
      x[i] = new Array(valor).fill(0);
    }
    return x;
}
  
console.log(dosDimensiones(5));

/*
  Cada compilador asigna un espacio distinto de memoria para 
  almacenar números o palabras
*/
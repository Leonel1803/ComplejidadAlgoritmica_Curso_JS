/**
 * Complejidad Temporal -> O(n^2 + 6) -> O(n^2)
 * Complejidad Espacial -> O(n + 4) -> O(n)
 * Espacio Auxiliar -> Complejidad espacial - Espacio de entrada -> O(4) -> O(1)
*/
function bubbleSort(arreglo) { // O(n) Espacial
    let longitud = arreglo.length; // O(1) Temporal, O(1) Espacial
    for (let i = 0; i < longitud; i++) { // O(n) Temporal, O(1) Espacial
      for (let j = 0; j < longitud; j++) { // O(n) Temporal, O(1) Espacial
        if (arreglo[j] > arreglo[j + 1]) { // O(1) Temporal,
          let temporal = arreglo[j]; // O(1) Temporal, O(1) Espacial
          arreglo[j] = arreglo[j + 1]; // O(1) Temporal,
          arreglo[j + 1] = temporal; // O(1) Temporal,
        }
      }
    }
    return arreglo; // O(1) Temporal,
}
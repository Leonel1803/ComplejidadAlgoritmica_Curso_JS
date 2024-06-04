/**
 * Complejidad Temporal -> O(n^2 + 9) -> O(n^2)
 * Complejidad Espacial -> O(n + 5) -> O(n)
 * Espacio Auxiliar -> Complejidad espacial - Espacio de entrada -> O(5) -> O(1)
*/

function selectionSort(arreglo){ // O(n) Espacial
    let longitud=arreglo.length; // O(1) Temporal, O(1) Espacial
    for(let i=0;i<longitud;i++){ // O(n) Temporal, O(1) Espacial
        let minimo=i; // O(1) Temporal, O(1) Espacial
        for(let j=i+1;j<longitud;j++){ // O(n) Temporal, O(1) Espacial
            if(arreglo[j]<arreglo[minimo]){ // O(1) Temporal,
                minimo=j; // O(1) Temporal,
            }
        }

        if(minimo!=i){ // O(1) Temporal,
            let temporal=arreglo[i]; // O(1) Temporal, O(1) Espacial
            arreglo[i]=arreglo[minimo]; // O(1) Temporal,
            arreglo[minimo]=temporal; // O(1) Temporal,
        }
    }

    return arreglo; // O(1) Temporal,
}
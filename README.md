# Función que divida un array en partes de tamaño n, donde n es la longitud de cada parte.

## Datos de ejemplo
* Lista de datos [2, 3, 4, 5, 6, 7, 8, 9, 10]
* n = 2

Array dividido: [2,3], [4,5], [6,7], [8,9], [10]

```js
    function arrayToChunk (arr, size) {
        let result = [];  
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));       
        }
        return result;
    };
```

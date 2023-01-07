function arrayToChunk (arr, size) {
    let result = []; // creamos un array vacio donde se almacena el array dividido    
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
        /*
            Devolvemos un array del array total definiendo un inicio y fin
            (este va cambiando con cada vuelta del for).Lo añadimos al final
            del array de result.
        */
	}
	return result;
};

let response = arrayToChunk([2, 3, 4, 5, 6, 7, 8, 9, 10], 2); //[2,3], [4,5], [6,7], [8,9], [10]

console.log("==== response ====");
console.log(response);
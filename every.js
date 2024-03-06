const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// LOs ELELMTOD SON MAYORES QUE 5 
const resultArray = array.every(elemento => elemento >0 );
console.log(resultArray); // false


//los elementos son menores que 12
const resultArray2 = array.every(elemento => elemento <12);
console.log(resultArray2); // true
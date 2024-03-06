const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 

//os elementos son mayores que el numer 6
const resultArray = array.some(elemento => elemento>6);
console.log(resultArray); // true

//todos los elementos son aon menores que 0
 const resultArray2 = array.some(elemento => elemento < 0);
    console.log(resultArray2); // false

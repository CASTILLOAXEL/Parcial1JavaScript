const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//los elementos son mallores que 5 

const resultArray = array.every(elemento => elemento > 5);  
console.log(resultArray); //false

//los elementos son menores que 10

const resulArray2 = array.every(elemento => elemento < 15);
console.log(resulArray2); //false
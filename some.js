const array = [1,2,3,4,5,6,7,8,9,10];
/// los elementos mayores a 5

const resultArray = array.some(elemento => elemento >5);
console.log(resultArray);//trhue

//los elementos menores que 0
const resulArray2 = array.some(elemento => elemento < 0);
console.log(resulArray2); //false
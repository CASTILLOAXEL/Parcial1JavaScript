const array = [2,8,6,4,3,9,7,1,5,2,5,4];

//Ordenar de forma decentee
const resultArray = array.sort((a,b)=> a>b ? 1 : -1);
console.log(resultArray);

//ordenamos de forma acendente

const resulArray2 = array.sort((a,b) => a>b ? -1 : 1);
console.log(resulArray2);
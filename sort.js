const array =[1,8,,3,7,9,1,5,9,12,20];


//ordenar desendente 
const  desendente = array.sort((a,b)=> a>b ? -1 : 1);
console.log(desendente);

//ordenar asendente
const  asendente = array.sort((a,b)=> a>b ? 1 : -1);
console.log(asendente);
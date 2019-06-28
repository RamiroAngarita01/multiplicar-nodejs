// let Getholamundo=()=>console.log('Hola mundo');
// Getholamundo();
// let saludar = (nombre)=>{
// console.log(`Hola ${nombre}`);
// }
// saludar('Ramiro');
let deadpool ={
    nombre:'wade',
    apellido:'winston',
    poder:'Regeneración',
    getNombre:function(){
        return `${this.nombre} ${this.apellido}-${this.poder}`;
    }
}
console.log(deadpool.getNombre());
/*
en una funcion de flecha se usa la flecha => para indicar que se va a retornar el valor que desean*/
let getsaludo=(param)=>{
    console.log(`Hola mi nombre es: ${param.nombre} ${param.apellido}`);
}
/**En teoria solo se quita la palabra function se usa un let + el nombre se iguala a los argumentos o parametros y se retorna con la flecha */
// var a,b;
// let suma=(a,b)=>a+b;
// setTimeout(() => {
// console.log(suma(5,10));
// }, 3000);

let lista={
    name:'Juan',
    salario:'100',
    edad:'20'
}

let getusuarios=(lista)=>lista;

console.log(getusuarios(lista));
/** 
 * Confeccionar una función a la cual le envíe tres enteros y retorne el mayor de ellos.
*/
let getenteros=(e1,e2,e3)=>{
    if(e1>e2 &&e1>e3){
        console.log(`El mayor es: ${e1}`);
    }else if(e2>e1 && e2>e3){
         console.log(`El mayor es: ${e2}`);
    }else if(e3>e1&&e3>e2){
        console.log(`El mayor es: ${e3}`);  
    }else{
         console.log(`Hay valores iguales`);
    }
}
getenteros(10,44,3);
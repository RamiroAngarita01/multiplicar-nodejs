const fs =require("fs");
const colors = require('colors');
let dato='';
let listarTabla= (base,limite)=>{
console.log('================='.green);
console.log(`Tabla de multiplicar del ${base}`.green);
console.log('================='.green);

    return new Promise ((resolve,reject)=>{

        if(!Number(base)){
         reject(`El valor ingresado ${base} no es un numero`)
       
        }else if( !Number(limite)){
         reject(`El valor ingresado ${limite} no es un numero`)

        }else{
            for (let i = 1; i <=limite; i++) {
             console.log(`${base} * ${i} = ${base * i}\n`.yellow);
                 resolve(`tabla del ${base} listada con exito`.green);
            }
        }
    })
}

let crearAchivo =(numero,limite)=>{
    return new Promise((resolve,reject)=>{          
        if(!Number(numero)){                                                            
             reject(`El valor ${numero}  no es un numero`);
             return
        }else{
            for (let i = 1; i <=limite; i++) {
             dato += `${numero} * ${i} = ${numero * i}\n`;
            }
             fs.writeFile(`./multiplicar/tabla-del${numero}.txt`,dato, err=>{
               if(err)
               throw err;
           resolve(`tabla-del${numero}.txt`.blue);
             })           
        }              
    })
}
module.exports={
    crearAchivo,
    listarTabla
}


    
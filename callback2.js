let empleados=[{
    id:1,
    nombre:'Ramiro',
    apellido:'Angarita',
},{
    id:2,
    nombre:'Fernando',
},{
    id:3,
    nombre:'Juan',
}];
let salarios =[{
    id:1,
    salario:1000,
},{
    id:2,
    salario:2000,
}];
let getempleados=(id,callback)=>{
 let dbempleado = empleados.find(empleado=>empleado.id===id);
if(!dbempleado)
{callback(`Empleado con id: ${id} No existe`)}

else{callback(null,dbempleado);}
}

let getsalarios=(empleado,callback)=>{

    let dbsalario = salarios.find(salario=>salario.id === empleado.id);
     if(!dbsalario){
         callback(`El salario del usuario con ${id} No existe`);
     }else{
        callback(null,{
        name:empleado.nombre,
        sueldo: dbsalario.salario});
     }
}





getempleados(1,(err,paramcallback)=>{
    if(err){
     return console.log(err);
    }

    console.log(`Los datos del empleado son: `,paramcallback);

    getsalarios(paramcallback,(err,saldo)=>{
        if(err){
          return console.log(err);
        }
        console.log(saldo);
    })
});


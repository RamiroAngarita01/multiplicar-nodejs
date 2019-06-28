// let getNumeros=(id,funcion)=>{
//     let objeto ={
//         name:'Ramiro',
//         apellido:'Angarita',
//         edad:23
//     }
//     if(id===20){
//         funcion(`El usuario ${id} no existe`);
//     }else{
//         funcion(null,objeto)
//     }
// }
// getNumeros(20,(err,usuario)=>{
//     if(err){
//         return console.log(err);
//     }
// console.log('El usuario es: ',usuario);
// });


// let empleados=[{
//     id:1,
//     nombre:'Ramiro',
// },{
//     id:2,
//     nombre:'Fernando',
// },{
//     id:3,
//     nombre:'Juan',
// }];

// let getEmpleados=(id,callback)=>{
//     let DBempleado = empleados.find(empleado => empleado.id === id);
//     if(!DBempleado){
//         callback(`El empleado con id ${id} no existe`);
//     }else{
//         callback(null,DBempleado);
//     }

//     }
// getEmpleados(3,(err,respuesta)=>{
// if(err){
//    return console.log(err)
// }
//     console.log(`Los datos del empleado son: `,respuesta);
// });
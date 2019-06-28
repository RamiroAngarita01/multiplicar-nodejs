let empleados=[{
    id:1,
    nombre:'Ramiro',
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

 let getEmpleado = async (id)=>{
 
    let empleadoDB=  empleados.find(empleado=> empleado.id === id);
    if(!empleadoDB){
        throw new Error(`No existe un empleado con el ID ${id}`);
        
    }else{
        return(empleadoDB);
    }
   
  }
 
  let getsalarios = async(empleado)=>{
           let dbSalarios = salarios.find(salario=>empleado.id === salario.id);
           if(!dbSalarios){
            throw new Error (`se encontro un salario para ${empleado.nombre}`);
          }else{
              return ({
                nombre:empleado.nombre,
                salario:dbSalarios.salario,
                id:empleado.id,  
              })
          }
  
  }

let informacion = async(id)=>{
    let empleado = await getEmpleado(id);
    let resp = await getsalarios(empleado);
   return `${resp.nombre} tiene un salario de ${resp.salario}`;
}

informacion(10).then(mensaje=>{
    console.log(mensaje);
}).catch(err=> console.log(err))


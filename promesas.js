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
 let getEmpleado = (id)=>{
   return new Promise((resolve,reject)=>{
    let empleadoDB=  empleados.find(empleado=> empleado.id === id);
    if(!empleadoDB){
        reject(`No existe un empleado con el ID ${id}`);
    }else{
        resolve(empleadoDB);
    }
   })     
   
  }
  getEmpleado(2).then(empleado=>{
      console.log('Empleado de la BD',empleado);

      getsalarios(empleado).then(resp=>{
       console.log(`El salario de ${resp.nombre} es de ${resp.salario} `);
      },err=>console.log(err))
     
  },(err)=>{
      console.log(err);
  })

  let getsalarios =(empleado,id)=>{
      return new Promise((resolve,reject)=>{
          let dbSalarios = salarios.find(salario=>empleado.id === salario.id);

          if(!dbSalarios){
            reject(`No existe empleado${id}`);
          }else{
              resolve({
                nombre:empleado.nombre,
                salario:dbSalarios.salario,
                id:empleado.id,  
              })
          }
      })
  }


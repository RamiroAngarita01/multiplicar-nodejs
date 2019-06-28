let objeto={
    nombre:"Ramiro",
    apellido:"Angarita",
    cambiaNombre:function(){
        this.nombre="Pedro";
    },

}

//  let{nombre,apellido}=objeto;
 
// console.log(nombre, apellido);
//si quiero cambiar el nombre de la proiedad hacemos lo siguiente
let{nombre:primerNombre,apellido}=objeto;
console.log(primerNombre,apellido);
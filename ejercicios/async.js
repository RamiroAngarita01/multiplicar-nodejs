let usuarios=[{
    id:1,
    nombre:'Ramiro',
},{
    id:2,
    nombre:'Fernando',
},{
    id:3,
    nombre:'Juan',
}];
let productos =[{
    id:1,
    nombre:'camisa',
    valor:1000,
},{
    id:2,
    nombre:'pantalon',
    valor:5000,
},{
    id:3,
    nombre:'medias',
    valor:4000,
}
];

let getProductos = async(data)=>{
      var listaproducto = productos;
      let mensaje = "";
  
    if(data){

    if(!listaproducto){
    throw new Error('La lista de productos no existe {No hay datos}');
   }else{
        mensaje = 'Listado de productos: ';
        console.log(mensaje);

        listaproducto.forEach(element => {
        return console.log(element);
   });
}
      
    }
    else{
        mensaje ='Quiere ver el listado de productos?';
        console.log(mensaje);
    }

}

let activar = async(accs)=>{
 await getProductos(accs);
}
activar(true).catch(err=>{
    console.log(err);
})


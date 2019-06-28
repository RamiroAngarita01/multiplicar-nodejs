const {crearAchivo} = require('./multiplicar/multiplicar');
const {listarTabla} = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

// console.log(argv);

let comando = argv._[0];
switch (comando) {
    case 'listar':
            listarTabla(argv.base,argv.limite).then(informacion=>{
                console.log(informacion);
            }).catch(err=>{
                console.log(err);
            })
        break;
case 'crear':
    console.log(argv.base);
        crearAchivo(argv.base,argv.limite).then(informacion=>{
            console.log('Archivo creado:',informacion);
        }).catch(err=>{
            console.log(err);
        });
    break;
    default:
        console.log('comando no reconocido');
        break;
}



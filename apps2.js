const argv = require('./config/yargs').argv;
// var colors = require('colors');
var colors = require('colors/safe');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        // console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then((result) => {
                console.log(result.yellow);
            }).catch((err) => {
                console.log(err);
            });
        break;
    case 'crear':
        // console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                // 4 formas de hacer lo mismo
                // console.log(`Archivo creado: ${archivo}`);
                // console.log(`Archivo creado: ${archivo.yellow}`);
                // console.log('Archivo creado:', `${archivo}`.yellow)
                console.log('Archivo creado:', colors.yellow(archivo))
            })
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}

// cons ole.log(comando);
// console.log(argv);
// let argv2 = process.argv;

// console.log(argv.base);
// console.log('Limite', argv.limite);
// console.log(argv2);

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(process);
// console.log(base);
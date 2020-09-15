// console.log(module);

let base = 6;
// let base = 'abc';
// let base = '7';

// const multiplicar = require('./multiplicar/multiplicar');
// // console.log(multiplicar);
// multiplicar.crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`));


const { crearArchivo } = require('./multiplicar/multiplicar');

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err));
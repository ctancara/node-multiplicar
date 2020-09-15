// Tipos de required
const fs = require('fs'); // Paquete nativo
var colors = require('colors');

// import { writeFile } from 'fs'; // Paquete nativo
// const fs = require('express');  Paquetes no nativos
// const fs = require('./mipaquete');  Paquetes propios diseñados

// Otra forma sin usar let
// module.exports.crearArchivo = (base) => {

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor base introducido ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor limite introducido ${limite} no es un numero`);
            return;
        }

        let data = '';

        console.log('================================'.green);
        console.log(`  Tabla de multiplicar del ${base}`.green);
        console.log('================================'.green);

        for (let i = 1; i <= limite; i++) {
            // console.log(`${base} * ${i} = ${base*i}`);
            data += `${base} * ${i} = ${base*i}\n`;
        }

        resolve(data);
    })
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            // console.log(`${base} * ${i} = ${base*i}`);
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });

    })
}

// module.exports = {
//     crearArchivo: crearArchivo
// }

module.exports = {
    crearArchivo, // con ES6 no hace falta colocar el nombre de la funcion a la derecha si es el mismo como arriba
    listarTabla
}
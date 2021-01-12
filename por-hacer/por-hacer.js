const fs = require('fs');

let tareasPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(tareasPorHacer)

    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo grabar', err)
        }
    })

}

const cargar = () => {

    try {

        tareasPorHacer = require('../db/data.json');

    } catch (error) {

        tareasPorHacer = [];

    }

}

let getListado = () => {

    cargar();
    return tareasPorHacer;

}


let crear = (descripcion) => {

    let porHacer = {
        descripcion,
        completado: false
    }

    tareasPorHacer.push(porHacer);

    guardarDB();

    cargar();
    return porHacer;

}

const actualizar = (descripcion, completado = true) => {

    cargar();

    let index = tareasPorHacer.findIndex(tarea => descripcion === tareasPorHacer.descripcion);

    if (index >= 0) {
        return true;
    } else {
        return false;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar
}
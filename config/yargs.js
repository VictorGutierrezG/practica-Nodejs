const argv = require('yargs')

.command('crear', 'Creando una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza una tarea por hacer', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'Actualizar una tarea'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Cambia el estado de la tarea'
        }
    })
    .help().argv;

module.exports = {
    argv
}
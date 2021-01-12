const argv = require('./config/yargs').argv;

const colors = require('colors');

const porhacer = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porhacer.crear(argv.descripcion);
        console.log(tarea)
        break;

    case 'listar':
        let listado = porhacer.getListado();

        for (const lista of listado) {
            console.log('====== Tareas por hacer ======'.green);
            console.log(lista.descripcion);
            console.log('Estado: ' + lista.completado);
            console.log('=============================='.green);
        }
        break;

    case 'actualizar':
        let actualizar = porhacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);
        break;

    default:
        console.log('comando no reconocido')
        break;
}
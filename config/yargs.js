const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea a realizar'

}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca la tarea como completado'
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado a completado en una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}
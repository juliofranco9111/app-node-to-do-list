const argv = require('./config/yargs').argv;
const porHacer = require('./to-do/to-do');
const colors = require('colors');



//guardamos lo que nos trae el yarg como comando

let comando = argv._[0];

//ejecutamos la funcion switch para los distintos comandos
switch (comando) {

   case 'crear':
      let tarea = porHacer.crear(argv.descripcion);
      console.log(tarea);
      break;

   case 'listar':
      let listado = porHacer.getListado();

      for (let tarea of listado) {
         console.log('=====Por hacer====='.cyan);
         console.log(tarea.descripcion);
         console.log('Estado', tarea.completado)
         console.log('==================='.rainbow);
      }

      break;

   case 'actualizar':

      let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);

      if (actualizado === false)
         console.log('No se pudo actualizar')
      else
         console.log('Actualizado correctamente');


      break;

      case 'borrar':

      let borrado = porHacer.borrar(argv.descripcion);
      console.log(borrado)

      break



   default:
      console.log('comando no reconocido')




}
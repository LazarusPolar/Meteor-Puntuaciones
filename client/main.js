// Importa de manera normla
//import './../imports/utils'

//Importa funcion declarada dentro de Utils
//Importa variable inicializada colocando comas en la declaracion
import {saludaUsuario, nombre} from './../imports/utils'
import {add} from './../imports/add'

console.log('Log from /client/main.js')
console.log(saludaUsuario() + nombre)
console.log(add(10, 10))
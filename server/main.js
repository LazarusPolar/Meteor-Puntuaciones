// ./ (Importa archivo local)
//import './../imports/utils'
import {saludaUsuario} from './../imports/utils'
import suma from './../imports/suma'

import {Meteor} from 'meteor/meteor'
// Se importa la funcion de Jugadores 
import {Jugadores} from '.././imports/api/jugadores'

// Funcion ejecutada al iniciar el proceso del servidor
Meteor.startup(function () {
    /*Jugadores.insert({
        nombre: 'Alemania2', 
        puntos: 30
    })

    Jugadores.insert({
        nombre: 'Rugal', 
        puntos: 30
    })*/
    // Retorna un puntero, por eso se le agrega "fetch()"
    //console.log(Jugadores.find().fetch())
})

console.log('Log from /server/main.js')
console.log(saludaUsuario())
console.log(suma(10,10))
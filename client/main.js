// Importa de manera normla
//import './../imports/utils'

//Importa funcion declarada dentro de Utils
//Importa variable inicializada colocando comas en la declaracion

// Valor por defecto fuera de las llaves, funciones y variables dentro de llaves
/*import valor, {saludaUsuario, nombre} from './../imports/utils'
import add from './../imports/add'

console.log('Log from /client/main.js')
console.log(saludaUsuario() + nombre)
console.log(add(10, 10))
console.log(valor)*/

//Importando las librerias de React
import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'
import {Jugadores} from './../imports/api/jugadores'

// La solucion para la carga de datos de MongoDB en lugar de realizar un Timeout y esperar ese tiempo
// para el re-renderizado de datos
import {Tracker} from 'meteor/tracker'


// Lo que no se debe hacer del lado del cliente para un minimongo
/* 
setTimeout(function() {
    console.log("Lista de jugadores: ", Jugadores.find().fetch())
}, 1000)*/


// Antigua manera de settear datos sin MongoDB (Hardcoded)
/*const jugadores = [{
    _id: '1',
    nombre: 'Jose',
    puntos: 99
},{
    _id: '2',
    nombre: 'Alberto',
    puntos: -1
}, {
    _id: '3',
    nombre: 'Roberto',
    puntos: 10
}]*/

const mostrarJugadores = function (listaDeJugadores) {
    //let numeros = [{val:1}, {val:2}, {val:3}, {val:101}]

    // Map: Se mapea el objeto y se decide que valor del objeto regresar
    return listaDeJugadores.map(function(jugador) {
        //return numero.val - 1;
        // NOTA IMPORTANTE: Para mapear y mostrar cada parrafo nuevo, se debe agregar la propiedad "KEY", el cual tiene que ser un 
        // identificador unico por cada elemento a mostrar (En este caso, _id es el identificador unico).
        return <p key = {jugador._id}>Jugador {jugador.nombre} tiene un score de: {jugador.puntos}</p>
    })

    //console.log(nuevosNumeros)
    ///return [<p key = "1">1</p>, <p key = "2">2</p>, <p key = "3">3</p>]
}

Meteor.startup(function(){

    Tracker.autorun(function(){
        //Jugadores.find().fetch()
    let jugadores = Jugadores.find().fetch();
    let titulo = "Puntuaciones"
    let nombre = 'Jose';

    /* JSX es HTML embebido dentro de HTML para entregarlo a la vista
    * Si se intente colocar otro tag dentro de la variable, esta ultima no se visualizara
    * La mejor solucion es usar un <div>
    * Para indentar el codigo se usan () para encerrar la expresion JSX y tener una mejor lectura del codigo */
   let jsx = 
   (<div>
       <h1>{titulo}</h1>
       <p>Hola. Soy un parrafo, {nombre}.</p>
       <p>Nuevo parrafo</p>
       {mostrarJugadores(jugadores)}
    </div>)

    // ReactDOM renderiza el JSX (Primer parametro) para convertirlo en HTML y mostrarlo en el contenedor (Segundo parametro)
    ReactDOM.render(jsx, document.getElementById('app'))
    })

    /** Inserta nuevo jugador cada que se guarde de nueva cuenta este documento
    * Esto se actualiza de inmediato de Minimongo (Cliente) a MongoDB (Server) por 
    * el protocolo DDP. */
      Jugadores.insert({
          nombre: 'Anita', 
          puntos: 38
      });

});


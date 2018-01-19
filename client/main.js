// Importa de manera normla
//import './../imports/utils'

//Importa funcion declarada dentro de Utils
//Importa variable inicializada colocando comas en la declaracion

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

Meteor.startup(function(){
    let nombre = 'Jose';

    // JSX es HTML embebido dentro de HTML para entregarlo a la vista
   let jsx = <p>Hola. Soy un parrafo, {nombre}.</p>;

   // ReactDOM renderiza el JSX (Primer parametro) para convertirlo en HTML y mostrarlo en el contenedor (Segundo parametro)
   ReactDOM.render(jsx, document.getElementById('app'))
});


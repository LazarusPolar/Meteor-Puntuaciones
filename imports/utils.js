console.log('Log desde /imports/utils.js');

let saludo = 'Hola'
export default saludo;

// La palabra 'export' hace que la funcion se exporte 
export let saludaUsuario = function () {
    return 'Hola, usuario!';
};

export let nombre = 'Jose Almaraz'
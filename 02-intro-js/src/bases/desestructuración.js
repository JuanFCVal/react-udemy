//Desestructuración de objetos
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}
// console.log(persona)
// console.log(persona.nombre)

// const { nombre } = persona;
let nombre = '';
const {nombre: nombre2, edad, clave} = persona
console.log(nombre2, edad, clave)

const retornaPersonaOBJ =  (usuario) => {
    return usuario
}
const retornaPersona =  ({nombre, edad, rango = 'Boludo'}) => {
    //If no rango, return Boludo
    return {
        nombreClave: nombre,
        anios: edad,
        rango: rango
    }
}
console.log(retornaPersonaOBJ(persona))
console.log(retornaPersona(persona))
const {nombreClave, anios} = retornaPersona(persona)
const avenger = retornaPersona(persona)
const {nombreClave: nombreClave2, anios: anios2} = avenger

console.log(nombreClave, anios)
console.log(nombreClave2, anios2)
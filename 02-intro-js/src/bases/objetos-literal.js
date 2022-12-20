const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {    
        ciudad: 'New York',
        zip: 5532145,
    }
}
const persona2 = {...persona} // Clonar el objeto persona
persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)
console.log({persona}) //Asignar el objeto persona a una variable
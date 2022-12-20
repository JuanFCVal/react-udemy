const saludar = (nombre) => {
    return `Hola ${nombre}`
}
const saludarSimplificado = (nombre) => `Hola ${nombre}`

const getUser = () => { //Function return object
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}

const getUser2 = () =>  //Function return object
({
    uid: 'ABC123',
    username: 'El_Papi1502'
})

// console.log(getUser())
// console.log(getUser2())
// console.log(saludar('Juan'))
// console.log(saludarSimplificado('Juan'))

// Tarea
//Función recibe un parametro y retorna un objeto literal
const userActive = (nombre) => ({
    uid: 'ABC12321',
    nombre: nombre
})
console.log(userActive('Pepito'))
const user = userActive('Juan')
console.log(user)

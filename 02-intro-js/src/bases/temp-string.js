//Temp String
const nombre = "Juan"
let apellido = "Cevallos"

const razonSocial =  `${nombre} ${apellido}`
console.log(` ${getSaludo(razonSocial)}`)

function getSaludo(nombre){
    return "Hola " + nombre
}
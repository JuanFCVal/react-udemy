const personajes = ["Goku", "Vegeta", "Trinks"];
const [p1] = personajes; //Get first element
console.log(p1)
const [,p2] = personajes;
console.log(p2) //Get second element;

const retornarArreglo = () => {
    return ['ABC',123]
}
const [letras, numeros] = retornarArreglo();
console.log(letras, numeros) //Obtiene los elementos por posición

const function1 = (valor) => {
    return [valor, () => {console.log("Hola mundo")}]
}
const arr = function1( ' Goku'); 
const [, funct] = arr;
funct()
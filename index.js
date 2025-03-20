//RESUELVE LOS EJERCICIOS AQUÍ
/*[ ] 1.- Dado el objeto **empleados**, extrae la empleada Ana completa.*/
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

let[, ana]=empleados;
function imprime({name,email}){
    console.log({name,email});
};
imprime(ana);

let [{email:emailLuis}]=empleados;
function correo(email){
    console.log(email);
};
correo(emailLuis);

//Ejecicio 3 - Dadas las variables a y b intercambia sus valores

const { a = 5, b = 3 } = { a: 3, b: 5 };
console.log(a);
console.log(b);


//Ejecicio 4 - Dado el objeto HIGH_TEMPERATURES cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };
  const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;
  console.log(maximaHoy);
  console.log(maximaManana);  

  //Ejercicio 5 - Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
  sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26

function sumEveryOther (...numeros){
    let suma= 0;
    for(let i = 0; i<numeros.length; i++){
        suma += numeros[i];
    }
    return suma;
};
console.log(sumEveryOther(1,1,1,1,1,1,1));

// 6.- Escribe una función llamada **addOnlyNums** que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números).
function addOnlyNums(...letrNum){
     let sumaLetNums=0;
     for(let i = 0; i<letrNum.length; i++){
        if(typeof letrNum[i] === 'number'){
            sumaLetNums +=letrNum[i];
        }
     }
    return sumaLetNums;
};
console.log(addOnlyNums(1,'uno',4));

//Ejercicio 7 - Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
function countTheArgs(...cuantosArg){
    return  cuantosArg.length ;
};

console.log(countTheArgs( 3,"gato", "perro",2,4,7));

//8 Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

function combineTwoArrays(...arr1){
    return [].concat(...arr1);
};
console.log(combineTwoArrays([1,2,3],[2,3]));

//9.- Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

function onlyUniques(...unico) {
    return unico.filter((item, index) => unico.indexOf(item) === index);
}
 console.log(onlyUniques(1,1,2,2,3,3));
 //10 Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array..
 //function combineAllArrays()

 //
 function combineAllArrays(...arr1){
    return [].concat(...arr1);
};
console.log(combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1]));

// Ejercicio 11 - Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.
function sumAndSquare(...sumaCuadrado){
 
    return sumaCuadrado.reduce((acc,actual)=> acc + (actual*actual),0);
 
};

console.log(sumAndSquare(1,2,3,4));
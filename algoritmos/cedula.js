let FN = prompt("Cual es tu año de nacimiento");
let FA = prompt("Cual es el año acutal");
let EDAD;

EDAD = FA-FN;

if (EDAD > 17){
console.log ("Es necesario que saques tu cedula de identidad.");
}else {
    console.log("No necesitas cedula de identidad.");
}

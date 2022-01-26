
// Codigo del cuadrado

console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden :" + ladoCuadrado + " cm");



function perimetroCuadrado(lado) {

    return lado * 4;

}



//console.log("El perimetro del cuadrado mide :" + perimetroCuadrado + " cm");

function areaCuadrado(lado) {

    return lado * lado;

}





//console.log("El área del cuadrado mide :" + areaCuadrado + " cm2");
console.groupEnd();











// Codigo del triángulo
console.group("Triángulos");
const lado1 = 6;
const lado2 = 6;
const base = 4;
const altura = 5.5;




function perimetroTriangulo(lado1, lado2, base) {

    return lado1 + lado2 + base;

}


function areaTriangulo(base, altura) {

    return (base * altura) / 2;

}








console.groupEnd();


console.group("Círculos");

//Radio

//const radio = 4;


// Diametro

function diametro(radio) {

    return radio * 2;

}




//Circunferencia

function perimetroCirculo(radio) {

    const diametro = diametro(radio);
    return diametro * Math.PI;

}


//Área

function areacirculo(radio) {

    return (radio * radio) * Math.PI;

}


console.groupEnd();
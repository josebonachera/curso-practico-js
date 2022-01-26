
// Codigo del cuadrado


console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden :" + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide :" + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide :" + areaCuadrado + " cm2");
console.groupEnd();











// Codigo del triángulo
console.group("Triángulos");
const lado1 = 6;
const lado2 = 6;
const base = 4;
const altura = 5.5;

console.log(
    "Los lados del triangulo miden :"
    + lado1
    + "cm, "
    + lado2
    + "cm y "
    + base
    + "cm"
);

console.log("La altura del triángulo mide :" + altura + " cm");

const perimetroTriangulo = lado1 + lado2 + base;

console.log("El perimetro del triángulo mide :" + perimetroTriangulo + " cm");

const areaTriangulo = (base * altura) / 2;

console.log("El área del triángulo mide :" + areaTriangulo + " cm2");

console.groupEnd();


console.group("Círculos");

//Radio

const radio = 4;
console.log("El radio del circulo mide :" + radio + " cm");

// Diametro

const diametro = radio * 2;
console.log("El diametro del circulo mide :" + diametro + " cm");

//PI

const pi = Math.PI;
console.log("PI es :" + pi + " cm");

//Circunferencia

const perimetrocirculo = diametro * pi;
console.log("El perimetro del circulo mide :" + perimetrocirculo + " cm");

//Área

const areacirculo = (radio * radio) * pi;
console.log("El área del circulo mide :" + areacirculo + " cm2");

console.groupEnd();
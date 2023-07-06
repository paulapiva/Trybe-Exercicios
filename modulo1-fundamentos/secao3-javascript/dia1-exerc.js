let num1 = 51;
let num2 = 30;
let num3 = 43;

//Exercício 01
soma = num1 + num2;
subt = num1 - num2;
mult = num1 * num2;
divis = num1 / num2;
modul = num1 % num2;

console.log("Adição: " + soma);
console.log("Subtração: " + subt);
console.log("Multiplicação: " + mult);
console.log("Divisão: " + divis);
console.log("Modulo: " + modul);

//Exercício 02

if (num1>num2) {
    console.log("Numero 01 ("+num1+") é maior que Numero 02 ("+num2+")");
} else if(num1<num2) {
    console.log("Numero 01 ("+num1+") é menor que Numero 02 ("+num2+")");
}else{
    console.log("Os numeros são iguais");
}

//Exercício 03
let maior
if (num1>num2 && num1>num3) {
    maior = num1;
} else if(num2>num3) {
    maior = num2
}else{
    maior = num3
}
console.log(maior);

//Exercício 04
let triangulo = 180
if (num1<0 && num2<0 && num3<0) {
    console.log("Ângulo inválido. Digite valor positivo");
} else if(num1+num2+num3===triangulo){
    console.log(true);
}else{
    console.log(false);
}


//Exercicio 06
if (num1%2===0 || num2%2===0 || num3%2===0) {
    console.log(true);
}else{
    console.log(false); 
}
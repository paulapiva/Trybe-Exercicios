//Exercicio 07

let salBruto = 12000;
let inss;
let aliqIR;
let parcelaIR;
let valorIR;
let salLiquidoShow;

let inss8 = 1556.94;
let inss9 = 2594.92;
let inss11 = 5189.82;
let inssMax = 5189.82;

let irZero = 1903.98;
let irSete = 2826.65
let irQuinze = 3751.05;
let irVinteDois = 4664.68;

//INSS
if (salBruto <=inss8) {
  inss = salBruto * 0.08;
} else if (salBruto <=inss9) {
  inss = salBruto * 0.09;
} else if (salBruto <=inss11) {
  inss = salBruto * 0.11;
} else if (salBruto > inss11) {
  inss = 570.88;
}

let salBase = salBruto - inss;

if (salBase <= irZero) {
  valorIR = 0
} else if(salBase <= irSete) {
  aliqIR = salBase*0.075
  valorIR = (aliqIR - 142.80)
} else if(salBase <= irQuinze) {
  aliqIR = salBase*0.15
  valorIR = (aliqIR - 354.80)
} else if(salBase <= irVinteDois) {
  aliqIR = salBase*0.225
  valorIR = (aliqIR - 631.130)
} else if(salBase > irVinteDois) {
  aliqIR = salBase*0.275
  valorIR = (aliqIR - 869.36)
}

let salLiquido = salBase-valorIR;

salLiquidoShow = salLiquido.toFixed(2)
console.log(salLiquidoShow);
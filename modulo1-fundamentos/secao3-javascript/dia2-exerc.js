//Array e loop for

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0;
let media = 0


for (let index = 0; index < numbers.length; index++) {
  //console.log(numbers[index]);
  soma = soma + numbers[index];
}
media = soma/numbers.length
//console.log(`Soma do vetor ${soma}`);
//console.log(`Média do vetor ${soma/numbers.length}`);

if (media>20) {
  //console.log("O valor da média aritmética é maior que 20");
} else {
 // console.log("O valor da média aritmética é menor ou igual a 20");
}

//Utilizando for, descubra o maior valor contido no array e imprima-o.
let maior = numbers[0];

for(let i = 0; i < numbers.length; i++) {
  if(maior < numbers[i]){
    maior = numbers[i]
  }
}
//console.log(maior);
let impar = 0
for(let i = 0; i < numbers.length; i++) {
  if(numbers[i] % 2 !== 0){
    impar += 1
  }
}
// if(impar === 0){
//   console.log("não existe valor ímpar");
// }else{
//   console.log(`Há ${impar} valores ímpares`);
// }


//fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero
let somaFatorial = 10;
for(let i = 10; i > 1; i--){
  somaFatorial = somaFatorial * i
//  console.log(somaFatorial);
}

let palavras = "paralelepipedo";
const chars = palavras.split('');
let palavrasContra = chars.reverse()
let juntado = palavrasContra.join('')
//console.log(juntado);


let triangulo = 5
let symbol = '*';
let inputLine = '';
let inputPosition = triangulo - 1;
// for (let i = 0; i < triangulo; i++){
//   inputLine = inputLine + symbol;
//   console.log(inputLine);
// };

// for (let i = 0; i < triangulo; i++){
//   inputLine = inputLine + symbol;
// };
// for (let i = 0; i < triangulo; i++){
// console.log(inputLine);
// }


for (let i = 0; i < triangulo; i++){
  for (let columnIndex = 0; columnIndex < triangulo; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};



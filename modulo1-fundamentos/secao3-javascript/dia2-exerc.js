//Array e loop for

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0;
let media = 0


for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
  soma = soma + numbers[index];
}
media = soma/numbers.length
console.log(`Soma do vetor ${soma}`);
console.log(`Média do vetor ${soma/numbers.length}`);

if (media>20) {
  console.log("O valor da média aritmética é maior que 20");
} else {
  console.log("O valor da média aritmética é menor ou igual a 20");
}
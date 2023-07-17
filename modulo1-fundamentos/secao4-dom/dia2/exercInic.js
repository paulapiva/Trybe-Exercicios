/*
Acesse o elemento where-are-you.
Acesse parent a partir de where-are-you e adicione uma color a ele.
Acesse o first-child-of-child e adicione um texto a ele. Você se lembra dos vídeos da aula anterior? Eles ensinam como fazer isso.
Acesse o first-child a partir de parent.
Acesse o first-child a partir de where-are-you.
Acesse o texto Attention! a partir de where-are-you.
Acesse o third-child a partir de where-are-you.
Acesse o third-child a partir de parent.


const whereAreYou = document.getElementById('where-are-you');

const parent = whereAreYou.parentElement;
parent.style.color = 'blue';

const neto = whereAreYou.firstElementChild
neto.innerText = "primeiro neto"

const parentNeto = parent.firstElementChild;

const parent2 = whereAreYou.previousElementSibling

const atencao = whereAreYou.nextSibling

const terceiro = whereAreYou.nextElementSibling

const terceiroPai = parent.lastElementChild.previousElementSibling;

console.log(terceiroPai);
 */


/*
Crie um irmão para elementoOndeVoceEsta.
Crie um filho para elementoOndeVoceEsta.
Crie um filho para primeiroFilhoDoFilho.
A partir desse filho criado, acesse terceiroFilho.


const pai = document.getElementById('pai')

const irmao = document.createElement('section')
irmao.id = 'irmao-de-onde'
pai.appendChild(irmao)

const onde = document.getElementById("elementoOndeVoceEsta")
const filho = document.createElement('section')
filho.id = 'filho-de-onde'
onde.appendChild(filho)

const filhoDoFilho = document.getElementById("primeiroFilhoDoFilho")
const oneNeto = document.createElement('section')
oneNeto.id = 'filho-do-filho-eh-neto'
filhoDoFilho.appendChild(oneNeto)

const terceiro = oneNeto.parentElement.parentElement.nextElementSibling

 */

const oPai = document.getElementById('where-are-you')
oPai.removeChild(oPai.firstElementChild);
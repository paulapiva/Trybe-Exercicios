let tagh1 = document.createElement('h1');
tagh1.innerText = 'TrybeTrip - Agência de Viagens'
tagh1.className = 'title'
document.body.appendChild(tagh1)

let princip = document.createElement('main')
princip.className = 'main-content'
document.body.appendChild(princip)

let secao = document.createElement('section')
secao.className = 'center-content'
princip.appendChild(secao)

let parag = document.createElement('p')
parag.innerText = "Conheça o mundo"
secao.appendChild(parag)

let esquerda = document.createElement('section')
esquerda.className = "left-content"
princip.appendChild(esquerda)

let direita = document.createElement('section')
direita.className = "right-content"
princip.appendChild(direita)

let foto = document.createElement('img')
foto.src = 'https://picsum.photos/200'
foto.className = 'small-image'
esquerda.appendChild(foto)

let contar = document.createElement('ul')
let num=['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']
for(let index=0; index < num.length; index += 1){
    let lista = document.createElement('li')
    lista.innerText = num[index]
    contar.appendChild(lista)
}
direita.appendChild(contar)

for(let index=0; index < 3; index += 1){
    let tagh3 = document.createElement('h3');
    tagh3.innerText = index
    tagh3.className = 'description'
    princip.appendChild(tagh3)
}

princip.removeChild(esquerda)
 
let direitaCentro = document.getElementsByClassName('right-content')[0]
direitaCentro.style.marginRight = 'auto'

let secaoCentro = document.getElementsByClassName('center-content')[0]
secaoCentro.parentNode.style.backgroundColor = 'lightgreen'

contar.lastChild.remove();
contar.lastChild.remove();
const player = 
  { name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
      golden: 2,
      silver: 3
    },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
  };

  let message = `A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade.`;
//   console.log(message);

//   let achievements = 0;
//   for(let index=0; index < player['bestInTheWorld'].length; index += 1) {
//     achievements += 1;
//   }
  
  let achievements = `A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player['bestInTheWorld'].length} vezes.`;
//   console.log(achievements);


//construtores objetos
  const playerKey = Object.keys(player) //pega todas as chaves e guarda no array como strings
//   console.log(playerKey); //é um array

  const playerValue = Object.values(player)
//   console.log(playerValue); //é um array

  const playerEntry = Object.entries(player) //todas as propriedades, conjunto de entrada e valor
//   console.log(playerEntry); //é um array
//   console.log(playerEntry[2][1]); //acessar array dentro array


const clonePlayer = Object.assign({}, player) //criar cópias de objetos (alvo, origem)

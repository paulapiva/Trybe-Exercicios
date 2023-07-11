//Exercicio 05
let entrada = "Bispo"
let nomePeca = entrada.toLowerCase();
console.log(nomePeca);

switch (nomePeca) {
    case "bispo":
        console.log("qualquer casa ao longo da diagonal em que se encontra");
        break;
    case "torre":
        console.log("qualquer casa ao longo da fileira ou coluna em que se encontra");
        break;
    case "rainha":
        console.log("qualquer casa ao longo da fileira, coluna ou diagonal em que se encontra");
        break;
    case "cavalo":
        console.log("movimento formando um L");
        break;
    case "peão":
        console.log("uma casa que esteja imediatamente à sua frente");
        break;
    case "peao":
        console.log("uma casa que esteja imediatamente à sua frente");
        break;
    case "rei":
        console.log("para uma casa vizinha");
        break;

    default:
        console.log("Peça inexistente");
        break;
}
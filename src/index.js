console.log("Desafio Classificador de nível de Herói");

let nome = "Mário";
let experiênciaXP = 9000;
let nivel;

if (experiênciaXP <= 1000) {
    nivel = "Ferro";
} else if (experiênciaXP <= 2000) {
    nivel = "Bronze";
} else if (experiênciaXP <= 5000) {
    nivel = "Prata";
} else if (experiênciaXP <= 7000) {
    nivel = "Ouro";
} else if (experiênciaXP <= 8000) {
    nivel = "Platina";
} else if (experiênciaXP <= 9000) {
    nivel = "Ascendente";
} else if (experiênciaXP <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log("O herói " + nome + " está no nível " + nivel);

////////////////////////////////////////////////////////////////////

console.log("Desafio Calculadora de partidas Rankeadas");

let userName = getnomeJogador("Mário");
let resultado = Rankeadas(80, 30);

console.log("O herói " + userName + " está no nível " + resultado);

function getnomeJogador(nome){
    let nomeJogador = nome
    return nomeJogador
}

function Rankeadas(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return nivel;
}

////////////////////////////////////////////////////////////////////

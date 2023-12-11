console.log("Desafio Classificador de nível de Herói");

let nome = "Mário";
let experiênciaXP = 6000;
let nivel;

if (experiênciaXP <= 1000) {
    nivel = "Ferro";
} else if (experiênciaXP === 1001 && experiênciaXP <= 2000) {
    nivel = "Bronze";
} else if (experiênciaXP === 2001 && experiênciaXP <= 5000) {
    nivel = "Prata";
} else if (experiênciaXP === 5001 && experiênciaXP <= 7000) {
    nivel = "Ouro";
} else if (experiênciaXP === 7001 && experiênciaXP <= 8000) {
    nivel = "Platina";
} else if (experiênciaXP === 8001 && experiênciaXP <= 9000) {
    nivel = "Ascendente";
} else if (experiênciaXP === 9001 && experiênciaXP <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log("O herói " + nome + " está no nível " + nivel);

const nomes = [
    "Cachorro brincalhão",
    "Gato independente",
    "Pássaro cantador",
    "Peixinho tranquilo",
    "Coelho fofinho",
    "Réptil exótico",
    "Hamster aventureiro"
];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);

const nomes = ["Fantasia", "Ficção Cientifica", "Finais felizes", "Finais em aberto", "leve e divertido","Intenso e dramático", "Romance de época"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
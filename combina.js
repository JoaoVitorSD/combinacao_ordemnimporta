function compara(array1, novo) {
    let i = 0
    let u = 0
    let j = 0
    let contab = 0
    let indice = 0
    for (i = 0; i < array1.length; i++) {
        contab = 0
        for (j = 0; j < array1[0].length; j++) {
            if (array1[i].some(elem => elem == novo[j])) {
                contab++

            }
            if (contab >= 3) {
                return 1
            }
        }
    }
    return 0
}

function sorteia(n, c) {
    let i = 0
    let sort = []
    let fruta = ""
    for (i = 0; i < c; i++) {
        do {
            fruta = n[parseInt(Math.random() * n.length)]
        } while (sort.indexOf(fruta) >= 0);
        sort[i] = fruta
    }
    return sort
}
function fatorial(n) {
    if (n == 0) {
        return 1
    }
    return n * fatorial(n - 1)
}
function fazsalada(frutas, total, desejado) {
    let tamanho = fatorial(total) / (fatorial(total - desejado) * fatorial(desejado))
    console.log(tamanho)
    let sorteado = []
    let salada = []
    let i = 0
    salada[0] = sorteia(frutas, desejado)
    for (i = 1; i < tamanho; i++) {
        do {
            sorteado = sorteia(frutas, desejado)
        }
        while (compara(salada, sorteado));
        salada[i] = sorteado
    }
    return salada
}
const frutas = ["Banana", "Maçã", "Goiaba", "Morango", "Uva"]
let now = sorteia(frutas, 3)
let salada = fazsalada(frutas, frutas.length, 3)

console.log(salada)
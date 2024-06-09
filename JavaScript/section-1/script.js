// arguments sustenta todos os argumentos dados no paramêtro.

// function funcao(){
//     let total = 0
//     for (let valor of arguments){
//         total += valor;
//     }
//     console.log(total)
// }

// funcao(1, 2, 3, 4, 5, 6, 7)

function funcao(a, b, c){
    let total = 0
    for (let valor of arguments){
        total += valor;
    }
    console.log(total, a, b, c)
}

funcao(1, 2, 3, 4, 5, 6, 7)
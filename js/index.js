let nomeHeroi = 'Reinaldo';
let message = `O herói de nome ${nomeHeroi}, está no nivel`;



for(let exp = 1000; exp <= 11000; exp += 1000){
    if (exp <= 1000) {
        console.log(`xp: ${exp} ${message} Ferro`)
    } else if (exp <= 2001) {
        console.log(`xp: ${exp} ${message} Bronze`)
    } else if (exp <= 3001) {
        console.log(`xp: ${exp} ${message} Prata`)
    } else if (exp <= 7001) {
        console.log(`xp: ${exp} ${message} Ouro`)
    } else if (exp <= 8001) {
        console.log(`xp: ${exp} ${message} Platina`)
    }else if (exp <= 9001) {
        console.log(`xp: ${exp} ${message} Ascendente`)
    }else if (exp <= 10000) {
        console.log(`xp: ${exp} ${message} Imortal`)
    } else if (exp >= 10001) {
        console.log(`xp: ${exp} ${message} Radiante`)
    }
}
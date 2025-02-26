let aantalVijanden = 0;
let puntenPerVijand = 0;
let heeftBonus = false;

let multipleScores = [];

document.getElementById("test").addEventListener("click", berekenScore, false);

function berekenScore(aantalVijanden, berekenScore, heeftBonus) {
    if (heeftBonus = true) {
        puntenPerVijand = puntenPerVijand + 50;
        console.log(puntenPerVijand);
    } else {
        heeftBonus;
    }

    if (puntenPerVijand = 10) {
        puntenPerVijand = puntenPerVijand + 10;
        console.log(puntenPerVijand);
    }

    let score = puntenPerVijand + heeftBonus;

}




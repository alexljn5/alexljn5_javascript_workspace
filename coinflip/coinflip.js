function coinFlip() {
    const oddsOfWinning = Math.floor(Math.random() * 100 + 1);
    let chanceForHouse = 51; //Percentage how often the house wins

    const coinImage = document.createElement("img");

    const existingImage = document.querySelector('img');
    if (existingImage) {
        existingImage.remove();
    }

    if (oddsOfWinning > chanceForHouse) {
        console.log("ur a winner");
        coinImage.src = "img/heads.png";
    } else {
        console.log("u lose");
        coinImage.src = "img/tails.png";
    }

    document.body.appendChild(coinImage);

}
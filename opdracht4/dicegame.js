function checkInput() {
    const inputField = document.getElementById('diceRoll');
    const diceNumbers = [];
    for (let i = 0; i < 5; i++) {
        diceNumbers.push(Math.floor(Math.random() * 6) + 1);
    }

    const imgElements = document.querySelectorAll("img");

    for (let i = 0; i < 5; i++) {
        const diceImage = imgElements[i];
        if (diceImage) {
            diceImage.src = `dice/dice${diceNumbers[i]}.png`;
        }
    }

    console.log(diceNumbers);

    function test() {
        console.log("kaas");
    }
}


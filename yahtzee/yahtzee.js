function checkInput() {
    const inputField = document.getElementById('diceRoll');
    // Roll the dice: random values from 1 to 6 for each dice
    const diceNumbers = [];
    for (let i = 0; i < 5; i++) {
        diceNumbers.push(Math.floor(Math.random() * 6) + 1);  // Get random values for 5 dice
    }

    const imgElements = document.querySelectorAll("img");

    // Assuming you have image elements with IDs 'dice1', 'dice2', ..., 'dice5'
    for (let i = 0; i < 5; i++) {
        //const diceImage = document.getElementById(`dice${i + 1}`);  // Get image element by ID (dice1, dice2, ..., dice5)
        const diceImage = imgElements[i];
        if (diceImage) {
            // Set the image source based on the random number for each dice
            diceImage.src = `dice/dice${diceNumbers[i]}.png`;  // Set the corresponding image
        }
    }

    console.log(diceNumbers);  // Log the random values of the dice
}


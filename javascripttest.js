function checkInput() {
    const inputField = document.getElementById('userInput');
    const correctNumber = '4';
    const userInput = inputField.value;
    const easterEgg = "Cream";

    if (userInput === correctNumber || userInput === easterEgg) {
        document.body.appendChild(document.createElement('img')).src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbzjDAhEpnPg-iWYvS-IhTx7mbalR6T3RHjQ&s';
    } else {
        document.getElementById('wrong').innerHTML = "NUH UH WRONG NUMBER!";
    }
}


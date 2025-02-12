function checkInput() {
    const inputField = document.getElementById('userInput');
    const correctNumber = Math.floor(Math.random() * 10) + 1;;
    const userInput = inputField.value;
    const easterEgg = "Cream";
    const existingImages = document.querySelectorAll('img');
    existingImages.forEach(image => image.remove());

    document.getElementById('wrong').innerHTML = "";
    document.getElementById('correct').innerHTML = "";
    document.getElementById('lower').innerHTML = "";
    document.getElementById('heigher').innerHTML = "";
    document.getElementById('mustbenumber').innerHTML = "";

    if (isNaN(userInput)) {
        document.getElementById('mustbenumber').innerHTML = "Sorry, only numbers allowed!";
        return;
    }

    if (userInput == correctNumber) {
        document.body.appendChild(document.createElement('img')).src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8e188593-1504-4ae2-b17b-286d076806b7/d1k2ml0-86e7a025-f508-4944-a071-df49cca45161.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhlMTg4NTkzLTE1MDQtNGFlMi1iMTdiLTI4NmQwNzY4MDZiN1wvZDFrMm1sMC04NmU3YTAyNS1mNTA4LTQ5NDQtYTA3MS1kZjQ5Y2NhNDUxNjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.L56BtzGCxSqVUrKASuzdusT-zjp4c3Pu87lwR3WEj7M';
        document.getElementById('correct').innerHTML = "Good job friendo, have a tea or coffee!!!!"
    }

    if (userInput != correctNumber) {
        document.getElementById('wrong').innerHTML = "NUH UH WRONG NUMBER!";

    }

    if (userInput === easterEgg) {
        document.body.appendChild(document.createElement('img')).src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbzjDAhEpnPg-iWYvS-IhTx7mbalR6T3RHjQ&s';
    }

    if (inputField.value < correctNumber) {
        document.getElementById('lower').innerHTML = "Sorry, you need to guess a higher number!";
    } else if (inputField.value > correctNumber) {
        document.getElementById('heigher').innerHTML = "Sorry, you need to guess a lower number!";
    }
}


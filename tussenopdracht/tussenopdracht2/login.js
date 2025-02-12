const username = "taco";
const password = "kaas123";


function checkInput() {
    const inputField = document.getElementById('userInput');
    const inputField2 = document.getElementById('userInput2');
    const userInput = inputField.value;
    const userInput2 = inputField2.value;

    if (userInput == username && userInput2 == password) {
        alert("Logged in!");
    } else {
        alert("Wrong username or password!");

    }

}


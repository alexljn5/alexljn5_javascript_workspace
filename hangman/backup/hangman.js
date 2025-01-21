let lives = 6;
let correctLetters = ["m", "e", "a", "t"];
let wrongLetters = [];
let correctWord = "meat";

function checkInput() {
    const inputField = document.getElementById('userInput');

    const letter1 = document.getElementById('letter1');
    const letter2 = document.getElementById('letter2');
    const letter3 = document.getElementById('letter3');
    const letter4 = document.getElementById('letter4');

    const userInput = inputField.value;
    document.getElementById("lives").value = lives;



    // Check if the entire word matches
    if (userInput === correctWord) {


    } else {
        // Loop through each letter in the correctWord
        let letterFound = false;
        for (let letter of correctWord) {
            if (userInput === letter) {
                letterFound = true; // The letter is found in the correct word
                document.getElementById("letter1").value = correctLetters;
                document.getElementById("letter2").value = correctLetters;
                document.getElementById("letter3").value = correctLetters;
                document.getElementById("letter4").value = correctLetters;
                break; // Exit the loop if a correct letter is found
            }
        }

        if (!letterFound && lives > 0) {
            lives--; // Decrease lives only if the letter is incorrect
            //Try to build that individual images gets created for each wrong try

            let newImage = document.createElement('img');

            // Set the image source based on the current lives
            if (lives === 5) {
                newImage.src = 'hangmanpics/hangman1.png';
            } else if (lives === 4) {
                newImage.src = 'hangmanpics/hangman2.png';
            } else if (lives === 3) {
                newImage.src = 'hangmanpics/hangman3.png';
            } else if (lives === 2) {
                newImage.src = 'hangmanpics/hangman4.png';
            } else if (lives === 1) {
                newImage.src = 'hangmanpics/hangman5.png';
            } else if (lives === 0) {
                newImage.src = 'hangmanpics/hangman6.png';

            }

            // Style the image for superimposing (centered on the page)
            newImage.style.position = 'absolute'; // Absolute positioning to stack
            newImage.style.top = '50%'; // Center vertically
            newImage.style.left = '50%'; // Center horizontally
            newImage.style.transform = 'translate(-50%, -50%)'; // Adjust for exact centering
            document.body.appendChild(newImage); // Append to the body
        }
    }

    document.getElementById("lives").value = lives;
}

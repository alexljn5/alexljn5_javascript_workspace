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

    let letterFound = false;

    
    for (let i = 0; i < correctWord.length; i++) {
        if (userInput === correctWord[i]) {
            letterFound = true; 
            
            document.getElementById(`letter${i + 1}`).value = userInput;
        }
    }

    if (!letterFound && lives > 0) {
        lives--; 
        let newImage = document.createElement('img');

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


        newImage.style.position = 'absolute'; 
        newImage.style.top = '50%'; 
        newImage.style.left = '50%'; 
        newImage.style.transform = 'translate(-50%, -50%)'; 
        document.body.appendChild(newImage); 
    }

    
    document.getElementById("lives").value = lives;

    if(correctLetters === correctWord) {
        console.log("test");
    }
}

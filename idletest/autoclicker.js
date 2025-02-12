import { state } from './main.js';


let numberOfAutoClickers = 0;
document.getElementById("autoClicker").addEventListener("click", autoClicker, false);


function autoClicker() {
    setInterval(() => {
        state.clicks++;
        document.getElementById("counter").value;
        document.getElementById("counter").value = state.clicks;
        console.log(state.clicks);
    }, 10000); //For future me, value needs to be in milliseconds
    document.getElementById("counter").value = state.clicks;

    document.getElementById("countOfAutoClickers").value;
    numberOfAutoClickers++;
    document.getElementById("countOfAutoClickers").value = numberOfAutoClickers;
}

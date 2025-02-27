import { state } from './main.js';

let numberOfAndreasLeftToe = 0;
let costOfAndreasLeftToe = 100;

document.getElementById("andreasLeftToe").addEventListener("click", andreasLeftToe, false);

document.getElementById("countOfAndreasLeftToe").value = numberOfAndreasLeftToe;
document.getElementById("costofAndreasLeftToe").value = costOfAndreasLeftToe;

function andreasLeftToe() {
    if (costOfAndreasLeftToe <= Math.round(state.clicks)) {
        state.clicks -= costOfAndreasLeftToe;

        setInterval(() => {
            state.clicks = state.clicks + 5;
            document.getElementById("counter").value = Math.round(state.clicks);
        }, 1000);

        document.getElementById("counter").value = Math.round(state.clicks);

        numberOfAndreasLeftToe++;
        document.getElementById("countOfAndreasLeftToe").value = numberOfAndreasLeftToe;

        costOfAndreasLeftToe += costOfAndreasLeftToe * 1.5;
        document.getElementById("costOfAndreasLeftToe").value = Math.round(costOfAndreasLeftToe);
        console.log("shittysharts");
    }
}

import { state } from './main.js';
import { multiplierState } from './inventory.js';
if (typeof state.clicks === "undefined") state.clicks = 0;

let numberOfAndreasLeftToe = 0;
let costOfAndreasLeftToe = 100;

document.getElementById("andreasLeftToe").addEventListener("click", andreasLeftToe, false);

document.getElementById("countOfAndreasLeftToe").value = numberOfAndreasLeftToe;
document.getElementById("costofAndreasLeftToe").value = costOfAndreasLeftToe;

function andreasLeftToe() {
    //Simple timer to give you clicks based in MS. Can change this around to have fun.
    if (costOfAndreasLeftToe <= Math.round(state.clicks)) {
        state.clicks -= costOfAndreasLeftToe;

        setInterval(() => {
            state.clicks = state.clicks + 5 * multiplierState.clickMultiplier;
            document.getElementById("counter").value = Math.round(state.clicks);
        }, 1000);


        //Code block to simply update input, maybe not forget Math.rounds to avoid decimal points?
        document.getElementById("counter").value = Math.round(state.clicks);
        numberOfAndreasLeftToe++;
        document.getElementById("countOfAndreasLeftToe").value = numberOfAndreasLeftToe;
        costOfAndreasLeftToe += costOfAndreasLeftToe * 1.5;
        document.getElementById("costofAndreasLeftToe").value = Math.round(costOfAndreasLeftToe);
    }
}

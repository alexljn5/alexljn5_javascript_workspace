import { state } from './main.js';


let numberOfFiveSecondReaper = 0;
let costOfFiveSecondreaper = 15;
document.getElementById("fiveSecondReaper").addEventListener("click", fiveSecondReaper, false);

function fiveSecondReaper() {
    if (costOfFiveSecondreaper <= state.clicks) {
        state.clicks = state.clicks - costOfFiveSecondreaper;
        setInterval(() => {
            state.clicks++;
            document.getElementById("counter").value;
            document.getElementById("counter").value = state.clicks;
            console.log(state.clicks);
        }, 5000); //For future me, value needs to be in milliseconds
        document.getElementById("counter").value = state.clicks;


        document.getElementById("countOfFiveSecondReapers").value;
        numberOfFiveSecondReaper++;
        document.getElementById("countOfFiveSecondReapers").value = numberOfFiveSecondReaper;
        costOfFiveSecondreaper = costOfFiveSecondreaper + costOfFiveSecondreaper * 0.5;
    } else {

    }

}

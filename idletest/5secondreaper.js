import { state } from './main.js';

let numberOfFiveSecondReaper = 0;
let costOfFiveSecondreaper = 15;

document.getElementById("fiveSecondReaper").addEventListener("click", fiveSecondReaper, false);

document.getElementById("countOfFiveSecondReapers").value = numberOfFiveSecondReaper;
document.getElementById("costOfFiveSecondReapers").value = costOfFiveSecondreaper;

function fiveSecondReaper() {
    //Simple timer to give you clicks based in MS. Can change this around to have fun.
    if (costOfFiveSecondreaper <= Math.round(state.clicks)) {
        state.clicks -= costOfFiveSecondreaper;

        setInterval(() => {
            state.clicks++;
            document.getElementById("counter").value = Math.round(state.clicks);
        }, 5000);


        //Code block to simply update input, maybe not forget Math.rounds to avoid decimal points?
        document.getElementById("counter").value = Math.round(state.clicks);
        numberOfFiveSecondReaper++;
        document.getElementById("countOfFiveSecondReapers").value = numberOfFiveSecondReaper;
        costOfFiveSecondreaper += costOfFiveSecondreaper * 0.5;
        document.getElementById("costOfFiveSecondReapers").value = Math.round(costOfFiveSecondreaper);
    }
}

import { displayFunction, state } from './main.js';
if (typeof state.clicks === "undefined") state.clicks = 0;

export let investTimerState = {
    investTimer: 3600000 //One hour
}


document.getElementById("theBankKeeper").addEventListener("click", theBankKeeper, false);
document.getElementById("input").addEventListener("click", input, false)
document.getElementById("output").addEventListener("click", output, false);
document.getElementById("invest").addEventListener("click", investClicks, false);

const theBank = new Map(); // Move the Map outside to keep stored values. was this literally the issue...?


function theBankKeeper(text) {
    if (state.clicks == 0) {
        alert("Not enough clicks!");
    } else {
        text = theBank.get("storedClicks");
        console.log("You have stored: " + text);
    }
}

function input() {
    if (!theBank.has("storedClicks")) {
        theBank.set("storedClicks", 0);
    }

    if (state.clicks > 0) {
        let storedClicks = theBank.get("storedClicks");
        theBank.set("storedClicks", storedClicks + state.clicks);
        state.clicks -= state.clicks;
        console.log(theBank);
        displayFunction();
    } else {
        alert("Not enough clicks!");
    }
}

function output() {
    if (!theBank.has("storedClicks")) {
        theBank.set("storedClicks", 0);
    }

    let stored = theBank.get("storedClicks");
    if (stored > 0) {
        state.clicks += stored; // Give all the stored clicks back
        theBank.set("storedClicks", 0); // Empty the bank
        console.log("Withdrew all clicks! Now you have: " + state.clicks);
        displayFunction();
    } else {
        alert("Not enough clicks!");
    }
}

function investClicks() {
    //Maybe you can deposit clicks and it grows in interest? Maybe even later some sort of stock exchange? 
    if (!theBank.has("storedClicks")) {
        theBank.set("storedClicks", 0);
    }

    let storedClicks = theBank.get("storedClicks");

    if (storedClicks > 0) {
        setInterval(() => {
            storedClicks = storedClicks * 1.05;
            theBank.set("storedClicks", storedClicks);
            displayFunction();
        }, investTimerState); //1 hour, I have an idea. This will be an exported functions for upgrades.
    } else {
        alert("Not enough clicks in the bank to invest!");
    }

    console.log(investTimerState);
}


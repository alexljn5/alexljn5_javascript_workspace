import { displayFunction, state } from './main.js';
if (typeof state.clicks === "undefined") state.clicks = 0;

document.getElementById("theBankKeeper").addEventListener("click", theBankKeeper, false);

const theBank = new Map(); // Move the Map outside to keep stored values. was this literally the issue...?

function theBankKeeper(text) {


    if (!theBank.has("storedClicks")) {
        theBank.set("storedClicks", 0);
    }

    if (state.clicks > 0) {
        let stored = theBank.get("storedClicks");
        theBank.set("storedClicks", stored + state.clicks);
        state.clicks -= state.clicks;
        console.log(theBank);
        displayFunction();
    } else {
        console.log("Not enough clicks to store.");
    }
    text = theBank.get("storedClicks");
    console.log("You have stored: " + text);
}

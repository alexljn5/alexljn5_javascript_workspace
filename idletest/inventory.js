import { state } from './main.js';
if (typeof state.clicks === "undefined") state.clicks = 0;

export let multiplierState = {
    clickMultiplier: 2
};

import { displayFunction } from './main.js';


//I honestly barely knows how this works.
let inventory = [];

/*
let giftFromTheGodsItem = "giftfromthegods";
let doubleTroubleItem = "doubletrouble";
*/

//Somehow pushing functions into the Array instead of a given string value makes it so it works when adding multiple buttons to upgrade stuff, wat.
document.getElementById("giftfromthegods").addEventListener("click", giftFromTheGods, false);
document.getElementById("doubletrouble").addEventListener("click", doubleTrouble, false);
document.getElementById("doubletheclicks").addEventListener("click", doubleClickProduction, false);

loopArray();

function giftFromTheGods() {
    let costOfGiftFromTheGods = 5;

    if (costOfGiftFromTheGods <= state.clicks && !inventory.includes(giftFromTheGods)) {
        inventory.push(giftFromTheGods);
        state.clicks = state.clicks + 500;
        document.getElementById("giftfromthegods").disabled = true;


        displayFunction();
    } else {
        alert("not enough clicks");
    }
}

function doubleTrouble() {
    if (state.clicks >= 10 && !inventory.includes(doubleTrouble)) {
        inventory.push(doubleTrouble);
        state.clicks = state.clicks * 2;
        document.getElementById("doubletrouble").disabled = true; //Just disables button

        displayFunction();
    } else {
        alert("not enough clicks");
    }
}

function doubleClickProduction() { //Code that will eventually give you a x2 multiplier on certain towers
    if (state.clicks >= 4200 && !inventory.includes(doubleClickProduction)) {
        inventory.push(doubleClickProduction);
        multiplierState.clickMultiplier = 2;
        document.getElementById("doubletheclicks").disabled = true;

        displayFunction();
    } else {
        alert("not enough clicks.");
    }

}



function loopArray() {
    setInterval(() => {
        for (let i = 0; i < inventory.length; i++) {
            console.log(inventory);
            //Works, checks if the function is already pushed to prevent repeat upgrades
        }
    }, 500);
}

//Same loop could be utilized for for example: slow growth of clicks, Grok assisted me with this, great idea.

/*

function loopArray() {
    setInterval(() => {
        for (let i = 0; i < inventory.length; i++) {
            if (inventory[i] === giftFromTheGods) {
                state.clicks += 10; // Passive click income
            } else if (inventory[i] === doubleClickProduction) {
                state.clicks += multiplierState.clickMultiplier; // Uses the multiplier
            } // doubleTrouble could stay a one-time boost, so no loop effect
            document.getElementById("counter").value = Math.round(state.clicks);
        }
        console.log("Inventory:", inventory);
    }, 1000); // 1 second is a good pace
}


*/



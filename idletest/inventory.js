import { state } from './main.js';
import { investTimerState } from './npc.js';
if (typeof state.clicks === "undefined") state.clicks = 0;

export let multiplierState = {
    clickMultiplier: 2
};

import { displayFunction } from './main.js';


//I honestly barely knows how this works.
let inventory = [];
let costOfInvestHalfTimer = 10000;
let trackUpgradesHalfTimer = 0;

/*
let giftFromTheGodsItem = "giftfromthegods";
let doubleTroubleItem = "doubletrouble";
*/

//Somehow pushing functions into the Array instead of a given string value makes it so it works when adding multiple buttons to upgrade stuff, wat.
document.getElementById("giftfromthegods").addEventListener("click", giftFromTheGods, false);
document.getElementById("doubletrouble").addEventListener("click", doubleTrouble, false);
document.getElementById("doubletheclicks").addEventListener("click", doubleClickProduction, false);
document.getElementById("halfTheInvestTimer").addEventListener("click", halfTheInvestTimer, false);

loopArray();

function giftFromTheGods() {
    let costOfGiftFromTheGods = 5;

    if (costOfGiftFromTheGods <= state.clicks && !inventory.includes(giftFromTheGods)) {
        inventory.push(giftFromTheGods);
        //state.clicks = state.clicks + 500; pure for debugging, will just give myself like 1million clicks lol
        state.clicks = state.clicks + 100000000;
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

//WORKS
function halfTheInvestTimer() {
    const maximumUpgradesOfHalfTimer = 5;
    if (state.clicks >= costOfInvestHalfTimer && !inventory.includes(halfTheInvestTimer)) {
        if (trackUpgradesHalfTimer >= maximumUpgradesOfHalfTimer) {
            inventory.push(halfTheInvestTimer);
            document.getElementById("halfTheInvestTimer").disabled = true;
        } else {
            trackUpgradesHalfTimer++
            investTimerState.investTimer = investTimerState.investTimer / 2;
            state.clicks = state.clicks - costOfInvestHalfTimer;
            displayFunction();
            //Gives the initial cost and updates the value correctly with initial cost and then a log unit.
            costOfInvestHalfTimer = Math.round(costOfInvestHalfTimer + (costOfInvestHalfTimer + Math.log(state.clicks * 100)));
            document.getElementById("costOfHalfTheInvestTimer").value = costOfInvestHalfTimer;
        }
        console.log(costOfInvestHalfTimer);
    }
}

//Works, checks if the function is already pushed to prevent repeat upgrades
function loopArray() {
    setInterval(() => {
        for (let i = 0; i < inventory.length; i++) {
            console.log(inventory);
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



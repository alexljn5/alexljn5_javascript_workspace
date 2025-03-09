import { state } from './main.js';

//I honestly barely knows how this works.
let inventory = [];

/*
let giftFromTheGodsItem = "giftfromthegods";
let doubleTroubleItem = "doubletrouble";
*/

//Somehow pushing functions into the Array instead of a given string value makes it so it works when adding multiple buttons to upgrade stuff, wat.
document.getElementById("giftfromthegods").addEventListener("click", giftFromTheGods, false);
document.getElementById("doubletrouble").addEventListener("click", doubleTrouble, false);

document.getElementById("testingButton").addEventListener("click", loopArray, false);

function giftFromTheGods() {
    if (state.clicks >= 5 && !inventory.includes(giftFromTheGods)) {
        inventory.push(giftFromTheGods);
        state.clicks = state.clicks + 500;
        document.getElementById("giftfromthegods").disabled = true;
        document.getElementById("counter").value = Math.round(state.clicks); //So counter displays accurate
    } else {
        alert("not enough clicks");
    }

    document.getElementById("counter").value = Math.round(state.clicks);
    console.log(inventory);
}

function doubleTrouble() {
    if (state.clicks >= 10 && !inventory.includes(doubleTrouble)) {
        inventory.push(doubleTrouble);
        state.clicks = state.clicks * 2;
        document.getElementById("doubletrouble").disabled = true; //Just disables button
        document.getElementById("counter").value = Math.round(state.clicks);
    } else {
        alert("not enough clicks");
    }
}

function doubleClickProduction() { //Code that will eventually give you a x2 multiplier on certain towers
    let towerMultipler = * 2;
}

function loopArray() {
    for (let i = 0; i < inventory.length; i++) {
        console.log(inventory);
        if (inventory[i] === doubleTrouble) { //Works, checks if the function is already pushed to prevent repeat upgrades


            console.log("fart");

        } //Maybe transform this into a while statement to continuously loop through the array to find values?
    }
}








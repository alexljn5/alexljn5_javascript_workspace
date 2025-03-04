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
        document.getElementById("doubletrouble").disabled = true;
        document.getElementById("counter").value = Math.round(state.clicks);
    } else {
        alert("not enough clicks");
    }
}



/* Eventual code to loop through array to find existing strings so you cant exploit the game... i think


for(let i = 0; i < inventory.length; i++) {

}




*/
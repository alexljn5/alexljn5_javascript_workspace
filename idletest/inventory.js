import { state } from './main.js';

let inventory = [];

let giftFromTheGodsItem = "giftfromthegods";
let doubleTroubleItem = "doubletrouble";

document.getElementById("giftfromthegods").addEventListener("click", giftFromTheGods, false);
document.getElementById("doubletrouble").addEventListener("click", doubleTrouble, false);

function giftFromTheGods() {
    if (state.clicks >= 5 && !inventory.includes(giftFromTheGodsItem)) {
        inventory.push(giftFromTheGodsItem);
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
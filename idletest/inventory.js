import { state } from './main.js';

let inventory = [];

let giftFromTheGods = "giftfromthegods";
let doubleTrouble = "doubletrouble";

document.getElementById("inventory").addEventListener("click", inventoryArray, false);

function inventoryArray() {
    if (state.clicks >= 5 && !inventory.includes(giftFromTheGods)) {
        inventory.push(giftFromTheGods);
        state.clicks = state.clicks + 500;
        document.getElementById("giftfromthegods").disabled = true;
    }
    else if (state.clicks >= 10 && !inventory.includes(doubleTrouble)) {
        inventory.push(doubleTrouble);
        state.clicks = state.clicks * 2;
        document.getElementById("doubletrouble").disabled = true;
    } else {
        alert("not enough clicks");
    }

    document.getElementById("counter").value = Math.round(state.clicks);
    console.log(inventory);

    if (document.getElementById("giftfromthegods").disabled = true && (document.getElementById("doubletrouble").disabled = true) && (state.clicks = 10)) {
        alert("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
}
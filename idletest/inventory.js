import { state } from './main.js';

let inventory = [];

let giftFromTheGods = "Gift From The Gods";

document.getElementById("inventory").addEventListener("click", inventoryArray, false);

function inventoryArray() {
    inventory.push(giftFromTheGods);
    state.clicks = state.clicks + 500;

    this.disabled = true



    document.getElementById("counter").value = Math.round(state.clicks);

    console.log(inventory);
}
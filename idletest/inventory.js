import { state } from './main.js';

let inventory = [];

let testItem = "fart";

document.getElementById("inventory").addEventListener("click", inventoryArray, false);

function inventoryArray() {
    inventory.push(testItem);
    state.clicks = 500;

    this.disabled = true

    console.log(inventory);
}
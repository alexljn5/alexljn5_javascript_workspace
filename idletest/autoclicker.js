import { state } from './main.js';

document.getElementById("autoclicker").addEventListener("click", autoClicker, false);

function autoClicker() {
    setInterval(() => {
        state.clicks++;
        document.getElementById("counter").value;
        document.getElementById("counter").value = state.clicks;
    }, 100);




    console.log(state.clicks);
}

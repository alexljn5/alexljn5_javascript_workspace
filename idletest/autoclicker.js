import { state } from './main.js';

let numberOfAutoClickers = 0;
let numberOfUpgradeAutoClickers = 0;
let costOfUpgradingAutoClickers = 15;
let upgradeAble = false;
let costOfAutoClicker = 5;

document.getElementById("autoClicker").addEventListener("click", autoClicker, false);
document.getElementById("upgradeForAutoClicker").addEventListener("click", upgradeAutoClicker, false);

function updateCostDisplay() {
    document.getElementById("costOfAutoClicker").value = costOfUpgradingAutoClickers;
}

function autoClicker() {
    if (costOfAutoClicker <= state.clicks) {
        state.clicks = state.clicks - costOfAutoClicker;
        setInterval(() => {
            state.clicks++;
            document.getElementById("counter").value = state.clicks;
            console.log(state.clicks);
        }, 10000); //For future me, values need to be in milliseconds

        document.getElementById("counter").value = Math.round(state.clicks);

        numberOfAutoClickers++;
        document.getElementById("countOfAutoClickers").value = numberOfAutoClickers;
        costOfAutoClicker = costOfAutoClicker + costOfAutoClicker * 0.5;

        document.getElementById("costOfAutoClicker").value = Math.round(costOfAutoClicker);
    } else {
        upgradeAble = false;
    }

}

function upgradeAutoClicker() {
    if (costOfUpgradingAutoClickers <= Math.round(state.clicks)) {
        upgradeAble = true;
        numberOfUpgradeAutoClickers++;
        document.getElementById("countOfAutoClickersUpgrades").value = numberOfUpgradeAutoClickers;
        costOfUpgradingAutoClickers += Math.log(costOfUpgradingAutoClickers + 1);
        updateCostDisplay();
        document.getElementById("counter").value = Math.round(state.clicks);



        state.clicks = state.clicks - costOfUpgradingAutoClickers; //Simply updates display, don't change
    }

}

updateCostDisplay();

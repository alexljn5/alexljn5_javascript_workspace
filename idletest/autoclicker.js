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

        document.getElementById("counter").value = state.clicks;

        numberOfAutoClickers++;
        document.getElementById("countOfAutoClickers").value = numberOfAutoClickers;
        costOfAutoClicker = costOfAutoClicker + costOfAutoClicker * 0.5;
    } else {

    }

}

function upgradeAutoClicker() {
    if (costOfUpgradingAutoClickers <= state.clicks) {
        upgradeAble = true;
        numberOfUpgradeAutoClickers++;
        document.getElementById("countOfAutoClickersUpgrades").value = numberOfUpgradeAutoClickers;
        costOfUpgradingAutoClickers += Math.log(costOfUpgradingAutoClickers + 1);
        updateCostDisplay();
        state.clicks = state.clicks * 0.01;
    }
}

updateCostDisplay();

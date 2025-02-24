import { state } from './main.js';

//SOMEHOW YOU CAN NOW GO INTO NEGATIVES UPGRADING WHY HWYWH WYHA YWy

let numberOfAutoClickers = 0;
let numberOfUpgradeAutoClickers = 0;
let costOfUpgradingAutoClickers = 15;
let upgradeAble = false;
let costOfAutoClicker = 5;
let clickMultiplier = 1;

document.getElementById("autoClicker").addEventListener("click", autoClicker, false);
document.getElementById("upgradeForAutoClicker").addEventListener("click", upgradeAutoClicker, false);

function updateCostDisplay() {
    document.getElementById("costOfAutoClicker").value = costOfUpgradingAutoClickers;
}

function autoClicker() {
    if (costOfAutoClicker <= Math.round(state.clicks)) {
        state.clicks = state.clicks - costOfAutoClicker;
        setInterval(() => {
            state.clicks += clickMultiplier;
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
//Every time you upgrade +1 clicks, maybe an upgrade to double this? But works! Dayum!
function upgradeAutoClicker() {
    if (costOfUpgradingAutoClickers <= Math.round(state.clicks)) {
        upgradeAble = true;
        numberOfUpgradeAutoClickers++;
        clickMultiplier = numberOfUpgradeAutoClickers + 1;
        document.getElementById("countOfAutoClickersUpgrades").value = numberOfUpgradeAutoClickers;
        state.clicks = state.clicks - costOfUpgradingAutoClickers; // display
        costOfUpgradingAutoClickers += Math.log(costOfUpgradingAutoClickers + 1);
        updateCostDisplay();


        document.getElementById("counter").value = Math.round(state.clicks);
    } else {
        upgradeAble = false;
    }

}



updateCostDisplay();

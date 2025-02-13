import { state } from './main.js';


let numberOfAutoClickers = 0;
let numberOfUpgradeAutoClickers = 0;
let costOfUpgradingAutoClickers = 5;
let upgradeAble = false;
document.getElementById("autoClicker").addEventListener("click", autoClicker, false);
document.getElementById("upgradeForAutoClicker").addEventListener("click", upgradeAutoClicker, false);


function autoClicker() {
    setInterval(() => {
        state.clicks++;
        document.getElementById("counter").value;
        document.getElementById("counter").value = state.clicks;
        console.log(state.clicks);
    }, 10000); //For future me, value needs to be in milliseconds
    document.getElementById("counter").value = state.clicks;


    document.getElementById("countOfAutoClickers").value;
    numberOfAutoClickers++;
    document.getElementById("countOfAutoClickers").value = numberOfAutoClickers;
}

function upgradeAutoClicker() {
    if (costOfUpgradingAutoClickers == state.clicks) {
        upgradeAble == true;
        document.getElementById("countOfAutoClickersUpgrades");
        numberOfUpgradeAutoClickers++;
        document.getElementById("countOfAutoClickersUpgrades").value = numberOfUpgradeAutoClickers;
        costOfUpgradingAutoClickers += Math.round(Math.log(costOfUpgradingAutoClickers + 1));

        console.log("kaas");
        console.log(costOfUpgradingAutoClickers);
    }
}


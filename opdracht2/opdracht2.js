document.addEventListener('DOMContentLoaded', () => {
    let count = 1;

    const container = document.querySelector(".container");

    const button = document.getElementById("clickButton");
    button.addEventListener("click", () => {
        if (count > 49) {
            console.log("You cannot add more than 49 elements.");
            return;
        }

        const newItem = document.createElement('div');

        newItem.className = "container__item";

        newItem.textContent = count;

        container.appendChild(newItem);

        count++;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector(".container");



    const button = document.getElementById("clickButton");
    button.addEventListener("click", () => {
        for (let count = 1; count <= 49; count++) {
            const newItem = document.createElement('div');

            newItem.className = "container__item";

            newItem.textContent = count;

            // Append the new item to the container
            container.appendChild(newItem);
        }

        button.disabled = true;
        button.textContent = "49 elements added!";
    });
});

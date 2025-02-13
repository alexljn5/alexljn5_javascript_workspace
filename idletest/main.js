export let state = {
    clicks: 0
};


document.getElementById("mainClick").addEventListener("click", onClick, false);

function onClick() {
    document.getElementById("counter").value;
    state.clicks++;
    document.getElementById("counter").value = state.clicks;
    console.log(state.clicks);
}



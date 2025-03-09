export let state = {
    clicks: 0
};

//Eventual function so everything is cleaned up, solely for displaying the new value of the counter and maybe more.
export function displayFunction() {
    document.getElementById("counter").value = Math.round(state.clicks);
}

let toggleTheMusic = new Audio("audio/music/ramranch.wav");


document.getElementById("mainClick").addEventListener("click", onClick, false);
document.getElementById("toggleMusic").addEventListener("click", toggleMusic, false);
document.getElementById("muteMusic").addEventListener("click", muteMusic, false);
document.getElementById("volumeSlider").addEventListener("input", volumeSlider, false);

function onClick() {
    document.getElementById("counter").value;
    state.clicks++;
    document.getElementById("counter").value = Math.round(state.clicks);

    console.log(state.clicks);
}

function toggleMusic() {
    toggleTheMusic.play();
}

function muteMusic() {
    toggleTheMusic.pause();
}

function volumeSlider() {
    let theVolumeSlider = document.getElementById("volumeSlider").value;
    toggleTheMusic.volume = theVolumeSlider / 100;
}


